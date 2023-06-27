import { useEffect, useState } from "react"
import axios from "axios"

const Login = () =>{

    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()
    const [nomeInput, setNomeInput] = useState()
    const [senhaInput, setSenhaInput] = useState()

    useEffect(
        ()=>{
            axios.get("http://localhost:3001/aluno/login")
            .then(
                ({data})=>{
                    setLogin(data.nome)
                    setSenha(data.senha)
                }
            )
        },
        []
    )

    function handleSubmit(e){
        e.preventDefault()

        if(login == nomeInput && senha == senhaInput){
            alert("Usuarios logado")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nome" onChange={(event)=>setNomeInput(event.target.value)}/>
                <input type="password" placeholder="senha" onChange={(event)=>setSenhaInput(event.target.value)}/>
                <button type="submit">Logar</button>
            </form>
        </>
    )
}

export default Login