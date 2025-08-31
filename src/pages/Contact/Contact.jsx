import './Contact.css'
import { useState } from 'react';

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<section id="contact" className="section">
			<div className="container">
				<h2 className="section-title">Entre em Contato</h2>

				<div className="contact-container">
					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="name" className="form-label">
								Nome
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-input"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email" className="form-label">
								E-mail
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-input"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="message" className="form-label">
								Mensagem
							</label>
							<textarea
								id="message"
								name="message"
								className="form-input form-textarea"
								value={formData.message}
								onChange={handleChange}
								required></textarea>
						</div>

						<button
							type="submit"
							className="cta-button"
							style={{ width: "100%" }}>
							Enviar Mensagem
						</button>
					</form>

					<div className="contact-info">
						<h3
							style={{
								marginBottom: "1.5rem",
								color: "var(--primary-blue)",
							}}>
							Informações de Contato
						</h3>

						<div className="info-item">
							<span className="info-icon">📧</span>
							<span>coffeeandcode.enterprises@gmail.com</span>
						</div>

						<div className="info-item">
							<span className="info-icon">📞</span>
							<span>(31) 1234-5678</span>
						</div>

						<div className="info-item">
							<span className="info-icon">🏢</span>
							<span>Av. Paulista, 1000 - São Paulo/SP</span>
						</div>

						<p style={{ marginTop: "2rem" }}>
							Estamos disponíveis de segunda a sexta, das 9h às
							18h. Responderemos seu e-mail em até 24 horas úteis.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
