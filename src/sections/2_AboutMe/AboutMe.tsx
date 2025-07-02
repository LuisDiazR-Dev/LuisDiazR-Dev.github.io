import styled from 'styled-components'

import { aboutMeCv } from '../../data/AboutMeCV'

export const AboutMe = () => {
	return (
		<AboutMeStyled className="grid grid-cols-1 md:grid-cols-2 px-4 gap-6 items-center">
			{/* Imagen - visible primero en móvil */}
			<figure className="order-1 md:order-2 flex justify-center  aspect-square ">
				<img
					src="https://avatars.githubusercontent.com/u/144191628?v=4"
					alt="imagen Luis Díaz"
					className="w-full max-w-xs object-cover rounded-full"
				/>
			</figure>

			{/* Texto - visible segundo en móvil */}
			<div className="order-2 md:order-1 flex flex-col space-y-4">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<span className="text-gray-400">
						¿Quien es <br />
					</span>
					{`${aboutMeCv.userName}`}
					<span className="text-gray-400">?</span>
				</h2>

				{aboutMeCv.aboutMe.map((item, key) => (
					<p key={key} className="text-sm text-gray-600 dark:text-gray-400">
						{item}
					</p>
				))}
			</div>
		</AboutMeStyled>
	)
}

const AboutMeStyled = styled.section`
	figure {
		margin: 0 auto;
	}

	img {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.467);
	}
	img {
		@media (max-width: 768px) {
			max-width: 150px;
			min-height: 256px;
			margin-top: 1rem;
		}

		@media (min-width: 769px) {
			max-width: 250px;
			min-height: 350px;
			max-height: 450px;
		}
	}
`
