import styled from 'styled-components'

export const AboutMe = () => {
	return (
		<AboutMeStyled className="grid grid-cols-1 md:grid-cols-2 py-24 px-6">
			<div className="left flex flex-col  items-start space-y-4 gap-0 justify-center">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					¿Quien es <br /> Luis DíazR-Dev?
				</h5>

				<p className="font-normal text-gray-600 dark:text-gray-400">
					Desarrollador Full Stack orientado a la creación continua de
					soluciones basadas en software; Sólidas, Efectivas, Livianas y
					Flexibles.
				</p>
				<p className="font-normal text-gray-600 dark:text-gray-400">
					Más de año y medio de experiencia creando aplicaciones web escalables,
					intuitivas y optimizadas. Mi enfoque principal está en el diseño
					responsivo, la experiencia del usuario (UI/UX) y el rendimiento,
					utilizando herramientas como WordPress, Elementor y WooCommerce para
					potenciar soluciones de comercio electrónico.
				</p>

				<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
					Más sobre mi (desplegable)
				</button>
			</div>
			<div className="right ">
				<img
					src="https://media.licdn.com/dms/image/v2/D4E35AQGHjXvB96UW1g/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1727140883135?e=1735970400&v=beta&t=Vnf8WpIUsM2IWM1AKGsogQKJkS5LQWx7PhBC83rjsUc"
					alt="Descripción"
					className="w-full max-w-sm object-cover rounded-full shadow-md mx-auto"
				/>
			</div>
		</AboutMeStyled>
	)
}

const AboutMeStyled = styled.section`
	.left {
		/* border: solid 1px blue; */

		/* justify-content: center; */
	}
	.right {
		/* border: solid 1px crimson; */
		/* align-items: center; */
	}

	.logo {
		max-height: 80px;
		margin: auto;
		padding: 1rem;
	}
	.logosRV {
		display: flex;
		gap: 20px;
	}
`
