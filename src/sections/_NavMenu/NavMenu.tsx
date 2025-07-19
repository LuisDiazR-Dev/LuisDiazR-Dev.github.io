import { Button, Navbar } from 'flowbite-react'
import { HomeIcon } from '../../assets/icons'

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
					src="/src/assets/self_FavIcon.webp"
					className=" h-6 sm:h-9"
					alt="Logo"
				/>
				<span className="self-center whitespace-nowrap  font-normal dark:text-white">
					<i>Dev.Solutions </i>
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Button>¡Hablemos!</Button> {/* modal */}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="/" active>
					<HomeIcon className="w-4 h-4 text-gray-800 dark:text-gray-400" />
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
