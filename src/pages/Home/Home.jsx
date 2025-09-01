import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="hero-title">DESENVOLVEMOS SOLUÇÕES SOB MEDIDA, COM A 
          <span> EFICIÊNCIA DO CÓDIGO </span> 
          E O CONFORTO DE UMA BOA XÍCARA DE CAFÉ</h1>
        <p className="hero-subtitle">
          Desenvolvemos aplicações web de alta performance que impulsionam seu
          negócio. Combinamos design inovador com tecnologia de ponta para criar
          experiências digitais excepcionais.
        </p>
        
      </div>
      <Link to="/contact" className="cta-button">
          Contatar
        </Link>
    </section>
  );
}

export default Home;
