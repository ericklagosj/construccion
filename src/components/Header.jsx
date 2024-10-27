import React from 'react';
import '../header.css'; // Importa los estilos

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>JLJ SPA LTDA - Construcción y Servicios</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#nosotros" className="btn-attractive"><i className="fas fa-users"></i> Nosotros</a></li>
          <li><a href="#servicios" className="btn-attractive"><i className="fas fa-tools"></i> Servicios</a></li>
          <li><a href="#galeria" className="btn-attractive"><i className="fas fa-image"></i> Galería</a></li>
          <li><a href="#contacto" className="btn-attractive"><i className="fas fa-envelope"></i> Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
