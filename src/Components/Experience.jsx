import styled from 'styled-components'
import BriefCase from './Icons/BriefCase'

const Experience = () => {
	return (
		<SectionStyled className="mt-5">
			<div className="experience-title d-flex align-items-center">
				<BriefCase></BriefCase>
				<h2>Experiencia laboral</h2>
			</div>

			<div className="experience-list mt-4">
				<div className="row ">
					<div className="col-5">
						<h3>Desarrollador WordPress</h3>

						<h4>Yoonta</h4>
						<time>Actualmente...</time>
					</div>
					<div className="col-12  col-sm-7">
						<p>
							Desarrollo y administro sitios web dinámicos, responsivos y optimizados
							tanto para SEO como para E-commerce. Destaco por implementar con
							meticulosidad los diseños de interfaz creados por el equipo, utilizando
							herramientas como Adobe Photoshop, Adobe Illustrator o Figma.
						</p>
					</div>
				</div>
			</div>
		</SectionStyled>
	)
}

export default Experience

const SectionStyled = styled.section`
	/* border: 1px solid red; */

	h2 {
		font-weight: 600;
		margin-bottom: 0;
	}

	h3,
	h4 {
		font-size: 1.2rem;
	}

	svg {
		width: 1.8rem;
		margin-right: 4px;
	}
	p {
		width: 100%;
		margin: 0;
		padding: 0;
		text-wrap: balance;
		/* text-wrap: pretty; */
	}
	div.experience-list {
		border-left: 2px solid #d02020;
		padding-left: 12px;
	}
`
