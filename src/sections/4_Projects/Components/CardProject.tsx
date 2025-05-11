import { Card, Button, ButtonGroup } from 'flowbite-react'
import { Project } from '../../../data/AboutMeCvTypes'

interface CardProjectProps {
	project: Project
}

export const CardProject = ({ project }: CardProjectProps) => {
	return (
		<Card
			className="max-w-sm"
			imgAlt={project.name}
			imgSrc={project.imageUrl} // Cambia esta ruta si tienes una imagen real
		>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{project.name}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{project.description}
			</p>
			<ButtonGroup>
				<Button
					color="alternative"
					href={project.repositoryUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					URL github
				</Button>

				<Button
					color="alternative"
					href={project.deploymentUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					ver Demo
				</Button>

				<Button color="alternative">
					Ver Más
					{/* un detail del proyecto con imágenes, video  y tecnologías y más */}
				</Button>
			</ButtonGroup>
		</Card>
	)
}
