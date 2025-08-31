import './About.css'

function About() {
	return (
		<section id="about" className="section">
			<div className="container">
				<h2 className="section-title">Sobre Nós</h2>

				<div className="about-content">
					<div className="about-text">
						<p>
							A Coffee&Code é uma empresa especializada em
							desenvolvimento de aplicações web, fundada em 2015
							com o objetivo de transformar ideias em soluções
							digitais eficientes.
						</p>
						<p>
							Nossa equipe é composta por desenvolvedores
							experientes, designers criativos e especialistas em
							UX que trabalham juntos para entregar produtos de
							qualidade.
						</p>
					</div>

					<div className="about-image">
						<img
							src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
							alt="Equipe Coffee&Code"
						/>
					</div>
				</div>

				<div className="mission-vision">
					<div className="card">
						<h3 className="card-title">Missão</h3>
						<p>
							Desenvolver soluções tecnológicas inovadoras que
							resolvam problemas reais e agreguem valor aos nossos
							clientes, através de um atendimento personalizado e
							de excelência técnica.
						</p>
					</div>

					<div className="card">
						<h3 className="card-title">Visão</h3>
						<p>
							Ser reconhecida como referência em desenvolvimento
							web, destacando-nos pela qualidade de nossos
							produtos e pelo relacionamento próximo com nossos
							clientes.
						</p>
					</div>

					<div className="card">
						<h3 className="card-title">Valores</h3>
						<p>
							Inovação, Transparência, Qualidade, Comprometimento
							e Trabalho em Equipe. Acreditamos que esses valores
							são a base para construir relacionamentos
							duradouros.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
