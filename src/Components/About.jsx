import LogoLinkedIn from './Icons/LinkedIn'
import LogoGitHub from './Icons/GitHub'

const About = {
	imgProfile: 'https://ludirez.github.io/img/FotoDePerfil.png',
	name: 'Luis Díaz-R',
	detailsA: 'Como ',
	emphasis: 'Desarrollador Web Full Stack',
	//todo meter Self en detalles B
	detailsB: ', encuentro verdadera satisfacción en la creación continua de soluciones basadas en software; Sólidas, Efectivas, Livianas y Flexibles.',

	networks: {
		LinkedIn: {
			URL: 'https://www.linkedin.com/in/luis-diazr/',
			logo: <LogoLinkedIn />,
		},
		GitHub: { URL: 'https://github.com/LuisDiazR-Dev', logo: <LogoGitHub /> },
	},

	status: 'Disponible para trabajar',

	aboutMe:
		'Crecí con mi Hermano que me introdujo al increíble mundo de las PC y Age of Empire desde entonces busco un patrón optimo en todo lo que hago, algo así como un TOC je je. Aunque en mi adolescencia me dispersé un poco, hace un año que me reencontré con esta pasión me di cuenta que es algo que haría sin que me pagaran, claro, soy padre de 2 bendiciones y no me lo puede permitir pero igual lo haría con mucha dedicación. Otra cosas que hago con la misma entereza es salir en a ruta con mi bici; horas y horas ja ja. Mi meta es poder ser parte de proyectos y soluciones de problemas basados en Software y me emocionará más si tienen IA. Gracias por leer,Éxitos.!',

	experience: [
		{
			cargo: 'Desarrollador WordPress',
			empresa: 'Yoonta',
			periodo: 'Actualmente',
			description:
				'Desarrollo y administro sitios web dinámicos, responsivos y optimizados tanto para SEO como para E-commerce. Destaco por implementar con meticulosidad los diseños de interfaz creados por el equipo y resolución de los problemas del a día.',
		},
	],
	proyectos: {
		wordpress: [
			{
				img: 'https://somosmontevivo.com/wp-content/uploads/2020/05/canasta-scaled.jpg',
				nombre: 'MonteVivo',
				description: 'Tienda On-Line',
				logro:
					'Implementé y configuré un plugin que optimizó la gestión de pedidos. Esta contribución mejoró la eficiencia interna y la organización de la empresa mediante la limitación de horarios y días específicos para las compras, además de ofrecer la opción de selección de fecha de entrega durante el proceso de pago, asegurando así la precisión en la entrega de los pedidos.',
				technologies: ['Elementor', 'WooCommerce'],
				webSite: 'https://somosmontevivo.com/',
			},
		],
		fullStack: [
			{
				img: 'https://media.licdn.com/dms/image/D4E2DAQEn0eCT6OZaIQ/profile-treasury-image-shrink_800_800/0/1709336985524?e=1712548800&v=beta&t=_3fU_H8K5UmJemvUDd1NOMt6Oc0CNS7ghX_QgLBPP1A',
				nombre: 'Rick and Morty App',
				description: 'Proyecto integrador desarrollado durante la cursada en Henry.',
				logro:
					'App creada con solicitudes a un servidor local que hace uso de una API para mostrar en el Frontend los personajes por numero de ID. Manejando estados globales y locales para agregarlo/eliminado de una sección de "favoritos"',
				technologies: ['React + vite', 'Redux', 'Node.js', 'Express'],
				webSite: 'https://github.com/LuisDiazR-Dev/RickAndMorty-app',
			},
		],
	},
}

export default About
