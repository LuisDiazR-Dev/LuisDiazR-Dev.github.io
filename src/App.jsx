// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

// * Componentes
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Experience from './Components/Experience'
import Proyectos from './Components/Proyectos'

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<Experience></Experience>
			<Proyectos></Proyectos>
		</>
	)
}

export default App
