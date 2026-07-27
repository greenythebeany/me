import Section from './Section'
import { useLang } from '../i18n'
import { trackGlow, useReveal } from '../hooks'
import { projects } from '../data/content'

function Project({ item, index, total }) {
  const { t } = useLang()
  const [ref] = useReveal()

  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener"
      className="proj panel glow reveal"
      onPointerMove={trackGlow}
      style={{ '--delay': `${(index % 2) * 80}ms` }}
    >
      <header className="card-head chrome">
        <span>
          &gt;&gt; MODULE {item.num}/{String(total).padStart(2, '0')}
        </span>
        <span className="card-head-dim">{item.tag}</span>
      </header>

      <div className="proj-body">
        <span className="proj-ghost mono" aria-hidden="true">
          {item.num}
        </span>
        <h3 className="proj-title">{t(item.title)}</h3>
        <p className="proj-desc">{t(item.desc)}</p>
      </div>

      <footer className="proj-foot chrome">
        <span className="proj-open">{t(projects.open)} &gt;&gt;</span>
        <span className="proj-host">{item.url.replace('https://', '')}</span>
      </footer>
    </a>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      num="04"
      eyebrow={projects.eyebrow}
      title={projects.title}
      titleEm={projects.titleEm}
      status={`${projects.items.length} FOUND`}
    >
      <div className="proj-grid">
        {projects.items.map((p, i) => (
          <Project key={p.num} item={p} index={i} total={projects.items.length} />
        ))}
      </div>
    </Section>
  )
}
