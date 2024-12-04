import './App.css'


import { NavMenu } from './Sections/aNavMenu/NavMenu'
import Footer from './Sections/zFooter/Footer'
import Hero from './Sections/Hero/Hero'

function App() {

  return (
    <div className="App">
      <NavMenu />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
