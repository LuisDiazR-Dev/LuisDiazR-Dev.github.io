import SkillSection from './Components/SkillSection.tsx'

import { Button, Card } from 'flowbite-react'
import { skillsList } from '../../data/AboutMeCV.ts'

import { TabItem, Tabs } from 'flowbite-react'
import { HiOutlineCode } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { HiOutlinePuzzle } from 'react-icons/hi'

import { HiStar } from 'react-icons/hi'

export const Stack: React.FC = () => {
	return (
		<section id="stack" className="stack my-20 scroll-mt-32  ">
			<header className="text-center pb-12   dark:text-white flex items-center justify-center gap-3">
				<HiOutlinePuzzle className="text-3xl " />
				<h2> Tech Stack</h2>
			</header>

			<div className="overflow-x-auto">
				<Tabs
					aria-label="Full width tabs"
					// variant="fullWidth"
					className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center"
				>
					<TabItem active title="Core Stack" icon={HiOutlineCode} className="">
						<SkillSection title="" skills={skillsList.Core} />
					</TabItem>
					<TabItem title="Complements" icon={MdDashboard}>
						<SkillSection title="" skills={skillsList.Complements} />
					</TabItem>
					<TabItem title="Next Goals" icon={HiStar}>
						<SkillSection title="" skills={skillsList.NextGoals} />
					</TabItem>
				</Tabs>
			</div>
		</section>
	)
}

export const Stack2 = () => {
	return (
		<section
			id="stack"
			className="skills grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center my-20  scroll-mt-32"
		>
			<Card className="max-w-sm">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Frontend Development
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
				<Button>
					Read more
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</Card>
			<Card className="max-w-sm">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Backend Development
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
				<Button>
					Read more
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</Card>
			<Card className="max-w-sm">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Tools
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
				<Button>
					Read more
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</Card>
			<Card className="max-w-sm">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
				<Button>
					Read more
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</Card>
		</section>
	)
}

export const SkillsSection = () => {
	const skills = [
		{ name: 'JavaScript', level: 'Avanzado', icon: '🟨' },
		{ name: 'React', level: 'Avanzado', icon: '⚛️' },
		{ name: 'Node.js', level: 'Intermedio', icon: '🟩' },
		{ name: 'TailwindCSS', level: 'Avanzado', icon: '🌊' },
		{ name: 'MongoDB', level: 'Intermedio', icon: '🍃' },
		{ name: 'WordPress', level: 'Avanzado', icon: '🌐' },
	]

	return (
		<section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
					Mis{' '}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">
						Skills
					</span>
				</h2>
				<p className="text-gray-600 dark:text-gray-400 mb-12">
					Tecnologías y herramientas que utilizo para construir soluciones
					digitales sólidas y escalables.
				</p>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition hover:-translate-y-1"
						>
							<div className="text-4xl mb-3">{skill.icon}</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{skill.name}
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 transition">
								{skill.level}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
