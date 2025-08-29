import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              TechSolutions
            </Link>
            <p>
              Especialistas em desenvolvimento web, criando soluções digitais
              que impulsionam negócios e melhoram a experiência do usuário.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Links Rápidos</h3>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/about" className="footer-link">
              Sobre
            </Link>
            <Link to="/projects" className="footer-link">
              Projetos
            </Link>
            <Link to ="/contact" className="footer-link">
              Contato
            </Link>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Redes Sociais</h3>
            <div className="social-links">
              <Link to="#" className="social-link">
                f
              </Link>
              <Link to="#" className="social-link">
                in
              </Link>
              <Link to="#" className="social-link">
                ig
              </Link>
              <Link to="#" className="social-link">
                tw
              </Link>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} TechSolutions. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer