import { Project } from '../../../data/AboutMeCvTypes'

import { useState, useEffect, useRef } from 'react'
import { Badge } from 'flowbite-react'

interface CardProjectProps {
	project: Project
}

export const CardProject = ({ project }: CardProjectProps) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const descRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (descRef.current && !descRef.current.contains(event.target as Node)) {
				setIsExpanded(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<article className="group w-full max-w-sm md:max-w-xs lg:max-w-sm bg-white dark:bg-gray-800 rounded-xl  shadow-md hover:shadow-xl  transform hover:scale-95 transition-transform duration-300">
			<header className="h-48 ">
				<img
					src={project.imageUrl}
					alt={project.name}
					loading="lazy"
					className="w-full h-full object-contain p-4 "
				/>
			</header>

			<section className="flex flex-col p-4">
				<div className="flex flex-wrap gap-2">
					<Badge color="gray">{project.category[0]}</Badge>
				</div>
				<h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
					{project.name}
				</h2>

				<p
					ref={descRef}
					onClick={() => setIsExpanded(!isExpanded)}
					className={`text-gray-700 dark:text-gray-300 text-sm transition-all duration-500 cursor-pointer ${
						isExpanded ? '' : 'line-clamp-3'
					}`}
				>
					{project.description}
				</p>
			</section>

			<footer className="p-4 pt-0">
				<button
					className="mt-2 inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
					onClick={() =>
						window.open(
							`${project.repositoryUrl || project.deploymentUrl}`,
							'_blank'
						)
					}
					rel="noopener noreferrer"
				>
					View Project
				</button>
				{/* luego agregar detalles y despliegue */}
			</footer>
		</article>
	)
}
