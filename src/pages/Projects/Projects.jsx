import './Projects.css'

function Projects() {
	const projects = [
		{
			id: 1,
			title: "E-commerce Plataform",
			description:
				"Plataforma de e-commerce completa com sistema de pagamentos integrado, carrinho de compras e painel administrativo.",
			image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
			link: "#",
		},
		{
			id: 2,
			title: "Sistema de Gestão",
			description:
				"Sistema de gestão empresarial com módulos de RH, financeiro e estoque, desenvolvido com React e Node.js.",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
			link: "#",
		},
		{
			id: 3,
			title: "Aplicativo de Saúde",
			description:
				"Aplicativo web para acompanhamento de saúde com integração a wearables e relatórios personalizados.",
			image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
			link: "#",
		},
	];

	return (
		<section
			id="projects"
			className="section"
			style={{ backgroundColor: "#f3f4f6" }}>
			<div className="container">
				<h2 className="section-title">Nossos Projetos</h2>

				<div className="projects-grid">
					{projects.map((project) => (
						<div key={project.id} className="project-card">
							<div className="project-image">
								<img src={project.image} alt={project.title} />
							</div>
							<div className="project-info">
								<h3 className="project-title">
									{project.title}
								</h3>
								<p>{project.description}</p>
								<a href={project.link} className="project-link">
									Ver Projeto →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
