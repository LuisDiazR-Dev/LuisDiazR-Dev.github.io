import { AboutMeCv } from './AboutMeCvTypes'

export const aboutMeCv: Readonly<AboutMeCv> = Object.freeze({
	userName: 'Luis Alfredo Díaz Restrepo',
	role: 'Desarrollador Web Full Stack',
	alias: 'Luis DíazR-Dev',
	location: 'Colombia, Cúcuta',
	phone: '+57 317 5176580',
	email: 'diazr.info@gmail.com',
	socialMedia: {
		linkedInURL: 'https://www.linkedin.com/in/luis-diaz-dev',
		githubURL: 'https://github.com/luis-diaz-dev',
		portfolioURL: 'https://mi-portafolio.com',
	},
	aboutMe: [
		'Desarrollador Full Stack con experiencia práctica en el desarrollo de aplicaciones web y más de 2 años creando páginas orientadas a e-commerce y landing pages.',
		'Especializado en diseño responsivo y optimización de rendimiento utilizando WordPress, Elementor y WooCommerce.',
		'Experiencia previa en liderazgo de equipos y atención al cliente en la industria textil, con habilidades en comunicación efectiva, resolución de problemas y gestión de proyectos.',
		'Apasionado por tecnologías front-end y back-end y comprometido en contribuir a soluciones de software innovadoras.',
	],
	skills: {
		frontEnd: ['HTML', 'JavaScript', 'TypeScript', 'React', 'Redux Toolkit'],
		cssFrameworks: ['Bootstrap', 'Tailwind CSS', 'Styled Components'],
		backEnd: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'API RESTful'],
		versionControl: ['Git', 'GitHub'],
		agileMethodologies: ['SCRUM', 'Slack', 'Trello'],
		deployment: ['WSL', 'Vercel'],
		other: ['WordPress', 'WooCommerce', 'Elementor', 'Linux Ubuntu'],
	},
	experience: [
		{
			title: 'Desarrollador WordPress',
			company: 'Yoonta Leads',
			companyURL: 'https://www.linkedin.com/company/yoonta/posts/?feedView=all',
			startDate: 'Ago 2023',
			endDate: 'Nov 2024',
			description: [
				'Desarrollo de sitios web e-commerce y landing pages responsivas, mejorando la experiencia del usuario en múltiples dispositivos.',
				'Diseño e implementación de interfaces frontend intuitivas, asegurando una navegación fluida y un diseño visual atractivo.',
				'Actualización periódica de plugins y optimización del rendimiento de sitios web, logrando tiempos de carga más rápidos y mejor seguridad.',
				'Incremento del 20% en el tráfico web mejorando la navegación, SEO y experiencia de usuario durante el tercer trimestre de 2023.',
			],
			toolsAndTechnologies: [
				'WordPress',
				'Elementor',
				'WooCommerce',
				'Jotform',
				'Crocoblock & Jet Engine',
				'Adobe Illustrator',
				'Figma',
				'Google Workspace',
				'Loom',
			],
		},
	],
	projects: [
		{
			name: 'Administrador Residencial',
			type: 'Full Stack Web Developer - Proyecto Académico',
			description: [
				'Desarrollé y lideré un software web innovador para la administración de condominios, optimizando la gestión de actividades clave.',
			],
			features: [
				'Control y seguimiento de unidades residenciales.',
				'Gestión de bases de datos de copropietarios.',
				'Envío automatizado de notificaciones a residentes.',
				'Gestión de cobros y recepción de pagos.',
				'Reserva de áreas comunes.',
			],
			toolsAndTechnologies: [
				'PostgreSQL',
				'Express',
				'React',
				'Node',
				'Tailwind CSS',
				'Git - GitHub',
				'Redux Toolkit',
				'SCRUM',
				'Trello',
				'Vercel',
				'Railway',
			],
		},
	],
	education: [
		{
			title: 'Full Stack Web Developer',
			institution: 'Henry Bootcamp',
			duration: '+800 horas teórico-prácticas. 2023-2024.',
		},
		{
			title: 'Tecnólogo en Mantenimiento Mecánico',
			institution: 'IUTI - Edo. Carabobo-Venezuela',
			duration: '2014 - 2017',
		},
		{
			title: 'Técnico en electricidad y electrónica',
			institution: 'IUTEPAL - Edo. Carabobo-Venezuela',
			duration: '2009-2010',
		},
		{
			title: 'Bachiller en Informática, Organización y Sistemas',
			institution: 'Colegio Santa Rosa - Edo. Carabobo-Venezuela',
			duration: '2007',
		},
	],
	complementaryEducation: [
		{
			title: 'Escuela de Javascript',
			institution: 'Platzi',
			year: '2021',
		},
	],
	languages: [
		'Español: Nativo',
		'Inglés: A1 - Beginner (Actualmente estudiando)',
	],
})
