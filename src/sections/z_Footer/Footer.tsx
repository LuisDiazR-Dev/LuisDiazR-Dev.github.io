// import styled from 'styled-components'
import { Brand } from '../../assets/components/Brand'

import {
	Footer,
	// FooterBrand,
	FooterCopyright,
	FooterDivider,
	// FooterIcon,
	FooterLink,
	FooterLinkGroup,
	FooterTitle,
} from 'flowbite-react'
// import {
// 	BsDribbble,
// 	BsFacebook,
// 	BsGithub,
// 	BsInstagram,
// 	BsTwitter,
// } from 'react-icons/bs'

const FooterSection = () => {
	return (
		<Footer
			container
			className="
			pt-40
			mx-auto
			bg-white-100 backdrop-blur-sm 
			shadow-sm
		"
			id="footer"
		>
			<div className="w-full">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 font-normal ">
					<div className="mb-8 ">
						<Brand />
						{/* <hr className="mb-4 border-gray-300 dark:border-gray-700" /> */}
						<p className="italic text-cyan-600 ">
							Soluciones Digitales Basadas en Software...
							{/* <br></br>Seguridad, Escalabilidad, Ligereza, Flexibilidad */}
						</p>

						<FooterCopyright
							className="flex italic text-cyan-600"
							href="#"
							by="Luis Alfredo Díaz Restrepo"
							year={2025}
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<FooterTitle title="Referencias" />
							<FooterLinkGroup col>
								<FooterLink
									href="https://flowbite-react.com/"
									target="_blank noreferrer noopener"
								>
									Flowbite
								</FooterLink>
								<FooterLink
									href="https://porfolio.dev/#sobre-mi"
									target="_blank noreferrer noopener"
								>
									MiduDev
								</FooterLink>
							</FooterLinkGroup>
						</div>
						<div>
							<FooterTitle title="Contactos" />
							<FooterLinkGroup col>
								<FooterLink
									href="https://github.com/LuisDiazR-Dev"
									target="_blank noreferrer noopener"
								>
									Github
								</FooterLink>
								<FooterLink
									href="https://www.linkedin.com/in/luis-diazr/"
									target="_blank noreferrer noopener"
								>
									LinkedIn
								</FooterLink>
							</FooterLinkGroup>
						</div>
						<div>
							<FooterTitle title="Servicios" />
							<FooterLinkGroup col>
								<FooterLink
									href="#"
									className="pointer-events-none cursor-not-allowed text-gray-400"
								>
									WordPress
								</FooterLink>
								<FooterLink
									href="#"
									className="pointer-events-none cursor-not-allowed text-gray-400"
								>
									Web App
								</FooterLink>
							</FooterLinkGroup>
						</div>
					</div>
				</div>
				<FooterDivider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<span className=" text-sm text-gray-500 sm:text-center">
						Inspirado Midudev | Construido con Flowbite
						{/* © 2025 Luis Alfredo Díaz Restrepo */}
						{/* © 2025 Self, Inc. All rights reserved. */}
						{/* © 2025 Self, Digital Solutions. */}
					</span>
					{/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FooterIcon href="#" icon={BsFacebook} />
						<FooterIcon href="#" icon={BsInstagram} />
						<FooterIcon href="#" icon={BsTwitter} />
						<FooterIcon href="#" icon={BsGithub} />
						<FooterIcon href="#" icon={BsDribbble} />
					</div> */}
				</div>
			</div>
		</Footer>
	)
}

export default FooterSection
