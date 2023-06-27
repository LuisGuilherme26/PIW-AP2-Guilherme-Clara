import { Link } from "react-router-dom"

const Navbar = () =>{

    return(
        <nav>
            <Link to={"/"}>Listar</Link>
            <Link to={"/cadastrar"}>Cadastrar</Link>
            <Link to={"/editar"}>Editar</Link>
            <Link to={"/aprovados"}>Alunos aprovados</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    )
}

export default Navbar