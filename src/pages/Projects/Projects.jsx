// Dependencies
import { Link } from 'react-router-dom';

// Stylesheet
import './Projects.css'

function Projects() {
	const projects = [
		{
			id: 1,
			title: "MakeAQuestion",
			description:
				"Rede social focada na resolução de perguntas diversas, podendo ser anônimas ou públicas. Feito por toda a equipe.",
			image: "/imgs/projects/makeaquestion.jpg",
			link: "https://ready-tasks-126120.framer.app/",
		},
		{
			id: 2,
			title: "The",
			description:
				"Um jogo feito com React + Vite e Node.js, ainda não te uma história, mas promete uma gameplay confortável e divertida! Feito pelo Guilherme Bittencourt.",
			image: "/imgs/projects/thegame.png",
			link: "https://the-react-orpin.vercel.app/menu",
		},
		{
			id: 3,
			title: "Bone Armor",
			description:
				"Um mod de Minecraft feito com java e a API do Mine, ele é sobre a otimização dos ossos no jogo. Feito pelo Vinícius Duarte",
			image: "/imgs/projects/bonearmor.png",
			link: "https://github.com/ViniciusDuarte09/bone_armor_minecraft_mod",
		}
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
								<Link to={project.link} className="project-link">
									Ver Projeto →
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
