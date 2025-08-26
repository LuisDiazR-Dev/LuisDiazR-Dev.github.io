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
	role: 'Desarrollador JavaScript Fullstack',
	location: 'Colombia, Cúcuta',
	phone: 'https://wa.me/573175176580',
	email: 'diazr.info@gmail.com',
	aboutMe: [
		'👨🏻‍💻 Especializado en el desarrollo de aplicaciones web en React, Node.js y PostgreSQL, con experiencia en proyectos integrales que incluyen autenticación, roles de usuario y despliegue en producción.',
		'💹 Experiencia profesional desarrollando e-commerce y landing pages con WordPress, WooCommerce y Elementor, fortaleciendo mi visión integral del ciclo de vida de un producto digital.',
		'⚜ Habilidades en liderazgo y trabajo en equipo, aplicando metodologías ágiles (SCRUM) y buenas prácticas de desarrollo (SOLID).',
		'🔥 Apasionado por la tecnología, el aprendizaje continuo y la creación de soluciones digitales escalables y de alto impacto.',
		'💯 Buscando oportunidades para aportar valor en equipos dinámicos y proyectos innovadores.',
	],
})

export const socialMediaLinks: Readonly<SocialMedia> = Object.freeze({
	linkedInURL: 'https://www.linkedin.com/in/luis-diazr/',
	githubURL: 'https://github.com/luis-diaz-dev',
})

export const projectsList: ReadonlyArray<Project> = [
	{
		id: 1,
		name: 'Administrador Residencial',
		category: ['React', 'Proyecto Académico'],
		repositoryUrl: 'https://github.com/LuisDiazR-Dev/PF-PT-Frontend',
		deploymentUrl: '',
		imageUrl:
			'https://raw.githubusercontent.com/LuisDiazR-Dev/PF-PT-Frontend/develop/public/Residential%20Logo.jpg',
		description:
			'Desarrollé y lideré un software web innovador para la administración de condominios, optimizando la gestión de actividades clave.',
		features: [
			'Control y seguimiento de unidades residenciales.',
			'Gestión de bases de datos de copropietarios.',
			'Envío automatizado de notificaciones a residentes.',
			'Gestión de cobros y recepción de pagos.',
			'Reserva de áreas comunes.',
		],
		technologies: [
			'React',
			'Redux Toolkit',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
			'Vercel',
			'Railway',
		],
	},
	{
		id: 2,
		name: 'Pokémon App',
		category: ['React', 'Proyecto Académico'],
		repositoryUrl:
			'https://github.com/LuisDiazR-Dev/Individual-Project-Pokemon',
		deploymentUrl: '',
		imageUrl:
			'https://raw.githubusercontent.com/LuisDiazR-Dev/Individual-Project-Pokemon/main/pokemon.png',
		description:
			'Aplicación web para buscar y visualizar información de Pokémon, consumiendo una API externa desde un servidor Node.js y almacenando datos adicionales en PostgreSQL.',
		features: [
			'Buscador de pokémon por nombre.',
			'Visualización de detalles de pokémon.',
			'Creación y almacenamiento de nuevos pokémon.',
			'Sistema de favoritos.',
			'Interfaz con filtros, ordenamiento y paginado.',
		],
		technologies: [
			'React',
			'Redux Toolkit',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
			'Vercel',
			'Railway',
		],
	},
	{
		id: 3,
		name: 'Rick & Morty App',
		category: ['React', 'Proyecto Académico'],
		repositoryUrl:
			'https://github.com/LuisDiazR-Dev/RickAndMorty-app/tree/main',
		deploymentUrl: '',
		imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		description:
			'Aplicación para buscar y visualizar información de personajes de Rick & Morty, usando API externa y manejo de estados globales con Redux Toolkit.',
		features: [
			'Buscador de personajes por ID.',
			'Visualización de detalles.',
			'Agregar a favoritos.',
			'Lista de favoritos.',
			'UI moderna e intuitiva.',
		],
		technologies: [
			'React',
			'Redux Toolkit',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Tailwind CSS',
			'Vercel',
			'Railway',
		],
	},
	{
		id: 4,
		name: 'Montevivo',
		category: ['e-commerce', 'WordPress'],
		repositoryUrl: '',
		deploymentUrl: 'https://somosmontevivo.com/',
		imageUrl:
			'https://somosmontevivo.com/wp-content/uploads/2021/09/logo-png-768x366.png.webp',
		description:
			'E-commerce desarrollado con WordPress, Elementor y WooCommerce, especializado en la venta de verduras y hortalizas orgánicas.',
		features: [
			'Diseño responsivo y optimizado para dispositivos móviles.',
			'Integración de pasarelas de pago seguras.',
			'Catálogo de productos con descripciones detalladas.',
			'Sistema de gestión de envíos programados por el cliente.',
			'Optimización SEO para mejorar la visibilidad en motores de búsqueda.',
		],
		technologies: [
			'wordpress',
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
	{
		id: 5,
		name: 'Jean Pascal',
		category: ['e-commerce', 'WordPress'],
		repositoryUrl: '',
		deploymentUrl: 'https://jeanpascal.com',
		imageUrl:
			'https://www.jeanpascal.com/wp-content/uploads/2025/01/logo-jean-pascal-2.png',
		description:
			'E-commerce desarrollado con WordPress, Elementor y WooCommerce, especializado en la venta de perfumes y productos de belleza.',
		features: [
			'Diseño responsivo y optimizado para dispositivos móviles.',
			'Integración de pasarelas de pago seguras.',
			'Catálogo y filtros de productos con descripciones detalladas.',
			'cupones de descuento y promociones especiales.',
			'funnel de ventas para aumentar la conversión.',
		],
		technologies: [
			'wordpress',
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
	{
		id: 6,
		name: 'Spiti',
		category: ['Landing page', 'WordPress'],
		repositoryUrl: '',
		deploymentUrl: 'https://spiti.com.co/',
		imageUrl:
			'https://spiti.com.co/wp-content/uploads/2024/08/logo-SPITI-parque.png',
		description:
			'Proyecto inmobiliario desarrollado con WordPress, Elementor y Crocoblock, especializado en la venta de apartamentos de alta gama en Bogota .',
		features: [
			'Diseño responsivo y optimizado para dispositivos móviles.',
			'Integración de formularios de contacto personalizados.',
			'Galería de imágenes y videos de alta calidad.',
			'Información detallada sobre los apartamentos y servicios.',
			'Sistema de reservas y consultas en línea.',
		],
		technologies: [
			'wordpress',
			'Elementor',
			'Crocoblock & Jet Engine',
			'Adobe Illustrator',
			'Figma',
			'Google Workspace',
			'Loom',
		],
	},
]

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
			title: 'Desarrollador Web Fullstack',
			company: 'Freelance',
			companyURL: socialMediaLinks.linkedInURL,
			startDate: ' Ago 2024',
			endDate: 'actual',
			description: [
				'Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Node.js y PostgreSQL.',
				'Implementación de funcionalidades avanzadas como autenticación de usuarios, roles y permisos para garantizar la seguridad y personalización de las aplicaciones.',
				'Despliegue de aplicaciones en entornos de producción utilizando plataformas como Vercel y Railway, asegurando un rendimiento óptimo y alta disponibilidad.',
				'Colaboración con clientes para entender sus necesidades y traducirlas en soluciones técnicas efectivas y escalables.',
				'Mantenimiento y actualización continua de las aplicaciones para mejorar la funcionalidad y corregir posibles errores.',
				'Aplicación de metodologías ágiles (SCRUM) para gestionar proyectos de manera eficiente, facilitando la comunicación y colaboración entre los miembros del equipo.',
				'Implementación de buenas prácticas de desarrollo (SOLID) para asegurar un código limpio, mantenible y escalable.',
				'Optimización del rendimiento de las aplicaciones mediante técnicas como el lazy loading, memoization y optimización de consultas a la base de datos.',
				'Creación de documentación técnica detallada para facilitar el mantenimiento y futuras actualizaciones de las aplicaciones.',
				'Participación en revisiones de código y sesiones de pair programming para mejorar la calidad del código y compartir conocimientos con otros desarrolladores.',
			],
			toolsAndTechnologies: [
				'React',
				'Redux Toolkit',
				'Node.js',
				'Express',
				'PostgreSQL',
				'Sequelize',
				'Tailwind CSS',
				'Git',
				'GitHub',
				'WSL',
				'Vercel',
				'Railway',
				'Slack',
				'Trello',
			],
		}),
		Object.freeze({
			title: 'Desarrollador WordPress',
			company: 'Yoonta Leads',
			companyURL: 'https://www.linkedin.com/company/yoonta/posts/?feedView=all',
			startDate: 'Mar 2023 ',
			endDate: 'Sep 2024',
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
