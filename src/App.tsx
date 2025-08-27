import './App.css'
import { NavMenu } from './sections/_NavMenu/NavMenu'
// import { Hero } from './sections/1_Hero/Hero'
import { AboutMe } from './sections/2_AboutMe/AboutMe'
import { Experience } from './sections/3_Experience/Experience'

import FooterSection from './sections/z_Footer/Footer'
import { Projects } from './sections/4_Projects/Projects'
import { Stack } from './sections/5_Stack/Stack'

function App() {
	return (
		<div className="App ">
			<NavMenu />
			<main>
				{/* <Hero /> Sliders de marketing */}
				<AboutMe /> {/* ¿Quien es Luis Díaz? */}
				<Experience /> {/*recuerda la función de tiempo con fecha*/}
				<Projects />
				<Stack />
				{/* Stack tecnológico */}
				{/* ¿Qué sé hacer? */}
				{/* <Testimonials/> personas que confían en mi trabajo  */}
				{/* <Projects/> Encuentra todo lo que te gusta - proyectos  */}
				{/* sections Stack tecnológico  */}
				{/* sections Beneficios de contratarme*/}
				{/* Sections Blog (glosario de términos*/}
			</main>
			<FooterSection />
		</div>
	)
}

export default App
