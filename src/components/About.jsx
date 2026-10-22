import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useReveal } from '../hooks'
import { about, ui } from '../data/content'

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
        <h3>{t(card.title)}</h3>
        <span className="card-head-dim" aria-hidden="true">
          SLOT {String(index + 1).padStart(2, '0')}
        </span>
      </header>
      <p>{t(card.body)}</p>
    </article>
  )
}

export default function About() {
  const { t } = useLang()

  return (
    <Section
      id="about-details"
      num="01"
      eyebrow={about.eyebrow}
      title={about.title}
      titleEm={about.titleEm}
      status={t(ui.ok)}
      lead={about.lead}
    >
      <div className="card-grid">
        {about.cards.map((c, i) => (
          <Card key={c.id} card={c} index={i} delay={i * 90} />
        ))}
      </div>
    </Section>
  )
}
