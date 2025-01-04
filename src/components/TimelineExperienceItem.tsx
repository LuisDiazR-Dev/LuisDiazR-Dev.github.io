import styled from 'styled-components'
import { aboutMeCv } from '../data/AboutMeCV'

export const TimelineExperienceItem = () => {
	return (
		<>
			{aboutMeCv.experience.map((exp, index) => (
				<ExperienceItem key={index} className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<header className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						<time>
							{exp.startDate}
							{exp.endDate && <span>{` - ${exp.endDate}`}</span>}
						</time>
						<h3 className="font-mono">
							<a
								href={exp.companyURL}
								target="_blank"
								rel="noopener noreferrer"
							>
								{exp.company}
							</a>
						</h3>
					</header>
					<section>
						<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
							{exp.title}
						</h4>
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
							{exp.description[1]}
						</p>
					</section>
					<footer>
						<a href="#">leer más</a>
					</footer>
				</ExperienceItem>
			))}
		</>
	)
}

const ExperienceItem = styled.li`
	/* border: 1px solid blue;
	max-width: 360px; */
	header {
		display: flex;
		gap: 12px;
		align-items: center;
	}
`
