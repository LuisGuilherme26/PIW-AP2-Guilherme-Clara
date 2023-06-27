import { useState } from "react";
import axios from "axios";

const CadastrarAluno = () =>{

    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [ira, setIra] = useState();

    //Função com o objetivo de registrar os alunos com um axios via POST
    function handleSubmit(e){
        e.preventDefault()

        const novoAluno = {nome,curso,ira}
        axios.post("http://localhost:3001/aluno/registrar",novoAluno)
        .then(
            (res) => {
                alert(`Aluno ${nome} cadastrado com sucesso!`)
            }
        ).catch(error=>console.log(error))
    }

    return(
        <>
            {/* Formulário que armazena valores nas variaveis de estado e chama a função handleSubmit via button submit */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" onChange={(event)=>setNome(event.target.value)}/>
                {/* Select com Onchenge que registra cada vez que um valor no select é alterado */}
                <select name="curso" placeholder="curso" onChange={(event)=>setCurso(event.target.value)}>
                    <option value="" >Selecione...</option>
                    <option value="DD">DD</option>
                    <option value="SI">SI</option>
                    <option value="CC">CC</option>
                    <option value="ES">ES</option>
                    <option value="EC">EC</option>
                    <option value="RC">RC</option>
                </select>
                <input type="number" placeholder="Ira" onChange={(event)=>setIra(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default CadastrarAluno