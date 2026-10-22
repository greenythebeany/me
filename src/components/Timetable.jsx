import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useNow, useReveal } from '../hooks'
import { timetable } from '../data/content'

// Bratislava wall-clock time, whatever the visitor's own time zone is
const PARTS = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Bratislava',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour12: false,
})
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const mins = (hhmm) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3))

/** Which slot is running now, or which one comes next this week. */
function liveState(now) {
  const p = Object.fromEntries(PARTS.formatToParts(now).map((x) => [x.type, x.value]))
  const date = `${p.year}-${p.month}-${p.day}`
  if (date < timetable.term.start || date > timetable.term.end) return { kind: 'off' }

  const day = WEEKDAYS.indexOf(p.weekday)
  const t = mins(`${p.hour}:${p.minute}`)
  for (let d = day; d < timetable.days.length; d++) {
    for (let s = 0; s < timetable.days[d].slots.length; s++) {
      const slot = timetable.days[d].slots[s]
      if (d === day && t >= mins(slot.from) && t < mins(slot.to)) return { kind: 'now', d, s }
      if (d > day || t < mins(slot.from)) return { kind: 'next', d, s }
    }
  }
  return { kind: 'free' }
}

function Day({ day, index, live }) {
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
        <h3>{t(day.day)}</h3>
        <span className="card-head-dim">{t(timetable.slotCount, { n: String(day.slots.length).padStart(2, '0') })}</span>
      </header>

      <ul>
        {day.slots.map((s, i) => {
          const state = live.d === index && live.s === i ? live.kind : null
          return (
            <li key={i} className={`tt-slot${s.lab ? ' lab' : ''}${state ? ` is-${state}` : ''}`}>
              <span className="tt-time mono">
                <time>{s.from}</time> — <time>{s.to}</time>
                {state && <span className="tt-flag chrome">{t(timetable.status[state])}</span>}
              </span>
              <span className="tt-name">{t(s.name)}</span>
              <span className="tt-who mono">
                <span className="sr-only">{t(s.lab ? timetable.legend.lab : timetable.legend.lecture)} · </span>
                {s.who}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Timetable() {
  const { t } = useLang()
  const live = liveState(useNow(60_000))

  return (
    <Section
      id="timetable"
      num="03"
      eyebrow={timetable.eyebrow}
      title={timetable.title}
      titleEm={timetable.titleEm}
      status={t(timetable.status[live.kind])}
    >
      <div className="tt-grid">
        {timetable.days.map((d, i) => (
          <Day key={i} day={d} index={i} live={live} />
        ))}
      </div>

      <div className="tt-legend label" aria-hidden="true">
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
