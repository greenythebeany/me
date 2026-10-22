import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { useCountUp, useDecode, useReveal } from '../hooks'
import { hero, site } from '../data/content'
import repoData from '../data/repos.json'

const TOTAL = repoData.repos.reduce((n, r) => n + r.commits, 0)
const TOP = repoData.repos[0]

/** Each line resolves out of noise, one after the other. Screen readers get
 *  the finished heading from the h1's label, never the noise. */
function TitleLine({ text, index, armed }) {
  const [go, setGo] = useState(false)

  useEffect(() => {
    if (!armed) return
    const id = setTimeout(() => setGo(true), index * 240)
    return () => clearTimeout(id)
  }, [armed, index])

  const shown = useDecode(text, go, 1.4)

  return (
    <span className="hero-line" data-text={text} aria-hidden="true">
      {go ? shown : text.replace(/\S/g, ' ')}
    </span>
  )
}

/** The BIOS "system information" page, filled with real numbers. On load it
 *  is dragged open from its two corner ticks: both start at the centre and
 *  pull apart to top-left and bottom-right, the frame unclipping between
 *  them. One registered property, --open (0 to 1), drives the ticks, the
 *  clip and the content fade, so with motion off it simply lands at 1. */
function SysInfo({ ready }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!ready) return
    const id = setTimeout(() => setOpen(true), 320)
    return () => clearTimeout(id)
  }, [ready])

  const total = useCountUp(TOTAL, open, 1300)

  return (
    <div className={`sysinfo-frame${open ? ' is-open' : ''}`}>
      <span className="sysinfo-tick tl" aria-hidden="true" />
      <span className="sysinfo-tick br" aria-hidden="true" />
      <div className="sysinfo panel">
        <h2 className="card-head chrome">{t(hero.panel)}</h2>
        <dl className="sysinfo-list">
          {hero.meta.map((m, i) => (
            <div key={i} className="leader">
              <dt>{t(m.key)}</dt>
              <dd>{t(m.val)}</dd>
            </div>
          ))}
        </dl>
        {TOP && (
          <div className="sysinfo-stat">
            <p className="sysinfo-num mono">
              <span aria-hidden="true">{total}</span>
              <span className="sr-only">{TOTAL}</span>
            </p>
            <p className="label">{t(hero.activity.label)}</p>
            <p className="sysinfo-top">
              {t(hero.activity.top)}:{' '}
              <a href="#projects" translate="no">
                {TOP.name}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero({ ready }) {
  const { t } = useLang()
  const [ref] = useReveal()
  const lines = hero.title.map((l) => t(l))

  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid reveal-group" ref={ref}>
        <div className="hero-copy">
          <p className="hero-eyebrow label reveal">{t(hero.eyebrow)}</p>

          <h1
            id="hero-title"
            className="hero-title reveal"
            style={{ '--delay': '60ms' }}
            aria-label={lines.join(' ')}
          >
            {lines.map((line, i) => (
              <TitleLine key={i} text={line} index={i} armed={ready} />
            ))}
          </h1>

          <p className="hero-lead reveal" style={{ '--delay': '140ms' }}>
            {t(hero.lead)}
          </p>

          <div className="hero-actions reveal" style={{ '--delay': '200ms' }}>
            <a href="#projects" className="btn btn-primary">
              {t(hero.ctaProjects)}
              <span aria-hidden="true">&gt;&gt;</span>
            </a>
            <a href={site.cv} className="btn" download>
              {t(hero.ctaCv)}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <SysInfo ready={ready} />
      </div>
    </section>
  )
}
