import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const ListarAluno = () => {

    const [alunos, setAlunos] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/listar")
                .then(
                    ({ data }) => {
                        setAlunos(data)
                    }
                ).catch(e => console.log(e))
        }, []
    )

    function deletarAluno(id) {
        if (window.confirm("Deseja Excluir?")) {
            axios.delete("http://localhost:3001/alunos/apagar/" + id)
                .then(
                    () => {
                        alert("Aluno excluído!")
                    }
                ).catch(e => console.log(e))
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((aluno) => {
                            <tr>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                                <td>{aluno.ira}</td>
                                <td>
                                    <Link to={"/editar/" + aluno.id}><button>Editar</button></Link>
                                    <button onClick={() => deletarAluno(aluno.id)}>Deletar</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListarAluno