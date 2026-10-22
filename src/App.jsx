import { useCallback, useState } from 'react'
import Boot, { shouldBoot } from './components/Boot'
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
  const [booting, setBooting] = useState(shouldBoot)
  const endBoot = useCallback(() => setBooting(false), [])

  return (
    <>
      {booting && <Boot onDone={endBoot} />}

      {/* the page stays out of the tab order and the a11y tree until boot ends */}
      <div className="page" inert={booting}>
        <a className="skip-link" href="#main">
          {t(ui.skip)}
        </a>
        <TopBar />
        <main id="main" tabIndex={-1}>
          <Hero ready={!booting} />
          <About />
          <Cv />
          <Timetable />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
