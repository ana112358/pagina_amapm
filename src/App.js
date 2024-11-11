import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Sobre from './pages/Sobre';
import Graficos from './pages/Graficos';
import Doacoes from './pages/Doacoes';
import Cadastro from './pages/Cadastro';
import './style.css';

const App = () => {
  return (
    <Router>
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
