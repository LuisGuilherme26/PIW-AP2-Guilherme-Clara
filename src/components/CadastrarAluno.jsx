import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CadastrarAluno = () =>{

    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [ira, setIra] = useState();

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const novoAluno = {nome,curso,ira}
        axios.post("http://localhost:3001/alunos/registrar",novoAluno)
        .then(
            (res) => {
                alert(`Aluno ${nome} cadastrado com sucesso!`)
                navigate("/")
            }
        ).catch(error=>console.log(error))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" onChange={(event)=>setNome(event.target.value)}/>
                <input type="text" placeholder="Curso" onChange={(event)=>setCurso(event.target.value)}/>
                <input type="number" placeholder="Ira" onChange={(event)=>setIra(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default CadastrarAluno