import { projectsList } from '../../../data/AboutMeCV'
import { CardProject } from './CardProject'

export const GridProjects = () => {
	return (
		<div className="flex  justify-center  gap-4 ">
			{projectsList.map((project) => (
				<div key={project.id} className="">
					<CardProject project={project} />
				</div>
			))}
		</div>
	)
}
