import React from "react";
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tarefas from "./Tarefas";
import Sobre from "./Sobre";

function App() {
  return (
      <Router>
        <nav>
          <Link to="/">Tarefas</Link>
          <Link to="/sobre">Sobre-Assessment</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Tarefas/>} />
          <Route path='/sobre' element={<Sobre />} /> 
        </Routes>
      </Router>
  )
}

export default App;