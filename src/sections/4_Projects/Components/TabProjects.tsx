import { useState } from 'react'

import {
	AllProjectIcon,
	JavaScriptIcon,
	WordPressIcon,
} from '../../../assets/icons'

import { GridProjects } from './GridProjects'

export const TabProjects = () => {
	const [activeTab, setActiveTab] = useState('all-projects')

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<section>
			<div className="tab-area border-b border-gray-200 dark:border-gray-700">
				<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center  ">
					<li className="me-2">
						<a
							onClick={() => handleTabChange('all-projects')}
							href="#all-projects"
							aria-current="page"
							className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
								activeTab === 'all-projects'
									? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
									: 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
							}`}
						>
							<AllProjectIcon />
							<span className="ps-2">Todos los proyectos</span>
						</a>
					</li>
					<li className="me-2">
						<a
							onClick={() => handleTabChange('react')}
							href="#react.js"
							aria-current="page"
							className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
								activeTab === 'react'
									? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
									: 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
							}`}
						>
							<JavaScriptIcon />
							<span className="ps-2"> React.Js</span>
						</a>
					</li>
					<li className="me-2">
						<a
							onClick={() => handleTabChange('wordpress')}
							href="#wordpress"
							aria-current="page"
							className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
								activeTab === 'wordpress'
									? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
									: 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
							}`}
						>
							<WordPressIcon />
							<span className="ps-2"> WordPress</span>
						</a>
					</li>
				</ul>
			</div>
			<GridProjects activeTab={activeTab} />
		</section>
	)
}
