import './App.css'
import { NavMenu } from './Components/aNavMenu/NavMenu'
import Footer from './Components/zFooter/Footer'
import { AboutMe } from './Sections/AboutMe/AboutMe'
import Hero from './Sections/Hero/Hero'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className="App">
			<NavMenu />
			<main>
				<Hero /> {/* Sliders de marketing */}
				<AboutMe />
				{/* <About me/> ¿Quien es Luis Díaz? */}
				{/* experience laboral - recuerda la función de tiempo con fecha */}
				{/* <Testimonials/> personas que confían en mi trabajo  */}
				{/* <Projects/> Encuentra todo lo que te gusta - proyectos  */}
				{/* sections Stack tecnológico  */}
				{/* sections Beneficios de contratarme*/}
				{/* Sections Blog */}
			</main>
			<Footer />
		</div>
	)
}

export default App
