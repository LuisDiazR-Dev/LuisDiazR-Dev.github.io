// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <h2>
          próximamente estará disponible la versión 2 de mi portafolio
        </h2>
        <h3>Te invito a contactarme por mail o LinkedIn</h3>
        <a href="https://www.linkedin.com/in/luis-diazr/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LinkedIn_Logo_2013_%282%29.svg/1920px-LinkedIn_Logo_2013_%282%29.svg.png" className="logo" alt="Vite logo" />
        </a>
      </div>

    </>
  )
}

export default App
