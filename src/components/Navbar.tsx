import React from 'react';
import './Navbar.css';
import profilePic from '../assets/gente.png';
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">PROYECT BOARD</div>
      <ul className="navbar-menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#configuracion">Configuración</a></li>
        <li><a href="#ayuda">Ayuda</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn-new-project">Nuevo Proyecto</button>
        <img className="profile-img" src={profilePic} alt="Perfil" />
      </div>
    </nav>
  );
};

export default Navbar;
