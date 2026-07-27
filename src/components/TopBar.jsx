import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { useTheme } from '../theme'
import { useClock, useScrollProgress, useScrollSpy } from '../hooks'
import { nav, site } from '../data/content'

const IDS = nav.map((n) => n.id)

export default function TopBar() {
  const { lang, toggle: toggleLang, t } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const active = useScrollSpy(IDS)
  const clock = useClock()
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const current = nav.find((n) => n.id === active) ?? nav[0]

  // A single pill slides between menu items rather than each item painting
  // its own background, so switching sections reads as one movement.
  const menuRef = useRef(null)
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
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="topbar">
      <div className="scrollbar-progress" style={{ transform: `scaleX(${progress})` }} />

      {/* the BIOS header line: identity left, machine state right */}
      <div className="statusline">
        <div className="shell statusline-row chrome">
          <span className="statusline-brand">
            {site.name} (TM)
            <span className="statusline-sep">·</span>
            <span className="statusline-muted">{site.realName}</span>
          </span>
          <span className="statusline-cells">
            <span className="statusline-muted">{site.location}</span>
            <span>VER {site.version}</span>
            <span className="statusline-clock">{clock}</span>
          </span>
        </div>
      </div>

      {/* the setup menu */}
      <div className="shell">
        <div className="menubar panel">
          {/* on narrow screens the menu collapses, so the bar still needs to
              say where you are */}
          <span className="menu-current chrome">
            <span className="menu-num">{current.num}</span>
            {t(current.label)}
          </span>

          <nav
            ref={menuRef}
            className={`menu${open ? ' open' : ''}`}
            aria-label="Sections"
            onScroll={measure}
          >
            {pill && (
              <span
                className="menu-pill"
                aria-hidden="true"
                style={{ transform: `translateX(${pill.x}px)`, width: `${pill.w}px` }}
              />
            )}
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`menu-item${active === item.id ? ' active' : ''}`}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu-num">{item.num}</span>
                <span className="menu-label">{t(item.label)}</span>
              </a>
            ))}
          </nav>

          <div className="menu-actions">
            <button className="key" onClick={toggleLang} aria-label="Toggle language">
              <span className="key-cap">F2</span>
              {lang.toUpperCase()}
            </button>
            <button className="key" onClick={toggleTheme} aria-label="Toggle theme">
              <span className="key-cap">F3</span>
              {theme === 'dark' ? 'DARK' : 'LIGHT'}
            </button>
            <button
              className="key burger"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? 'ESC' : 'MENU'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
