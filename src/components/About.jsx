import Section from './Section'
import { useLang } from '../i18n'
import { useReveal } from '../hooks'
import { about } from '../data/content'

function Card({ card, index, delay }) {
  const { t } = useLang()
  const [ref] = useReveal()
  return (
    <article ref={ref} className="about-card reveal" style={{ '--delay': `${delay}ms` }}>
      <span className="about-index label" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3>{t(card.title)}</h3>
      <p>{t(card.body)}</p>
    </article>
  )
}

export default function About() {
  return (
    <Section
      id="about-details"
      num="01"
      eyebrow={about.eyebrow}
      title={about.title}
      titleEm={about.titleEm}
      lead={about.lead}
    >
      <div className="about-grid">
        {about.cards.map((c, i) => (
          <Card key={c.id} card={c} index={i} delay={i * 90} />
        ))}
      </div>
    </Section>
  )
}
