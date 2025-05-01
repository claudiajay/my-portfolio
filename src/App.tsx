import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import { Contact } from './components/sections/Contact'
import Hero from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Services } from './components/sections/Services'
import { TechStack } from './components/sections/TechStack'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
