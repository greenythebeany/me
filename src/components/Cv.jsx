import Section from './Section'
import { useLang } from '../i18n'
import { useCountUp, useReveal } from '../hooks'
import { cv, site, ui } from '../data/content'

/** A hairline-topped cell: mono heading on the left, item count on the right. */
function Block({ title, count, delay = 0, className = '', children }) {
  const [ref, shown] = useReveal()
  return (
    <div ref={ref} className={`cv-block reveal ${className}`} style={{ '--delay': `${delay}ms` }}>
      <header className="cv-head chrome">
        <h3>{title}</h3>
        {count != null && (
          <span className="cv-count tabular" aria-hidden="true">
            {String(count).padStart(2, '0')}
          </span>
        )}
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
        <span className="skill-name">{skill.name}</span>
        <span className="skill-tag label">{t(skill.tag)}</span>
        <span className="skill-pct mono tabular" aria-hidden="true">
          {pct}
        </span>
      </div>
      <div className="bar" role="img" aria-label={t(cv.skillLabel, skill)}>
        <span className="bar-fill" style={{ '--level': skill.level }} />
      </div>
    </div>
  )
}

export default function Cv() {
  const { t } = useLang()
  const [ctaRef] = useReveal()

  return (
    <Section id="cv" num="02" eyebrow={cv.eyebrow} title={cv.title} titleEm={cv.titleEm}>
      <div className="cv-grid">
        <Block title={t(cv.headings.education)} count={cv.education.length} className="cv-edu">
          <ol className="edu-list">
            {cv.education.map((e, i) => (
              <li key={i} className={`edu${e.current ? ' current' : ''}`}>
                <p className="edu-when mono">
                  {t(e.when)}
                  {e.current && <span className="edu-badge chrome">{t(cv.current)}</span>}
                </p>
                <div>
                  <p className="edu-role">{t(e.role)}</p>
                  <p className="edu-place">{t(e.place)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title={t(cv.headings.skills)} count={cv.skills.length} delay={90} className="cv-skills">
          {(shown) => (
            <div>
              {cv.skills.map((s) => (
                <Skill key={s.name} skill={s} shown={shown} />
              ))}
            </div>
          )}
        </Block>

        <Block title={t(cv.headings.languages)} count={cv.languages.length}>
          <dl>
            {cv.languages.map((l, i) => (
              <div key={i} className="spec">
                <dt>{t(l.name)}</dt>
                <dd>{t(l.level)}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title={t(cv.headings.certificates)} count={cv.certificates.length} delay={60}>
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

        <Block title={t(cv.headings.interests)} count={cv.interests.length} delay={120}>
          <ul className="interest-list">
            {cv.interests.map((it, i) => (
              <li key={i}>
                <span className="interest-mark" aria-hidden="true">
                  +
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
