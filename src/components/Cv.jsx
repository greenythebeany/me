import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useCountUp, useReveal } from '../hooks'
import { cv, site, ui } from '../data/content'

function Block({ title, delay = 0, className = '', children }) {
  const [ref, shown] = useReveal()
  return (
    <div
      ref={ref}
      className={`cv-block panel glow reveal ${className}`}
      style={{ '--delay': `${delay}ms` }}
      onPointerMove={trackGlow}
    >
      <header className="card-head chrome">
        <h3>{title}</h3>
      </header>
      {typeof children === 'function' ? children(shown) : children}
    </div>
  )
}

function Skill({ skill, shown }) {
  const { t } = useLang()
  const pct = useCountUp(skill.level, shown)

  return (
    <div className="skill">
      <div className="skill-row">
        <span className="skill-name mono">{skill.name}</span>
        <span className="skill-tag label">{t(skill.tag)}</span>
      </div>
      <div className="bar" role="img" aria-label={t(cv.skillLabel, skill)}>
        <span className="bar-fill" style={{ '--level': skill.level }} />
        <span className="bar-pct mono" aria-hidden="true">
          {pct}%
        </span>
      </div>
    </div>
  )
}

export default function Cv() {
  const { t } = useLang()
  const [ctaRef] = useReveal()

  return (
    <Section id="cv" num="02" eyebrow={cv.eyebrow} title={cv.title} titleEm={cv.titleEm} status={t(ui.ok)}>
      <div className="cv-grid">
        <Block title={t(cv.headings.education)} className="cv-edu">
          <ol className="edu-list">
            {cv.education.map((e, i) => (
              <li key={i} className={`edu${e.current ? ' current' : ''}`}>
                <p className="edu-role">
                  {t(e.role)}
                  {e.current && <span className="edu-badge chrome">{t(cv.current)}</span>}
                </p>
                <p className="edu-place">{t(e.place)}</p>
                <p className="edu-when mono">{t(e.when)}</p>
              </li>
            ))}
          </ol>
        </Block>

        {/* Levels drawn as a segmented BIOS meter, counting up as they fill. */}
        <Block title={t(cv.headings.skills)} delay={90} className="cv-skills">
          {(shown) => (
            <div>
              {cv.skills.map((s) => (
                <Skill key={s.name} skill={s} shown={shown} />
              ))}
            </div>
          )}
        </Block>

        <Block title={t(cv.headings.languages)}>
          <ul className="leader-list">
            {cv.languages.map((l, i) => (
              <li key={i} className="leader">
                <span>{t(l.name)}</span>
                <span className="leader-val">{t(l.level)}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title={t(cv.headings.certificates)} delay={60}>
          <ul className="cert-list">
            {cv.certificates.map((c, i) => (
              <li key={i}>
                <p className="edu-role">{t(c.name)}</p>
                <p className="edu-place">{t(c.issuer)}</p>
                <p className="edu-when mono">
                  {t(c.when)} ·{' '}
                  <a className="inline-link" href={c.url} target="_blank" rel="noopener">
                    {t(c.verify)}
                    <span className="sr-only"> {t(ui.newTab)}</span>
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title={t(cv.headings.interests)} delay={120}>
          <ul className="check-list">
            {cv.interests.map((it, i) => (
              <li key={i}>
                <span className="check mono" aria-hidden="true">
                  [X]
                </span>
                {t(it)}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <div ref={ctaRef} className="cv-cta reveal">
        <a href={site.cv} className="btn btn-primary" download>
          {t(cv.download)}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </Section>
  )
}
