import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditarAluno = () =>{

    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [ira, setIra] = useState();

    const navigate = useNavigate()
    let id = useParams()

    useEffect(
        ()=>{
            axios.get("http://localhost:3001/alunos/recuperar/" + id)
                .then(
                    ({data}) => {
                        setNome(data.nome)
                        setCurso(data.curso)
                        setIra(data.ira)
                    }
                ).catch(error => console.log(error))
        },
        []
    )

    function handleSubmit(e){
        e.preventDefault()

        const editAluno = {nome,curso,ira}
        
        axios.put('http://localhost:3001/alunos/editar/' + id, editAluno)
            .then(
                () => {
                    navigate("/")
                }
            ).catch(error => console.log(error))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={nome} onChange={(event)=>setNome(event.target.value)}/>
                <input type="text" placeholder="Curso" value={curso} onChange={(event)=>setCurso(event.target.value)}/>
                <input type="number" placeholder="Ira" value={ira} onChange={(event)=>setIra(event.target.value)}/>
                <button type="submit">Editar</button>
            </form>
        </>
    )
}

export default EditarAluno