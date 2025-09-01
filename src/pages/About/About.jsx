import './About.css';

const teamMembers = [
    {
        name: "GUILHERME BITTENCOURT",
        role: "Programador FullStack",
        
        imageUrl: "/imgs/people/guilherme_assis_bittencourt_drummond.png"
    },
    {
        name: "EMANUEL MAIA",
        role: "Programador FullStack",
       
        imageUrl: "/imgs/people/emanuel_maia.png"
    },
    {
        name: "VINÍCIUS SANTIAGO",
        role: "Programador FullStack",
        
        imageUrl: "/imgs/people/vinicius_santiago.png"
    },
    {
        name: "GUSTAVO HENRIQUE",
        role: "Programador FullStack",
        
        imageUrl: "/imgs/people/gustavo_henrique.png"
    }
];

function About() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('quem-somos');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="hero-section">
                <h1 className="hero-title">
                    CONHEÇA UM POUCO SOBRE QUEM SOMOS E O QUE FAZEMOS
                </h1>
                <div className="scroll-down-arrow" onClick={scrollToNextSection}>
                    &#8595;
                </div>
            </section>

            <section id="quem-somos" className="team-section">
                <div className="container">
                    <h2 className="section-title">QUEM <span>SOMOS</span></h2>
                    <div className="team-list">
                        {teamMembers.map((member, index) => (
                            <div className="team-member-row" key={index}>
                                <img src={member.imageUrl} alt={member.name} className="team-member-image" />
                                <div className="team-member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="historia" className="history-section">
                <div className="container">
                    <h2 className="section-title">HISTÓRIA DA EMPRESA</h2>
                    <div className="history-content">
                        <div className="history-text">
                            <p>
                                Essa empresa surgiu como resultado de um dos
                                projetos integradores - Senac Minas. Prontamente,
                                nos organizamos em grupo, e como café, tivemos a
                                ideia de criar um espaço acolhedor, porém eficiente,
                                para a criação e desenvolvimento de sistemas web.
                                Portanto, com uma equipe bem humorada, estamos
                                mais do que prontos para implementar seu sistema!
                            </p>
                        </div>
                        <div className="history-image">
                            <img
                                src="imgs/historia_da_empresa.png"
                                alt="Diagrama da Empresa"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;