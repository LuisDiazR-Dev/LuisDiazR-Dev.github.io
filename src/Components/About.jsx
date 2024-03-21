import LogoLinkedIn from './Icons/LinkedIn'
import LogoGitHub from './Icons/GitHub'

const About = {
	imgProfile: 'https://ludirez.github.io/img/FotoDePerfil.png',
	name: 'Luis Díaz-R',
	detailsA: 'Como ',
	emphasis: 'Desarrollador Web Full Stack',
	//todo meter Self en detalles B
	detailsB:
		', encuentro verdadera satisfacción en la creación continua de soluciones basadas en software sólidas, efectivas, livianas y flexibles.',

	networks: {
		LinkedIn: {
			URL: 'https://www.linkedin.com/in/luis-diazr/',
			logo: <LogoLinkedIn />,
		},
		GitHub: { URL: 'https://github.com/LuisDiazR-Dev', logo: <LogoGitHub /> },
	},

	status: 'Disponible para trabajar',

	about:
		'Crecí con mi Hermano que me introdujo al increíble mundo de las PC y Age of Empire desde entonces busco un patrón optimo en todo lo que hago, algo así como un TOC je je. Aunque en mi adolescencia me dispersé un poco, hace un año que me reencontré con esta pasión me di cuenta que es algo que haría sin que me pagaran, claro, soy padre de 2 bendiciones y no me lo puede permitir pero igual lo haría con mucha dedicación. Otra cosas que hago con la misma entereza es salir en a ruta con mi bici; horas y horas ja ja. Mi meta es poder ser parte de proyectos y soluciones de problemas basados en Software y me emocionará más si tienen IA. Gracias por leer,Éxitos.!',

	experience: [
		{
			cargo: 'Desarrollador WordPress',
			empresa: 'Yoonta',
			periodo: 'Actualmente',
			description:
				'Desarrollo y administro sitios web dinámicos, responsivos y optimizados tanto para SEO como para E-commerce. Destaco por implementar con meticulosidad los diseños de interfaz creados por el equipo.',
		},
		{
			cargo: 'Cargo 2',
			empresa: 'empresa 2',
			periodo: 'periodo 2',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit omnis iusto, cupiditate voluptatibus libero animi cum quasi dicta, recusandae fugiat amet error quibusdam dolorem reiciendis eaque quod odio numquam dolore?',
		},
	],
}

export default About
