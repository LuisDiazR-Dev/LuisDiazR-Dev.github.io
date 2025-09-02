import { useEffect, useState } from 'react'
import { Button, Navbar } from 'flowbite-react'
import { Brand } from '../../assets/components/Brand'

type SectionId = 'experiencia' | 'proyectos' | 'stack'
// qué es un type alias?
// explica aca brevemnte
// Un type alias en TypeScript es una forma de definir un nuevo nombre para un tipo existente, lo que facilita la reutilización y mejora la legibilidad del código.
// En este caso, SectionId es un type alias que representa un conjunto específico de cadenas que corresponden a los IDs de las secciones del sitio web.
// Esto ayuda a asegurar que solo se utilicen estos valores específicos en el código, proporcionando una capa adicional de seguridad de tipos.
// Por ejemplo, en lugar de usar simplemente string para los IDs de las secciones, usar SectionId garantiza que solo se puedan asignar los valores 'experiencia', 'proyectos' o 'stack'.

export const NavMenu = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(null)

	const handleSetActiveSection = (id: SectionId) => {
		setActiveSection(id)
		// Toggle: si haces click en la misma, se desactiva
		// setActiveSection((prev) => (prev === id ? null : id))
	}

	// Opcional: si entras con #hash en la URL, setea como activa esa sección
	// useEffect(() => {
	// 	const hash = window.location.hash.replace('#', '') as SectionId
	// 	if (hash === 'experiencia' || hash === 'proyectos' || hash === 'stack') {
	// 		setActiveSection(hash)
	// 	} else {
	// 		setActiveSection(null)
	// 	}
	// }, [])

	const isActive = (id: SectionId) => activeSection === id

	return (
		<Navbar
			fluid
			className="pt-4 md:max-w-fit mx-auto max-w-full bg-white-100 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 rounded-full shadow-sm"
		>
			<Navbar.Brand href="#sobre-mi">
				<div className="mr-3 border-r pr-3 border-gray-300">
					<Brand />
				</div>
			</Navbar.Brand>

			<div className="flex md:order-2 md:mx-5 space-x-2">
				<Button
					color="gray"
					className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800"
					size="sm"
					href="#footer"
				>
					¡Hablemos!
				</Button>
				<Navbar.Toggle />
			</div>

			<Navbar.Collapse>
				<Navbar.Link
					href="#experiencia"
					onClick={() => handleSetActiveSection('experiencia')}
					active={isActive('experiencia')}
					aria-current={isActive('experiencia') ? 'page' : undefined}
				>
					Experiencia
				</Navbar.Link>

				<Navbar.Link
					href="#proyectos"
					onClick={() => handleSetActiveSection('proyectos')}
					active={isActive('proyectos')}
					aria-current={isActive('proyectos') ? 'page' : undefined}
				>
					Proyectos
				</Navbar.Link>

				<Navbar.Link
					href="#stack"
					onClick={() => handleSetActiveSection('stack')}
					active={isActive('stack')}
					aria-current={isActive('stack') ? 'page' : undefined}
				>
					Stack
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
}

// import { Button, Navbar } from 'flowbite-react'
// import { Brand } from '../../assets/components/Brand'
// import { useState } from 'react'

// // import styled from 'styled-components'

// const sections = ['sobre-mi', 'experiencia', 'proyectos', 'stack', 'footer']

// export const NavMenu = () => {
// 	const [activeSection, setActiveSection] = useState<boolean>(false)

// 	return (
// 		<Navbar
// 			fluid
// 			className="
// 			pt-4
// 			md:max-w-fit mx-auto
// 			max-w-full
// 			bg-white-100 backdrop-blur-sm
// 			fixed top-0 left-0 right-0 z-40
// 			rounded-full
// 			shadow-sm
// 			"
// 		>
// 			<Navbar.Brand href="#sobre-mi">
// 				<div className="mr-3 border-r pr-3 border-gray-300">
// 					<Brand />
// 				</div>
// 			</Navbar.Brand>
// 			<div className="flex md:order-2 md:mx-5  space-x-2">
// 				<Button
// 					color="gray"
// 					className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800"
// 					size="sm"
// 					href="#footer"
// 				>
// 					¡Hablemos!
// 				</Button>{' '}
// 				{/* modal */}
// 				<Navbar.Toggle />
// 			</div>
// 			<Navbar.Collapse>
// 				<Navbar.Link
// 					href="#experiencia"
// 					onClick={() => handleSetActiveSection('experiencia')}
// 					active={activeSection}
// 				>
// 					Experiencia
// 				</Navbar.Link>
// 				<Navbar.Link
// 					href="#proyectos"
// 					onClick={() => handleSetActiveSection('proyectos')}
// 					active={activeSection}
// 				>
// 					Proyectos
// 				</Navbar.Link>
// 				<Navbar.Link
// 					href="#stack"
// 					onClick={() => handleSetActiveSection('stack')}
// 					active={activeSection}
// 				>
// 					Stack
// 				</Navbar.Link>
// 				{/* <Navbar.Link href="#">Servicios</Navbar.Link> */}
// 				{/* <Navbar.Link href="#" disabled>
// 					Tema
// 				</Navbar.Link> */}
// 			</Navbar.Collapse>
// 		</Navbar>
// 	)
// }

// // const NavbarStyled = styled.section`
// // 	background-color: #282c34;
// // `
