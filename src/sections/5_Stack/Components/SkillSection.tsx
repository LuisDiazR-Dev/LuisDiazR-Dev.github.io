import { SkillCard } from './SkillCard'
import { SkillDetail } from '../../../data/AboutMeCvTypes.ts'

export const SkillSection = ({
	skills,
}: {
	skills: Record<string, SkillDetail>
}) => {
	return (
		<section className="">
			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 justify-items-center">
				{Object.entries(skills).map(([key, skill]) => (
					<SkillCard key={key} skill={skill} />
				))}
			</div>
		</section>
	)
}

// Object.entries(skills) convierte el objeto skills en una matriz de pares clave-valor,
// lo que permite iterar sobre cada habilidad y renderizar un SkillCard para cada una
