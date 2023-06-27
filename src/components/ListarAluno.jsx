import { useEffect, useState } from "react"
import axios from "axios";

const ListarAluno = () => {

    const [alunos, setAlunos] = useState([]);

    // UseEffect que roda uma unica vez para armazenar os valores da tabela aluno
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

    // Função criada para renderizar uma tabela toda vez que for chamada
    function renderTable() {
        let cor = "black";
        let array = []
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].ira < 7) {
                cor = "red"
            } else {
                cor = "black"
            }
            array.push(
                <tr>
                    <td style={{ color: cor }}>{alunos[i].nome}</td>
                    <td>{alunos[i].curso}</td>
                    <td>{alunos[i].ira}</td>
                </tr>
            )
        }

        return array
    }

    //Função que calcula a media aritmetica em de acordo com o tamanho do vetor
    function calcularMedia() {
        let med = 0;
        for (let i = 0; i < alunos.length; i++) {
            med += alunos[i].ira;
        }
        med = med / alunos.length
        return (
            <tr>
                Média aritmetica: {med}
            </tr>
        )
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
                {/* Tabela sendo criada de acordo com o tamanho do vetor de alunos */}
                <tbody>
                    {renderTable()}
                    <tr>
                        {calcularMedia()}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListarAluno