import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useReveal } from '../hooks'
import { about } from '../data/content'

function Card({ card, index, delay }) {
  const { t } = useLang()
  const [ref] = useReveal()
  return (
    <article
      ref={ref}
      className="card panel glow reveal"
      style={{ '--delay': `${delay}ms` }}
      onPointerMove={trackGlow}
    >
      <header className="card-head chrome">
        <span>{t(card.title)}</span>
        <span className="card-head-dim">SLOT {String(index + 1).padStart(2, '0')}</span>
      </header>
      <p>{t(card.body)}</p>
    </article>
  )
}

export default function About() {
  const { t } = useLang()
  const [ref] = useReveal()

  return (
    <Section
      id="about-details"
      num="01"
      eyebrow={about.eyebrow}
      title={about.title}
      titleEm={about.titleEm}
    >
      <p ref={ref} className="lead reveal" style={{ '--delay': '80ms' }}>
        {t(about.lead)}
      </p>

      <div className="card-grid">
        {about.cards.map((c, i) => (
          <Card key={c.id} card={c} index={i} delay={i * 90} />
        ))}
      </div>
    </Section>
  )
}
