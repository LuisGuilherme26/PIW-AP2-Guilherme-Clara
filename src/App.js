import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import CadastrarAluno from './components/CadastrarAluno';
import ListarAluno from './components/ListarAluno';
import Aprovados from './components/Aprovados';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ListarAluno/>}/>
        <Route path="/cadastrar" element={<CadastrarAluno/>}/>
        <Route path="/aprovados" element={<Aprovados/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
