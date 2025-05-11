import { projectsList } from '../../../data/AboutMeCV'
import { CardProject } from './CardProject'

export const GridProjects = () => {
	return (
		<div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4">
			{projectsList.map((project) => (
				<CardProject key={project.id} project={project} />
			))}
		</div>
	)
}
