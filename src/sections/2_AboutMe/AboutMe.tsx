import styled from 'styled-components'

import { aboutMeCv } from '../../data/AboutMeCV'

export const AboutMe = () => {
	return (
		<AboutMeStyled className="grid grid-cols-1 md:grid-cols-2 py-6">
			<div className="left flex flex-col  items-start space-y-4 gap-0 justify-center">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<span className="text-gray-400">
						¿Quien es <br />
					</span>
					{`${aboutMeCv.userName}`}
					<span className="text-gray-400"> ?</span>
				</h2>

				{aboutMeCv.aboutMe.map((item) => {
					return (
						<p className="font-normal text-gray-600 dark:text-gray-400 text-sm ">
							{item}
						</p>
					)
				})}

				{/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
					Más sobre mi (desplegable)
				</button> */}
			</div>
			<div className="right ">
				<img
					src="https://media.licdn.com/dms/image/v2/D4E35AQGHjXvB96UW1g/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1727140883135?e=1735970400&v=beta&t=Vnf8WpIUsM2IWM1AKGsogQKJkS5LQWx7PhBC83rjsUc"
					alt="imagen Luis Díaz"
					className="w-full max-w-sm object-cover rounded-full shadow-md mx-auto"
				/>
			</div>
		</AboutMeStyled>
	)
}

const AboutMeStyled = styled.section`
	/* border: solid 1px blue; */
	.left {
		/* justify-content: center; */
	}
	.right {
		/* border: solid 1px crimson; */
		/* align-items: center; */
	}

	.logo {
		max-height: 80px;
		margin: auto;
		padding: 1rem;
	}
	.logosRV {
		display: flex;
		gap: 20px;
	}
`
