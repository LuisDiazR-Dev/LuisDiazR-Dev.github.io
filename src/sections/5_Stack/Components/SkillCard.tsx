import { SkillDetail, SkillLevel } from '../../../data/AboutMeCvTypes.ts'

export const SkillCard: React.FC<{ skill: SkillDetail }> = ({ skill }) => {
	const levelColors: Record<SkillLevel, string> = {
		[SkillLevel.Iniciado]: 'bg-gray-200 text-gray-800',
		[SkillLevel.Medio]: 'bg-blue-200 text-blue-800',
		[SkillLevel.Avanzado]: 'bg-green-200 text-green-800',
	}

	return (
		<div className="flex flex-col items-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
			<img
				src={skill.iconUrl}
				alt={skill.name}
				className="w-12 h-12 mb-2 object-contain"
			/>
			<h3 className="text-sm font-semibold text-center">{skill.name}</h3>
			<span
				className={`mt-2 px-2 py-1 rounded-full text-xs font-medium ${
					levelColors[skill.level]
				}`}
			>
				{skill.level}
			</span>
		</div>
	)
}
