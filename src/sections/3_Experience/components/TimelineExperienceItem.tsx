// import styled from 'styled-components'
import { experienceList } from '../../../data/AboutMeCV'

import {
	Button,
	TimelineBody,
	TimelineContent,
	TimelineItem,
	TimelinePoint,
	TimelineTime,
	TimelineTitle,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from 'flowbite-react'
import { HiExternalLink, HiCheckCircle } from 'react-icons/hi'

import { useState } from 'react'

export const TimelineExperienceItem = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<>
			{experienceList.map((exp, index) => (
				<TimelineItem key={index} className="pb-10">
					<TimelinePoint className="[&>div]:bg-cyan-500 [&>div]:border-cyan-500 " />
					<TimelineContent>
						<TimelineTime className="flex">
							{exp.startDate}
							{exp.endDate && <span> {`- ${exp.endDate}`}</span>}
							<span className="font-mono ml-2">
								<a
									href={exp.companyURL}
									target="_blank"
									rel="noopener noreferrer"
								>
									| {exp.company}
								</a>
							</span>
						</TimelineTime>
						<TimelineTitle>{exp.title}</TimelineTitle>
						<TimelineBody>{exp.description[0]}</TimelineBody>
						<Button
							color="gray"
							className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800"
							size="sm"
							onClick={() => setOpenIndex(index)}
						>
							Ver más <HiExternalLink className="ml-2  h-4 w-4" />
						</Button>

						{/* Modal por cada item */}
						<Modal
							dismissible
							show={openIndex === index}
							onClose={() => setOpenIndex(null)}
						>
							<ModalHeader>{exp.title}</ModalHeader>
							<ModalBody>
								{/* <ul className="space-y-2 text-gray-600 dark:text-gray-400">
									{details.map((item, idx) => (
										<li key={idx} className="flex items-start gap-2">
											<HiCheckCircle className="h-5 w-5 text-cyan-500 shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul> */}
								{/* <ul className="border-l-2 border-cyan-500 pl-4 space-y-3 text-gray-600 dark:text-gray-400">
									{details.map((item, idx) => (
										<li key={idx} className="relative">
											<span className="absolute -left-2 top-1 h-2 w-2 rounded-full bg-cyan-500"></span>
											{item}
										</li>
									))}
								</ul> */}
								{exp.description.length > 1 && (
									<ul className="list-disc list-inside mb-4 text-balance space-y-2 text-gray-600 dark:text-gray-400">
										{exp.description.map(
											(item, idx) =>
												idx !== 0 && (
													<li className="flex items-start gap-2" key={idx}>
														<HiCheckCircle className="h-5 w-5 text-cyan-500 shrink-0" />
														{item}
													</li>
												)
										)}
									</ul>
								)}
							</ModalBody>
							<ModalFooter>
								<Button
									color="gray"
									className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800"
									onClick={() => setOpenIndex(null)}
								>
									Cerrar
								</Button>
							</ModalFooter>
						</Modal>
					</TimelineContent>
				</TimelineItem>
			))}
		</>
	)
}
