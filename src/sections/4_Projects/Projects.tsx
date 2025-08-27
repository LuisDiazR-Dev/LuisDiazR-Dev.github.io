import styled from 'styled-components'
import { TabProjects } from './Components/TabProjects'
import { HiOutlineFire } from 'react-icons/hi'

export const Projects = () => {
	return (
		<ProjectsStyled id="proyectos" className="projects py-12 ">
			<header className="text-center pb-12   dark:text-white flex items-center justify-center gap-3">
				<HiOutlineFire className="text-3xl " />
				<h2>Creando Soluciones</h2>
			</header>

			<TabProjects />
		</ProjectsStyled>
	)
}

const ProjectsStyled = styled.section`
	/* border: solid 1px blue; */
`
