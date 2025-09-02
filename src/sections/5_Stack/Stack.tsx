import { SkillSection } from './Components/SkillSection.tsx'

import { skillsList } from '../../data/AboutMeCV.ts'
import { Skills } from '../../data/AboutMeCvTypes.ts'

import { TabItem, Tabs } from 'flowbite-react'
import { HiOutlineCode, HiOutlinePuzzle, HiStar } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'

export const Stack = (): JSX.Element => {
	return (
		<section id="stack" className="stack my-20 scroll-mt-32">
			<header className="flex items-center justify-center gap-3 text-center pb-12 dark:text-white">
				<HiOutlinePuzzle className="text-3xl" />
				<h2>Tech Stack</h2>
			</header>

			<div className="overflow-x-auto">
				<Tabs
					aria-label="Full width tabs"
					className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center"
				>
					<TabItem active title="Stack" icon={HiOutlineCode}>
						<SkillSection skills={skillsList.Core} />
					</TabItem>

					<TabItem title="Complementos" icon={MdDashboard}>
						<SkillSection skills={skillsList.Complements} />
					</TabItem>

					<TabItem title="Próximos Objetivos" icon={HiStar}>
						<SkillSection
							// ejemplo de como seria con type assertion
							skills={skillsList.NextGoals as Skills['NextGoals']}
						/>
					</TabItem>
				</Tabs>
			</div>
		</section>
	)
}
