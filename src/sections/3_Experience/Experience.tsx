import { TimelineExperienceItem } from '../3_Experience/components/TimelineExperienceItem'

import { Timeline } from 'flowbite-react'

import styled from 'styled-components'

export const Experience = () => {
	return (
		<ExperienceSection className="experience py-12">
			<header className="text-center pb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-center gap-3">
				<svg
					className="w-[28px] h-[28px] text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.4"
						d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
					/>
				</svg>

				<h2>Experiencia Profesional</h2>
			</header>

			<Timeline>
				<TimelineExperienceItem />
			</Timeline>

			{/* <ExperienceList className="experience-list relative border-s border-gray-200 dark:border-gray-700">
				<TimelineExperienceItem />
			</ExperienceList> */}
		</ExperienceSection>
	)
}

const ExperienceSection = styled.section`
	/* border: 1px solid green; */
	width: 100%;
	max-width: 680px;
	margin: 0 auto;
`

// const ExperienceList = styled.ol`
// 	height: 300px; /* Alto fijo */
// 	overflow-y: auto; /* Scroll vertical */
// 	margin: 0;
// 	padding: 0;
// 	list-style: none; /* Elimina los estilos de lista */
// 	display: flex;
// 	flex-direction: column;
// 	gap: 16px; /* Espaciado entre los items */

// 	/* Estilos opcionales para el scroll */
// 	scrollbar-width: thin; /* Para navegadores modernos */
// 	scrollbar-color: #888 transparent;

// 	&::-webkit-scrollbar {
// 		width: 8px;
// 	}
// 	&::-webkit-scrollbar-thumb {
// 		background: #888;
// 		border-radius: 4px;
// 	}
// 	&::-webkit-scrollbar-thumb:hover {
// 		background: #555;
// 	}
// `
