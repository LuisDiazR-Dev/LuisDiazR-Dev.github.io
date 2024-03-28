import About from './About'
import styled from 'styled-components'
import { useState } from 'react'
import { AnchorBtn } from './SocialBtn'

const ProyectosWordpress = () => {
	// Obtener los proyectos de WordPress de los datos de About
	const proyectosWordpress = About.proyectos.wordpress
	const [isExpanded, setIsExpanded] = useState(false)
	const maxLength = 160

	const toggleText = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<ProjectItemStyled>
			{proyectosWordpress.map((proyecto, index) => (
				<div className="card mb-3 mt-3 " style={{ maxWidth: '100%' }} key={index}>
					<div className="row g-0">
						<div className="row col-md-5">
							<img
								className={`rounded-start ${isExpanded === true ? 'isExpanded' : ''}`}
								src={proyecto.img} // Ruta de la imagen del proyecto
								// className="img-fluid  rounded-start"
								// className="rounded-start"
								alt={proyecto.nombre} // Descripción de la imagen
							/>
						</div>
						<div className="col-md-7">
							<div className="card-body ">
								<h5 className="card-title">{proyecto.nombre} </h5>
								<p className="card-text">{proyecto.description}</p>

								<TextArea className="mb-4">
									<p>
										{isExpanded
											? `${proyecto.logro}`
											: `${proyecto.logro.slice(0, maxLength)}...`}
									</p>
									<button
										type="button"
										className="btn mt-2"
										data-bs-toggle="button"
										onClick={toggleText}
									>
										{isExpanded ? 'Leer menos' : 'Leer más...'}
									</button>
								</TextArea>

								{/* Si hay una URL del sitio web, puedes agregar un enlace */}
								{proyecto.webSite && (
									<AnchorBtn
										href={proyecto.webSite}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-outline-dark"
									>
										Visitar Sitio
									</AnchorBtn>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</ProjectItemStyled>
	)
}

export default ProyectosWordpress

//** Styles
const ProjectItemStyled = styled.div`
	justify-content: center;
	align-items: center;
	/* border: 1px solid red; */

	div.row {
		padding: 0;
		margin: 0 auto;
	}

	img {
		padding: 0;
		/* height: ${({ isExpanded }) => (isExpanded ? '100%' : 'auto')}; */

		object-fit: cover;
	}
`

const TextArea = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;

	p {
		margin: 0;
	}
	button {
		align-self: flex-end;
		cursor: pointer;
		color: #d02020;
	}
	button.active {
		border: 1px solid #80808055;
		font-weight: 500;
		color: #727272;
		border-radius: 25px;
		padding: 4px 12px;
		margin-top: 4px;
	}
`
