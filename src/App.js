import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import CadastrarAluno from './components/CadastrarAluno';
import ListarAluno from './components/ListarAluno';
import EditarAluno from './components/EditarAluno';
import RecuperarAluno from './components/RecuperarAluno';
import DeletarAluno from './components/DeletarAluno';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ListarAluno/>}/>
        <Route path="/cadastrar" element={<CadastrarAluno/>}/>
        <Route path="/editar" element={<EditarAluno/>}/>
        <Route path="/recuperar" element={<RecuperarAluno/>}/>
        <Route path="/deletar" element={<DeletarAluno/>}/>
      </Routes>
    </Router>
  );
}

export default App;
