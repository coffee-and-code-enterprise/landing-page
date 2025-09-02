import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <main className="main-container">
      <section id="home" className="hero">
        <div className="container">
          <h1 className="hero-title">DESENVOLVEMOS SOLUÇÕES SOB MEDIDA, COM A
            <span> EFICIÊNCIA DO CÓDIGO </span>
            E O CONFORTO DE UMA BOA XÍCARA DE CAFÉ</h1>
          <div><a class="scroll-down" href="#hero">⌄</a></div>
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
      <section class="code-home">
        <div class="code-content">
          <h2 class="code-title"><span>CÓDIGO</span> FEITO PARA VOCÊ</h2>
          <div class="code-text"><p>Cada linha do nosso código é pensada para atender às necessidades específicas do seu projeto, garantindo performance e escalabilidade sem perder a identidade da sua marca.</p>
          </div>




        </div>
        <div class="humor">
          <img id="humor" src="/imgs/home/humor_e_piadas.png" alt="" />
        </div>
      </section>
      <section class="team-home">
        <div class="team-content">
          <h2 class="team-title">CONHEÇA A NOSSA <span>EQUIPE</span></h2>
        </div>
        <div class="team-names">
          <div><img class="team-images" src="/imgs/home/gui.png" alt="" />
          <h3>Guilherme</h3> </div>
          <div><img class="team-images" src="/imgs/home/manu.png" alt="" />
          <h3>Emanuel</h3> </div>
          <div><img class="team-images" src="/imgs/home/vini.png" alt="" />
          <h3>Vinícius</h3> </div>
          <div><img class="team-images" src="/imgs/home/gus.png" alt="" />
          <h3>Gustavo</h3> </div> </div>
        
      </section>
      <section class="contact-home">
        <div class="contact-content">
          <div class="contact-text"><h2 id="text"><span>CONTATE-NOS</span> AGORA PARA AGENDAR UMA REUNIÃO</h2></div>
        </div>
        <Link to="/contact" class="contact-button">
          Contatar
        </Link>

      </section>
    </main>


  );
}

export default Home;
