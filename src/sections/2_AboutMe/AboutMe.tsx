import styled from 'styled-components'

import { aboutMeCv } from '../../data/AboutMeCV'

export const AboutMe = () => {
	return (
		<AboutMeStyled
			id="sobre-mi"
			className="mt-28 md:mt-40 items-center grid grid-cols-10 gap-4 scroll-mt-32"
		>
			{/* Imagen - visible primero en móvil */}
			<figure className=" col-span-10 md:col-span-4 order-1 md:order-2 flex justify-center  ">
				<img
					src="https://avatars.githubusercontent.com/u/144191628?v=4"
					alt="imagen Luis Díaz"
					className="profilePhoto w-full max-w-xs object-cover rounded-full"
				/>
			</figure>

			{/* Texto - visible segundo en móvil */}
			<div className="col-span-10 md:col-span-6 :col-span-4 order-2 md:order-1 flex flex-col space-y-4 ">
				<div>
					<h1 className="  ">{aboutMeCv.userName}</h1>
					<h2 className="text-cyan-600 dark:text-cyan-400">
						Desarrollador JavaScript Fullstack
					</h2>
				</div>

				{aboutMeCv.aboutMe.map((item, key) => (
					<p key={key} className=" text-gray-600 dark:text-gray-400">
						{item}
					</p>
				))}
			</div>
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
