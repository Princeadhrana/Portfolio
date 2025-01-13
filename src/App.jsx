import About from "./components/About"
import BlurBackground from "./components/BlurBackground"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

const App = () => {
  return (
    <div>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <Hero/>
        <Projects/>
        <About/>
        <Contacts/>
      </main>
    </div>
  )
}

export default App
