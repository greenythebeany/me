import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useReveal } from '../hooks'
import { timetable } from '../data/content'

function Day({ day, index }) {
  const { t } = useLang()
  const [ref] = useReveal()

  return (
    <div
      ref={ref}
      className="tt-day panel glow reveal"
      style={{ '--delay': `${index * 70}ms` }}
      onPointerMove={trackGlow}
    >
      <header className="card-head chrome">
        <span>{t(day.day)}</span>
        <span className="card-head-dim">
          {String(day.slots.length).padStart(2, '0')} SLOTS
        </span>
      </header>

      <ul>
        {day.slots.map((s, i) => (
          <li key={i} className={`tt-slot${s.lab ? ' lab' : ''}`}>
            <span className="tt-time mono">{s.time}</span>
            <span className="tt-name">{t(s.name)}</span>
            <span className="tt-who mono">{s.who}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Timetable() {
  const { t } = useLang()

  return (
    <Section
      id="timetable"
      num="03"
      eyebrow={timetable.eyebrow}
      title={timetable.title}
      titleEm={timetable.titleEm}
    >
      <div className="tt-grid">
        {timetable.days.map((d, i) => (
          <Day key={i} day={d} index={i} />
        ))}
      </div>

      <div className="tt-legend label">
        <span>
          <i /> {t(timetable.legend.lecture)}
        </span>
        <span>
          <i className="lab" /> {t(timetable.legend.lab)}
        </span>
      </div>
    </Section>
  )
}
