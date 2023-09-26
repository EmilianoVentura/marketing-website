import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Coloca aquí tu logotipo o contenido relacionado */}
          <img src="/tu-logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          {/* Coloca aquí tus enlaces de pie de página */}
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 UP-Tech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
