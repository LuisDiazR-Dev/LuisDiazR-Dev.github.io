import { Button, Navbar } from 'flowbite-react'

// import styled from 'styled-components'

export const NavMenu = () => {
	return (
		<Navbar
			fluid
			className="bg-gray-100 pt-4
			rounded-xl  rounded-t-none 			
			border border-t-0
			"
		>
			{/* #F5F5F5 */}
			<Navbar.Brand href="">
				<img
					src="/public/self_FavIcon.webp"
					className="mr-3 h-6 sm:h-9"
					alt="Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Self
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Button>¡Hablemos!</Button> {/* modal */}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">Sobre mi</Navbar.Link>
				<Navbar.Link href="#">Experiencia</Navbar.Link>
				<Navbar.Link href="#">proyectos</Navbar.Link>
				<Navbar.Link href="#">Stack</Navbar.Link>
				<Navbar.Link href="#">Servicios</Navbar.Link>
				<Navbar.Link href="#" disabled>
					Blog
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
}

// const NavbarStyled = styled.section`
// 	background-color: #282c34;
// `
