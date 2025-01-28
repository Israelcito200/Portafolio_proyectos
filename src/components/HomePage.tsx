import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePages.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/kanban");
  };

  useEffect(() => {
    // Activar la animación al cargar la página
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("loaded");
      }, index * 300); // Diferir las animaciones
    });
  }, []);

  return (
    <div className="homepage">
      {/* Estrellas y estrellas fugaces */}
      <div className="stars"></div>
      <div className="shooting-stars"></div>

      <header className="navbar">
        <h1 className="logo">Project Board</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">Acerca</a></li>
            <li><a href="#features">Características</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-section">
        <div className="welcome-container">
          <h2 className="welcome-title animate-on-load">Bienvenido a Project Board</h2>
          <p className="welcome-description animate-on-load">
            La herramienta perfecta para gestionar tus proyectos de manera eficiente y organizada.
          </p>
          <button className="start-button animate-on-load" onClick={handleStart}>
            Comenzar
          </button>
        </div>
        <div className="image-container">
          <img
            src="./imgg.png"
            alt="Gestión de proyectos"
            className="homepage-image"
          />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Project Board. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
