import React from 'react'
import { SkillCard } from './SkillCard.tsx'
import { SkillDetail } from '../../../data/AboutMeCvTypes.ts'

interface SkillSectionProps {
	title: string
	skills: Record<string, SkillDetail>
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
	<section className="mb-10">
		<h2 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">
			{title}
		</h2>
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
			{Object.entries(skills).map(([key, skill]) => (
				<SkillCard key={key} skill={skill} />
			))}
		</div>
	</section>
)

export default SkillSection
