import Boot from './components/Boot'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import Cv from './components/Cv'
import Timetable from './components/Timetable'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Boot />
      <TopBar />
      <main>
        <Hero />
        <About />
        <Cv />
        <Timetable />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
