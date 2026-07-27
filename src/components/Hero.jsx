import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { useDecode, useReveal } from '../hooks'
import { hero, site } from '../data/content'

/** Each line resolves out of noise, one after the other. */
function TitleLine({ line, index, armed }) {
  const { t } = useLang()
  const text = t(line)
  const [go, setGo] = useState(false)

  useEffect(() => {
    if (!armed) return
    const id = setTimeout(() => setGo(true), index * 240)
    return () => clearTimeout(id)
  }, [armed, index])

  const shown = useDecode(text, go, 1.4)

  return (
    <span className="hero-line" data-text={text}>
      {go ? shown : text.replace(/\S/g, ' ')}
    </span>
  )
}

export default function Hero() {
  const { t } = useLang()
  const [ref] = useReveal()
  const [armed, setArmed] = useState(false)

  // hold until the boot overlay has cleared, otherwise the reveal is wasted
  // behind it
  useEffect(() => {
    const id = setTimeout(() => setArmed(true), 260)
    return () => clearTimeout(id)
  }, [])

  return (
    <section id="about" className="hero">
      <div className="shell reveal-group" ref={ref}>
        <div className="hero-eyebrow label reveal">{t(hero.eyebrow)}</div>

        <h1 className="hero-title reveal" style={{ '--delay': '60ms' }}>
          {hero.title.map((line, i) => (
            <TitleLine key={i} line={line} index={i} armed={armed} />
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
          <a href={site.cv} target="_blank" rel="noopener" className="btn">
            {t(hero.ctaCv)}
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <dl className="hero-meta panel reveal" style={{ '--delay': '260ms' }}>
          {hero.meta.map((m, i) => (
            <div key={i} className="hero-meta-item" style={{ '--delay': `${300 + i * 70}ms` }}>
              <dt className="label">{t(m.key)}</dt>
              <dd className="mono">{t(m.val)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
