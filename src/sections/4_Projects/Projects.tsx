import styled from 'styled-components'
import { TabProjects } from './Components/TabProjects'

export const Projects = () => {
	return (
		<ProjectsStyled className="projects py-12 ">
			<header className="text-center pb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<h2>Creando Soluciones - Proyectos</h2>
			</header>
			<TabProjects />
		</ProjectsStyled>
	)
}

const ProjectsStyled = styled.section`
	/* border: solid 1px blue; */
`
