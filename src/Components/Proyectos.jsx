import styled from 'styled-components'
import CodeSlash from './Icons/CodeSlash'
import ProyectosWordpress from './ProyectosWordpress'
import ProyectosFullStack from './ProyectosFullStack'
import { useState } from 'react'

const Proyectos = () => {
	const [activeTab, setActiveTab] = useState('wordpress')

	const handleTabClick = (category) => {
		setActiveTab(category)
	}

	return (
		<SectionStyled>
			<div className="d-flex align-items-center">
				<CodeSlash></CodeSlash>
				<h2 className="">Proyectos</h2>
			</div>

			{/* tabs */}
			<div className="mt-4">
				{/* Links */}
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a
							className={`nav-link ${activeTab === 'wordpress' ? 'active' : ''}`}
							aria-current={activeTab === 'wordpress' ? 'page' : undefined}
							onClick={() => handleTabClick('wordpress')}
						>
							Wordpress
						</a>
					</li>
					<li className="nav-item">
						<a
							className={`nav-link ${activeTab === 'fullstack' ? 'active' : ''}`}
							aria-current={activeTab === 'fullstack' ? 'page' : undefined}
							onClick={() => handleTabClick('fullstack')}
						>
							Full Stack
						</a>
					</li>
				</ul>

				<div id="content-tab">
					{activeTab === 'wordpress' && <ProyectosWordpress />}
					{activeTab === 'fullstack' && <ProyectosFullStack />}
				</div>
			</div>
		</SectionStyled>
	)
}

export default Proyectos

const SectionStyled = styled.section`
	/* border: 1px solid red; */
	margin-top: 96px;

	h2 {
		font-weight: 600;
		margin-bottom: 0;
	}

	svg {
		width: 1.8rem;
		margin-right: 12px;
	}
	a {
		cursor: pointer;
		color: gray; /* Color predeterminado */
		&.active {
			color: #d02020 !important;
			font-weight: 700;
		}
		&:hover {
			color: #d02020;
		}
	}
`
