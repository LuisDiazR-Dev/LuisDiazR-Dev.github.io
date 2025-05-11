import { Tabs, TabsRef } from 'flowbite-react'
import { useRef } from 'react'
import { HiAdjustments } from 'react-icons/hi'
// import { HiAdjustments, HiUserCircle } from 'react-icons/hi'
// import { MdDashboard } from 'react-icons/md'
import { GridProjects } from './GridProjects'

export const TabProjects = () => {
	const tabsRef = useRef<TabsRef>(null)

	// cuando cambie el tab, aplica el filtro con el valor del tab
	console.log({ tabsRef })

	return (
		<Tabs
			className="justify-center border-none"
			aria-label="Default tabs"
			variant="default"
			ref={tabsRef}
		>
			{/* <Tabs.Item title="Todos" icon={HiUserCircle}>
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
			</Tabs.Item>
			<Tabs.Item title="Wordpress" icon={MdDashboard} className="inline-flex">
				<span className="font-medium text-gray-800 dark:text-white"></span>
				Settings tab's associated content
			</Tabs.Item> */}
			<Tabs.Item title="JavaScript" icon={HiAdjustments}>
				<GridProjects />
			</Tabs.Item>
		</Tabs>
	)
}
