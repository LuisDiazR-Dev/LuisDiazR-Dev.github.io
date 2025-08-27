import { TimelineExperienceItem } from '../3_Experience/components/TimelineExperienceItem'

import { Timeline } from 'flowbite-react'
import { HiOutlineBriefcase } from 'react-icons/hi'

import styled from 'styled-components'

export const Experience = () => {
	return (
		<ExperienceSection
			id="experiencia"
			className="experience my-20 scroll-mt-32"
		>
			<header className="text-center pb-12   dark:text-white flex items-center justify-center gap-3">
				<HiOutlineBriefcase className="text-3xl " />
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
