import React from "react";
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tarefas from "./Tarefas";
import Sobre from "./Sobre";

function App() {
  return (
      <Router>
        <nav>
          <Link to="/">Sobre-Assessment</Link>
          <Link to="/tarefas">Tarefas</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Sobre/>} />
          <Route path='/tarefas' element={<Tarefas />} /> 
        </Routes>
      </Router>
  )
}

export default App;