import styled from 'styled-components'
import { Avatar } from 'flowbite-react'

import { Button, ButtonGroup } from 'flowbite-react'
import { HiCloudDownload, HiUserCircle } from 'react-icons/hi'

// import { aboutMeCv } from '../../data/AboutMeCV'

export const AboutMe = () => {
	return (
		<AboutMeStyled
			id="sobre-mi"
			className="
			mt-40 mx-auto mb-28			
			scroll-mt-32
			md:w-9/12  w-full
			flex flex-col
			items-center

			"
		>
			<Avatar
				img="https://avatars.githubusercontent.com/u/144191628?v=4"
				rounded
				size="xl"
				className="justify-center mb-4 flex flex-col md:flex-row "
			>
				<h1 className="font-bold mb-2">
					<span className=" text-gray-400  font-bold">Hey, </span>
					Soy Luis Díaz
				</h1>{' '}
				<div className="text-center md:text-left">
					<ButtonGroup>
						<Button
							size="xs"
							className=" bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800"
							href="https://www.linkedin.com/in/luis-diazr/"
						>
							<HiUserCircle className="me-2 h-4 w-4" />
							Open To Work
						</Button>

						<Button
							size="xs"
							// color="light"
							className="bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800"
							href="https://drive.google.com/file/d/1M7CW87pAWcnEoBLqJmplI-shWN32vasW/view?usp=sharing"
							target="_blank noreferrer noopener"
						>
							Download CV
							<HiCloudDownload className="ms-2 h-4 w-4" />
						</Button>
					</ButtonGroup>
				</div>
			</Avatar>

			{/* <div className="mb-2 text-center ">
				<h1>
					<span className=" text-gray-400">Hey, </span>
					Soy Luis Díaz
				</h1>
			</div> */}

			<p className="max-w-prose text-center mt-4 dark:text-gray-400">
				<span className="font-semibold text-cyan-600 text-xl">
					Desarrollador JavaScript Fullstack
				</span>
				, con +2 años de experiencia en la creación de E-commerce en WordPress y{' '}
				<span className="font-semibold text-cyan-600">especializado en </span>
				aplicaciones web modernas con React y Node.js. Me apasiona transformar
				ideas en{' '}
				<span className="font-semibold text-cyan-600">
					soluciones digitales.
				</span>
			</p>

			{/* {aboutMeCv.aboutMe.map((item, key) => (
				<p key={key} className=" text-gray-600 dark:text-gray-400">
					{item}
				</p>
			))} */}
			{/* Imagen - visible primero en móvil */}
			{/* <figure className=" col-span-10 md:col-span-4 order-1 md:order-2 flex justify-center  ">
				<img
					src="https://avatars.githubusercontent.com/u/144191628?v=4"
					alt="imagen Luis Díaz"
					className="profilePhoto w-full max-w-xs object-cover rounded-full"
				/>
			</figure> */}

			{/* Texto - visible segundo en móvil */}
			{/* <div className="col-span-10 md:col-span-6 :col-span-4 order-2 md:order-1 flex flex-col space-y-4 "> */}
			{/* <div className="">
				<h2 className="text-4xl font-bold mb-4 text-center md:text-left">
					Sobre mí
				</h2>
				<p className="mb-4 text-justify indent-8">
					Soy Luis Díaz, un desarrollador web apasionado por crear
					experiencias digitales excepcionales. Con una sólida
					formación en ingeniería informática y una especialización en
					desarrollo web, he dedicado los últimos años a perfeccionar
					mis habilidades en tecnologías front-end y back-end.
				</p>
				<p className="mb-4 text-justify indent-8">
					Mi enfoque se centra en construir aplicaciones web
					responsivas, accesibles y optimizadas para el rendimiento,
					utilizando las últimas tecnologías y mejores prácticas de la
					industria. Me encanta enfrentar desafíos técnicos y
					colaborar con equipos multidisciplinarios para llevar
					proyectos desde la concepción hasta la implementación exitosa.
				</p>
				<p className="mb-4 text-justify indent-8">
					Cuando no estoy codificando, disfruto explorando nuevas
					herramientas y tendencias en el desarrollo web, asistiendo a
					conferencias y contribuyendo a proyectos de código abierto.
					Mi objetivo es seguir creciendo como profesional y hacer una
					diferencia significativa en el mundo digital.
				</p>

				<div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
					{aboutMeCv.map((item, index) => (
						<Badge
							key={index}
							color="info"
							className="text-lg px-3 py-2"
						>
							<div className="flex items-center gap-2">
								<HiClock className="text-xl" />
								<span>
									{item.name} - {item.years} años
								</span>
							</div>
						</Badge>
					))}
				</div>
			</div> */}
		</AboutMeStyled>
	)
}

const AboutMeStyled = styled.section`
	/* height: 80vh; */
	figure {
		margin: 0 auto;
	}

	img.profilePhoto {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.467);
	}
	img.profilePhoto {
		@media (max-width: 768px) {
			max-width: 150px;
			min-height: 256px;
		}

		@media (min-width: 769px) {
			max-width: 250px;
			min-height: 350px;
			max-height: 450px;
		}
	}
`
