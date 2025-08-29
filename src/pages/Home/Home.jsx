import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="hero-title">Soluções Web Sob Medida</h1>
        <p className="hero-subtitle">
          Desenvolvemos aplicações web de alta performance que impulsionam seu
          negócio. Combinamos design inovador com tecnologia de ponta para criar
          experiências digitais excepcionais.
        </p>
        <Link to="/contact" className="cta-button">
          Fale Conosco
        </Link>
      </div>
    </section>
  );
}

export default Home;
