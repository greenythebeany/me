import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import Cv from './components/Cv'
import Timetable from './components/Timetable'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useLang } from './i18n'
import { ui } from './data/content'

export default function App() {
  const { t } = useLang()

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        {t(ui.skip)}
      </a>
      <TopBar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Cv />
        <Timetable />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
