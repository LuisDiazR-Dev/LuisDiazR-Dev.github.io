import { Tabs, TabsRef } from 'flowbite-react'
import { useEffect, useRef, useState } from 'react'
import { HiAdjustments, HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'

export const TabProjects = () => {
	const tabsRef = useRef<TabsRef>(null)
	const [activeTab, setActiveTab] = useState(0)

	useEffect(() => {}, [])
	// en el useState, cuando cambia su valor se renderiza el componente
	// cada vez que se renderiza el componente, se ejecuta el useEffect si no tiene dependencias
	// si tiene dependencias, se ejecuta solo cuando cambian las dependencias

	// cuando cambie el tab, aplica el filtro con el valor del tab

	return (
		<div className="flex flex-col gap-3">
			<Tabs
				className="justify-center border-none"
				aria-label="Default tabs"
				variant="default"
				ref={tabsRef}
				onActiveTabChange={(tab) => setActiveTab(tab)}
			>
				<Tabs.Item title="Todos" icon={HiUserCircle}>
					This is{' '}
					<span className="font-medium text-gray-800 dark:text-white">
						Profile tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the
					next. The tab JavaScript swaps classes to control the content
					visibility and styling.
				</Tabs.Item>
				<Tabs.Item title="Wordpress" icon={MdDashboard}>
					This is{' '}
					<span className="font-medium text-gray-800 dark:text-white">
						Dashboard tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the
					next. The tab JavaScript swaps classes to control the content
					visibility and styling.
				</Tabs.Item>
				<Tabs.Item title="JavaScript" icon={HiAdjustments}>
					This is{' '}
					<span className="font-medium text-gray-800 dark:text-white">
						Settings tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the
					next. The tab JavaScript swaps classes to control the content
					visibility and styling.
				</Tabs.Item>
			</Tabs>

			<div className="text-sm text-gray-500 dark:text-gray-400">
				Active tab: {activeTab}
			</div>
		</div>
	)
}
