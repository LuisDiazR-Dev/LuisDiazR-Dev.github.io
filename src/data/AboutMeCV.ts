import {
	AboutMeCv,
	Project,
	SocialMedia,
	Skills,
	Experience,
	Education,
	ComplementaryEducation,
	Languages,
} from './AboutMeCvTypes'

export const aboutMeCv: Readonly<AboutMeCv> = Object.freeze({
	userName: 'Luis Alfredo Díaz Restrepo',
	alias: 'Luis DíazR-Dev',
	role: 'Desarrollador Web Full Stack',
	location: 'Colombia, Cúcuta',
	phone: '+57 317 5176580',
	email: 'diazr.info@gmail.com',
	aboutMe: [
		'Desarrollador JavaScript Fullstack con experiencia en React, Node, Express, Redux y PostgreSQL, enfocado en soluciones eficientes, escalables y con diseño limpio.',
		'Más de 2 años creando e-commerce y landing pages con WordPress, Elementor y WooCommerce, especializado en diseño responsivo y experiencia UI/UX.',
		'Experiencia en liderazgo y atención al cliente, con habilidades en comunicación, resolución de problemas y gestión de proyectos.',
		'Apasionado por la tecnología, el aprendizaje continuo y el desarrollo de software innovador de alto impacto.',
		'Buscando oportunidades para aplicar mis habilidades y contribuir al éxito de proyectos desafiantes.',
	],
})

export const socialMediaLinks: Readonly<SocialMedia> = Object.freeze({
	linkedInURL: 'https://www.linkedin.com/in/luis-diaz-dev',
	githubURL: 'https://github.com/luis-diaz-dev',
})

export const projectsList: ReadonlyArray<Readonly<Project>> = Object.freeze([
	Object.freeze({
		id: 1,
		name: 'Administrador Residencial',
		type: ['Full Stack', 'Proyecto Académico'],
		URL: 'textProject.com',
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
			'React + Vite',
			'Node',
			'Tailwind CSS',
			'Git - GitHub',
			'Redux Toolkit',
			'SCRUM',
			'Trello',
			'Vercel',
			'Railway',
		],
		tag: [
			'React',
			'Redux Toolkit',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
		],
	}),
	Object.freeze({
		id: 2,
		name: 'Pokemón App',
		type: ['Full Stack', 'Proyecto Académico'],
		URL: 'textProject.com',
		description: [
			'Desarrollé una aplicación web para buscar y visualizar información de pokémon, consumiendo datos de una API externa desde mi propio servidor Node.js y use PostgreSQL para almacenar información adicional de nuevos pokémon.',
		],
		features: [
			'Buscador de pokémon por nombre.',
			'Visualización de detalles de pokémon.',
			'Creación de nuevos pokémon y favoritos en la sesión iniciada.',
			'Almacenamiento de nuevos pokémon en base de datos.',
			'Interfaz de usuario intuitiva y atractiva con filtros, ordenamiento y paginado.',
		],
		toolsAndTechnologies: [
			'PostgreSQL',
			'Express',
			'React + Vite',
			'Node',
			'Tailwind CSS',
			'Git - GitHub',
			'Redux Toolkit',
			'Vercel',
			'Railway',
		],
		tag: [
			'React',
			'Redux Toolkit',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
		],
	}),
	Object.freeze({
		id: 3,
		name: 'Rick & Morty App',
		type: ['Full Stack', 'Proyecto Académico'],
		URL: 'textProject.com',
		description: [
			'Desarrollé una aplicación web para buscar y visualizar información de personajes de la serie animada Rick & Morty, consumiendo datos de una API externa desde mi propio servidor Node.js y manejando estados globales con Redux Toolkit para la sección de favoritos.',
		],
		features: [
			'Buscador de personajes por ID',
			'Visualización de detalles de personajes.',
			'Agregar personajes a favoritos.',
			'Visualización de personajes favoritos.',
			'Interfaz de usuario intuitiva y atractiva.',
		],
		toolsAndTechnologies: [
			'PostgreSQL',
			'Express',
			'React + Vite',
			'Node',
			'Tailwind CSS',
			'Git - GitHub',
			'Redux Toolkit',
			'Vercel',
			'Railway',
		],
		tag: [
			'React',
			'Redux Toolkit',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
		],
	}),
])

export const skillsList: Readonly<Skills> = Object.freeze({
	frontEnd: ['HTML', 'JavaScript', 'TypeScript', 'React', 'Redux Toolkit'],
	cssFrameworks: ['Bootstrap', 'Tailwind CSS', 'Styled Components'],
	backEnd: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'API RESTful'],
	versionControl: ['Git', 'GitHub'],
	agileMethodologies: ['SCRUM', 'Slack', 'Trello'],
	deployment: ['WSL', 'Vercel'],
	other: ['WordPress', 'WooCommerce', 'Elementor', 'Linux Ubuntu'],
})

export const experienceList: ReadonlyArray<Readonly<Experience>> =
	Object.freeze([
		Object.freeze({
			title: 'Desarrollador WordPress',
			company: 'Yoonta Leads',
			companyURL: 'https://www.linkedin.com/company/yoonta/posts/?feedView=all',
			startDate: 'Mar 2023',
			endDate: 'actualidad',
			description: [
				'Desarrollo de soluciones de e-commerce y landing pages responsivas y personalizadas utilizando herramientas como Elementor, WooCommerce y Jotform.',
				'Implementación de soluciones avanzadas con Crocoblock y Jet Engine para mejorar la funcionalidad de los sitios web.',
				'Implementación de soluciones de pago seguras y eficientes, facilitando transacciones en línea para los clientes.',
				'Resolución de problemas técnicos y soporte continuo a clientes, asegurando un funcionamiento óptimo de los sitios web.',
				'Capacitación a clientes en el uso de herramientas de gestión de contenido y administración de sitios web.',
				'Participación activa en reuniones de equipo para discutir estrategias de desarrollo y mejoras en los procesos y elementos visuales atractivos y coherentes con la marca.',
				'Colaboración con equipos de marketing y diseño para crear soluciones personalizadas que satisfacen las necesidades del cliente.',
				'Contribución a la creación de documentación técnica y guías de usuario para facilitar el uso de las herramientas desarrolladas.',
				'Optimización de la velocidad de carga y rendimiento de los sitios web, logrando una mejora del 30% en el tiempo de carga promedio.',
				'Implementación de prácticas de SEO para mejorar la visibilidad y el rendimiento de los sitios web en motores de búsqueda.',
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
				'Slack',
			],
		}),
	])

export const educationList: ReadonlyArray<Readonly<Education>> = Object.freeze([
	Object.freeze({
		title: 'Full Stack Web Developer',
		institution: 'Henry Bootcamp',
		description: '+800 horas teórico-prácticas',
		date: '2023-2024',
	}),
	Object.freeze({
		title: 'Tecnólogo en Mantenimiento Mecánico',
		institution: 'IUTI - Edo. Carabobo-Venezuela',
		description:
			'Capacitado para la evaluación e implementación de planes de mantenimiento en maquinas industriales en lineas de producción ',
		date: '2014 - 2017',
	}),
	Object.freeze({
		title: 'Técnico en electricidad y electrónica',
		institution: 'IUTEPAL - Edo. Carabobo-Venezuela',
		description:
			'Formación en instalación, mantenimiento y reparación de sistemas eléctricos y electrónicos.',
		date: '2009-2010',
	}),
	Object.freeze({
		title: 'Bachiller en Informática, Organización y Sistemas',
		institution: 'Colegio Santa Rosa - Edo. Carabobo-Venezuela',
		description:
			'Formación en software, desarrollo con Visual FoxPro y Flash, diagramas de flujo, mantenimiento de PC y manejo de Microsoft Office.',
		date: '2003-2007',
	}),
])

export const complementaryEducationList: Readonly<ComplementaryEducation> =
	Object.freeze({
		title: 'Escuela de Javascript',
		institution: 'Platzi',
		year: '2021',
	})

export const languagesList: Readonly<Languages> = Object.freeze({
	español: 'Nativo',
	inglés: 'A2 - Actualmente centrado en mejorar la fluidez del hablar',
})
