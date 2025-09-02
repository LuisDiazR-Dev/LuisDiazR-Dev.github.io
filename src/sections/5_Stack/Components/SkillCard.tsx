import { SkillDetail, SkillLevel } from '../../../data/AboutMeCvTypes.ts'
import { Tooltip } from 'flowbite-react'
import { HiChartBar } from 'react-icons/hi'

export const SkillCard = ({ skill }: { skill: SkillDetail }) => {
	const levelColors: Record<SkillLevel, string> = {
		[SkillLevel.Iniciado]: 'bg-gray-300 text-gray-700',
		[SkillLevel.Medio]: 'bg-blue-400 text-white',
		[SkillLevel.Avanzado]: 'bg-green-500 text-white',
	}
	// record<key, value> es un tipo de dato en TypeScript que define un objeto con claves de un tipo específico y valores de otro tipo específico. En este caso, las claves son de tipo SkillLevel y los valores son cadenas de texto (string). Es útil para mapear niveles de habilidad a clases CSS

	const tooltipClasses =
		'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-xs px-2 py-1 shadow-md'

	return (
		<div className="relative flex items-center justify-center w-20 h-20 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition hover:-translate-y-1">
			{/* Tooltip con nombre de la tecnología */}
			<Tooltip
				content={skill.name}
				placement="bottom"
				className={tooltipClasses}
				trigger="hover"
			>
				<img
					src={skill.iconUrl}
					alt={skill.name}
					className="w-10 h-10 object-contain"
				/>
			</Tooltip>

			{/* Tooltip con nivel */}
			<Tooltip
				content={skill.level}
				trigger="hover"
				placement="right"
				arrow={false}
				className={`${tooltipClasses}, z-10`}
			>
				<span
					className={`absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full ${
						levelColors[skill.level]
					}`}
				>
					<HiChartBar className="w-3 h-3" />
				</span>
			</Tooltip>
		</div>
	)
}
