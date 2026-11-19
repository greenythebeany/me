import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { useTheme } from '../theme'
import { useMotion } from '../motion'
import { useScrollProgress, useScrollSpy, useShortcut } from '../hooks'
import { nav, site, ui } from '../data/content'
import Mark from './Mark'

const IDS = nav.map((n) => n.id)

export default function TopBar() {
  const { lang, toggle: toggleLang, t } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const { motion, toggle: toggleMotion } = useMotion()
  const active = useScrollSpy(IDS)
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const burgerRef = useRef(null)

  // the F-keys printed on the bar actually work
  useShortcut('F2', toggleLang)
  useShortcut('F3', toggleTheme)
  useShortcut('F4', toggleMotion)

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      burgerRef.current?.focus()
    }
    // a tap anywhere outside the bar closes the dropdown
    const onDown = (e) => {
      if (!e.target.closest('.topbar')) setOpen(false)
    }
    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onDown)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  return (
    <header className="topbar">
      <div className="scrollbar-progress" style={{ transform: `scaleX(${progress})` }} />

      <div className="shell topbar-row">
        <a className="brand" href="#about">
          <Mark className="brand-mark" />
          <span translate="no">{site.name}</span>
        </a>

        <nav id="site-menu" className={`menu${open ? ' open' : ''}`} aria-label={t(ui.sections)}>
          {nav.map((item, i) => (
            <a
              key={item.id}
              style={{ '--i': i }}
              href={`#${item.id}`}
              className={`menu-item chrome${active === item.id ? ' active' : ''}`}
              aria-current={active === item.id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="menu-num" aria-hidden="true">
                {item.num}
              </span>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="menu-actions">
          <button className="key" type="button" onClick={toggleLang} aria-keyshortcuts="F2">
            <span className="key-cap">F2</span>
            {lang.toUpperCase()}
            <span className="sr-only"> — {t(ui.langKey)}</span>
          </button>
          <button className="key" type="button" onClick={toggleTheme} aria-keyshortcuts="F3">
            <span className="key-cap">F3</span>
            {t(theme === 'dark' ? ui.dark : ui.light)}
            <span className="sr-only"> — {t(ui.themeKey)}</span>
          </button>
          <button
            className="key key-motion"
            type="button"
            onClick={toggleMotion}
            aria-keyshortcuts="F4"
            aria-pressed={motion === 'on'}
          >
            <span className="key-cap">F4</span>
            <span className="key-word">{t(ui.motion)} </span>
            {motion === 'on' ? 'ON' : 'OFF'}
            <span className="sr-only"> — {t(ui.motionKey)}</span>
          </button>
          <a className="btn btn-primary topbar-cv" href={site.cv} download>
            CV
            <span aria-hidden="true">↓</span>
          </a>
          <button
            ref={burgerRef}
            className="key burger"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            {t(open ? ui.close : ui.menu)}
          </button>
        </div>
      </div>
    </header>
  )
}
