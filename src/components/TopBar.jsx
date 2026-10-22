import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { useTheme } from '../theme'
import { useNow, useScrollProgress, useScrollSpy, useShortcut } from '../hooks'
import { nav, site, ui } from '../data/content'

const IDS = nav.map((n) => n.id)
const CLOCK = new Intl.DateTimeFormat('sk-SK', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'Europe/Bratislava',
})

/** Ticks on its own so the rest of the bar doesn't re-render every second. */
function Clock() {
  const { t } = useLang()
  const now = useNow(1000)
  return (
    <time className="statusline-clock" dateTime={now.toISOString()} aria-label={t(ui.clock)}>
      {CLOCK.format(now)}
    </time>
  )
}

export default function TopBar() {
  const { lang, toggle: toggleLang, t } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const active = useScrollSpy(IDS)
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const current = nav.find((n) => n.id === active) ?? nav[0]

  // the F-keys printed on the bar actually work
  useShortcut('F2', toggleLang)
  useShortcut('F3', toggleTheme)

  // A single pill slides between menu items rather than each item painting
  // its own background, so switching sections reads as one movement.
  const menuRef = useRef(null)
  const burgerRef = useRef(null)
  const [pill, setPill] = useState(null)

  const measure = useCallback(() => {
    const menu = menuRef.current
    const el = menu?.querySelector('.menu-item.active')
    if (!menu || !el) return setPill(null)
    // stacked mobile menu: let the item paint its own background instead
    if (menu.clientHeight > 70) return setPill(null)
    setPill({ x: el.offsetLeft - menu.scrollLeft, w: el.offsetWidth })
  }, [])

  useLayoutEffect(measure, [measure, active, lang, open])

  useEffect(() => {
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      burgerRef.current?.focus()
    }
    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="topbar">
      <div className="scrollbar-progress" style={{ transform: `scaleX(${progress})` }} />

      {/* the BIOS header line: identity left, machine state right */}
      <div className="statusline">
        <div className="shell statusline-row chrome">
          <span className="statusline-brand">
            <span translate="no">{site.name}</span> (TM)
            <span className="statusline-sep" aria-hidden="true">
              ·
            </span>
            <span className="statusline-muted">{site.realName}</span>
          </span>
          <span className="statusline-cells">
            <span className="statusline-muted">{t(site.location)}</span>
            <span>VER {site.version}</span>
            <Clock />
          </span>
        </div>
      </div>

      {/* the setup menu */}
      <div className="shell">
        <div className="menubar panel">
          {/* on narrow screens the menu collapses, so the bar still says where you are */}
          <span className="menu-current chrome" aria-hidden="true">
            <span className="menu-num">{current.num}</span>
            {t(current.label)}
          </span>

          <nav
            id="site-menu"
            ref={menuRef}
            className={`menu${open ? ' open' : ''}`}
            aria-label={t(ui.sections)}
            onScroll={measure}
          >
            {pill && (
              <span
                className="menu-pill"
                aria-hidden="true"
                style={{ transform: `translateX(${pill.x}px)`, width: `${pill.w}px` }}
              />
            )}
            {nav.map((item, i) => (
              <a
                key={item.id}
                style={{ '--i': i }}
                href={`#${item.id}`}
                className={`menu-item${active === item.id ? ' active' : ''}`}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu-num" aria-hidden="true">
                  {item.num}
                </span>
                <span className="menu-label">{t(item.label)}</span>
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
      </div>
    </header>
  )
}
