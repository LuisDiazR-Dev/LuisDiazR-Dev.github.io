import { Button, Navbar } from 'flowbite-react'
import { Brand } from '../../assets/components/Brand'

// import styled from 'styled-components'

export const NavMenu = () => {
	return (
		<Navbar
			fluid
			className="
			pt-4
			md:max-w-fit mx-auto
			max-w-full
			

			bg-white-100 backdrop-blur-sm 
			fixed top-0 left-0 right-0 z-40
			rounded-full
			shadow-sm
						
			"
		>
			<Navbar.Brand href="#sobre-mi">
				<div className="mr-3 border-r pr-3 border-gray-300">
					<Brand />
				</div>
			</Navbar.Brand>
			<div className="flex md:order-2 md:mx-5  space-x-2">
				<Button
					color="gray"
					className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800"
					size="sm"
					href="#footer"
				>
					¡Hablemos!
				</Button>{' '}
				{/* modal */}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#experiencia" active>
					Experiencia
				</Navbar.Link>
				<Navbar.Link href="#proyectos">Proyectos</Navbar.Link>
				{/* <Navbar.Link href="#">Servicios</Navbar.Link> */}
				<Navbar.Link href="#stack">Stack</Navbar.Link>
				{/* <Navbar.Link href="#" disabled>
					Tema
				</Navbar.Link> */}
			</Navbar.Collapse>
		</Navbar>
	)
}

// const NavbarStyled = styled.section`
// 	background-color: #282c34;
// `
