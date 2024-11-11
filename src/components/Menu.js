import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">Associação</a>
        </div>
        <ul className={`menu ${menuActive ? 'active' : ''}`}>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/graficos">Gráficos</Link></li>
          <li><Link to="/doacoes">Doações</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">Mais</a>
            <div className="dropdown-content">
              <a href="#">Contato</a>
              <a href="#">Projetos</a>
            </div>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
      </nav>
    </header>
  );
};

export default Menu;
