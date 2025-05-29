import { projectsList } from '../../../data/AboutMeCV'
import { CardProject } from './CardProject'

interface GridProjectsProps {
	activeTab: string
}

export const GridProjects = ({ activeTab }: GridProjectsProps) => {
	// Filtrar los proyectos según la pestaña activa
	const filteredProjects = projectsList.filter((project) => {
		if (activeTab === 'all-projects') return true
		if (activeTab === 'react') return project.category.includes('React')
		if (activeTab === 'wordpress') return project.category.includes('WordPress')
		return false
	})

	return (
		<div className="flex justify-center gap-4">
			{filteredProjects.map((project) => (
				<div key={project.id} className="">
					<CardProject project={project} />
				</div>
			))}
		</div>
	)
}

// export const GridProjects = (  ) => {
// 	return (
// 		<div className="flex justify-center  gap-4 ">
// 			{projectsList.map((project) => (
// 				<div key={project.id} className="">
// 					<CardProject project={project} />
// 				</div>
// 			))}
// 		</div>
// 	)
// }
