import { useLang } from '../i18n'
import { useCountUp, useNow, useReveal } from '../hooks'
import { hero, site, ui } from '../data/content'
import repoData from '../data/repos.json'
import Mark from './Mark'

const TOTAL = repoData.repos.reduce((n, r) => n + r.commits, 0)
const TOP = repoData.repos[0]
const CLOCK = new Intl.DateTimeFormat('sk-SK', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Europe/Bratislava',
})

/** Ticks on its own so the rest of the hero doesn't re-render every second. */
function Clock() {
  const { t } = useLang()
  const now = useNow(1000)
  return (
    <time className="tabular" dateTime={now.toISOString()} aria-label={t(ui.clock)}>
      {CLOCK.format(now)}
    </time>
  )
}

function Stats({ shown }) {
  const { t } = useLang()
  const total = useCountUp(TOTAL, shown, 1300)

  return (
    <dl className="hero-stats">
      <div className="stat">
        <dt className="label">{t(hero.activity.label)}</dt>
        <dd className="stat-num tabular">
          <span aria-hidden="true">{total}</span>
          <span className="sr-only">{TOTAL}</span>
        </dd>
      </div>
      <div className="stat">
        <dt className="label">{t(hero.activity.repos)}</dt>
        <dd className="stat-num tabular">{repoData.repos.length}</dd>
      </div>
      {TOP && (
        <div className="stat">
          <dt className="label">{t(hero.activity.top)}</dt>
          <dd className="stat-num stat-word" translate="no">
            <a href="#projects">{TOP.name}</a>
          </dd>
        </div>
      )}
    </dl>
  )
}

export default function Hero() {
  const { t } = useLang()
  const [ref, shown] = useReveal()
  const lines = hero.title.map((l) => t(l))
  const last = lines.length - 1

  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      {/* 緑 printed in halftone dots inside a hairline circle: texture, not content */}
      <div className="hero-art" aria-hidden="true">
        <span className="hero-ring" />
        <Mark cut="bold" className="hero-glyph" fill="url(#halftone)">
          <defs>
            <pattern id="halftone" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2.3" fill="currentColor" />
            </pattern>
          </defs>
        </Mark>
        <span className="hero-orbit" />
      </div>

      <div className="shell hero-inner reveal-group" ref={ref}>
        <ul className="hero-strip chrome reveal">
          <li>
            <span className="label">{t(hero.strip.based)}</span>
            {t(site.location)}
          </li>
          <li>
            <span className="label">{t(hero.strip.time)}</span>
            <Clock />
          </li>
          <li>
            <span className="label">{t(hero.strip.version)}</span>
            {site.version}
          </li>
        </ul>

        <p className="hero-eyebrow label reveal" style={{ '--delay': '60ms' }}>
          <span className="hero-dot" aria-hidden="true" />
          {t(hero.eyebrow)}
        </p>

        <h1 id="hero-title" className="hero-title reveal" style={{ '--delay': '120ms' }}>
          {lines.map((line, i) =>
            i === last ? (
              <em key={i}>{line}</em>
            ) : (
              <span key={i}>{line} </span>
            ),
          )}
        </h1>

        <p className="hero-lead reveal" style={{ '--delay': '200ms' }}>
          {t(hero.lead)}
        </p>

        <dl className="hero-specs reveal" style={{ '--delay': '260ms' }}>
          {hero.meta.map((m, i) => (
            <div key={i} className="spec">
              <dt>{t(m.key)}</dt>
              <dd>{t(m.val)}</dd>
            </div>
          ))}
        </dl>

        <div className="reveal" style={{ '--delay': '320ms' }}>
          <Stats shown={shown} />
        </div>

        <div className="hero-actions reveal" style={{ '--delay': '380ms' }}>
          <a href="#projects" className="btn btn-primary">
            {t(hero.ctaProjects)}
            <span aria-hidden="true">→</span>
          </a>
          <a href={site.cv} className="btn" download>
            {t(hero.ctaCv)}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
