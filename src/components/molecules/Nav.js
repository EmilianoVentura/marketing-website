import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          UP-Tech
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-links" onClick={toggleMenu}>
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
