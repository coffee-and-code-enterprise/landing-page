import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

// Navbar component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          Coffee and Code
        </Link>

        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </div>

        <div
          className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            Sobre
          </Link>
          <Link to="/projects" className="nav-link">
            Projetos
          </Link>
          <Link to="/contact" className="nav-link">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar