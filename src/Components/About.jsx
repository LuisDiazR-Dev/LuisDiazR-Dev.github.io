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
}

export default About
