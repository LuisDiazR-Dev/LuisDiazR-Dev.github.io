// import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'


const Hero = () => {
	// const [count, setCount] = useState(0)


	return (
		<HeroStyled>
			<a href="https://vite.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>
			<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>

			<h1>Mi portafolio web con Vite + React + TypeScript</h1>
			<div className="card">
				{/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
				<h3>
					próximamente estará disponible la versión 2 de mi portafolio
				</h3>
				<h3>Te invito a contactarme por mail o LinkedIn</h3>
				<a href="https://www.linkedin.com/in/luis-diazr/" target="_blank">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LinkedIn_Logo_2013_%282%29.svg/1920px-LinkedIn_Logo_2013_%282%29.svg.png" className="logo" alt="Vite logo" />
				</a>
			</div>			
			<div className="card">
				<h2>
					También te invito a ver este repositorio en GitHub
				</h2>
				<a href="https://github.com/LuisDiazR-Dev/LuisDiazR-Dev.github.io" target="_blank">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png" className="logo" alt="Vite logo" />
				</a>
			</div>

		</HeroStyled>
	)
}

export default Hero





const HeroStyled = styled.section`
border: 1px solid #fff;
`