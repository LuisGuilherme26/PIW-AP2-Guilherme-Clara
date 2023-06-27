import { useEffect, useState } from "react"
import axios from "axios";

const Aprovados = () =>{

    const [alunos, setAlunos] = useState([]);

    // Recebendo a aramzenando os valores da tabela alunos na variavel de estado alunos
    useEffect(
        () => {
            axios.get("http://localhost:3001/aluno/listar")
                .then(
                    ({ data }) => {
                        setAlunos(data)
                    }
                ).catch(e => console.log(e))
        }, []
    )

    // Função que vai criar uma tr toda vez que for chamada, so que excluindo os iras que for abaixo da média
    function renderTable() {
        let array = []
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].ira >= 7) {
                array.push(
                    <tr>
                        <td>{alunos[i].nome}</td>
                        <td>{alunos[i].curso}</td>
                        <td>{alunos[i].ira}</td>
                    </tr>
                )
            }
        }

        return array
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
                    {/* Tabela sendo criada de forma automática de acordo com o tamanho do vetor alunos */}
                    {renderTable()}
                </tbody>
            </table>
        </>
    )
}

export default Aprovados