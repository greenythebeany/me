import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useCountUp, useReveal } from '../hooks'
import { cv, site } from '../data/content'

function Block({ title, delay = 0, children }) {
  const [ref, shown] = useReveal()
  return (
    <div
      ref={ref}
      className="cv-block panel glow reveal"
      style={{ '--delay': `${delay}ms` }}
      onPointerMove={trackGlow}
    >
      <header className="card-head chrome">
        <span>{title}</span>
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
      <div className="bar" role="img" aria-label={`${skill.name} ${skill.level}%`}>
        <span className="bar-fill" style={{ '--level': skill.level }} />
        <span className="bar-pct mono">{pct}%</span>
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
        <Block title={t(cv.headings.education)}>
          {cv.education.map((e, i) => (
            <div key={i} className="edu">
              <p className="edu-role">{t(e.role)}</p>
              <p className="edu-place">{t(e.place)}</p>
              <p className="edu-when mono">{t(e.when)}</p>
            </div>
          ))}
        </Block>

        {/* Levels drawn as a segmented BIOS meter, counting up as they fill. */}
        <Block title={t(cv.headings.skills)} delay={90}>
          {(shown) =>
            cv.skills.map((s) => <Skill key={s.name} skill={s} shown={shown} />)
          }
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

        <Block title={t(cv.headings.interests)} delay={90}>
          <ul className="check-list">
            {cv.interests.map((it, i) => (
              <li key={i} style={{ '--delay': `${i * 70}ms` }}>
                <span className="check mono">[X]</span>
                {t(it)}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <div ref={ctaRef} className="cv-cta reveal">
        <a href={site.cv} target="_blank" rel="noopener" className="btn btn-primary">
          {t(cv.download)}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </Section>
  )
}
