import './App.css'
import { NavMenu } from './sections/_NavMenu/NavMenu'
// import { Hero } from './sections/1_Hero/Hero'
import { AboutMe } from './sections/2_AboutMe/AboutMe'
import { Experience } from './sections/3_Experience/Experience'

import Footer from './sections/z_Footer/Footer'
import { Projects } from './sections/4_Projects/Projects'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className="App ">
			<NavMenu />
			<main className="px-6">
				{/* <Hero /> Sliders de marketing */}
				<AboutMe /> {/* ¿Quien es Luis Díaz? */}
				<Experience /> {/* recuerda la función de tiempo con fecha  */}
				{/* <Testimonials/> personas que confían en mi trabajo  */}
				<Projects />
				{/* <Projects/> Encuentra todo lo que te gusta - proyectos  */}
				{/* sections Stack tecnológico  */}
				{/* sections Beneficios de contratarme*/}
				{/* Sections Blog (glosario de términos*/}
			</main>
			<Footer />
		</div>
	)
}

export default App
