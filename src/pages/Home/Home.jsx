import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <main>
    <section id="home" className="hero">
      <div className="container">
        <h1 className="hero-title">DESENVOLVEMOS SOLUÇÕES SOB MEDIDA, COM A 
          <span> EFICIÊNCIA DO CÓDIGO </span> 
          E O CONFORTO DE UMA BOA XÍCARA DE CAFÉ</h1>
      <div class="scroll-down">⌄</div>  
      </div>
      
    </section>
    <section class="main-home">
        <div class="main-content">
          <br /> 
        <h2>TECNOLOGIA QUE FUNCIONA, <span>EXPERIÊNCIA QUE ENCANTA</span> </h2>
        </div>
        <div class="main-content"><p><span>Na Coffee & Code, </span> aliamos a lógica do desenvolvimento com o calor humano de uma boa conversa. Criamos sistemas, sites e soluções digitais sob medida, com foco em desempenho, usabilidade e simplicidade.</p>
        </div>
      </section>
    </main>
    
    
  );
}

export default Home;
