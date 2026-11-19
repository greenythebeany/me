import Section from './Section'
import { useLang } from '../i18n'
import { useReveal } from '../hooks'
import { projects, site, ui } from '../data/content'
import repoData from '../data/repos.json'

const DAY = 864e5

function ago(iso, lang) {
  const days = Math.round((new Date(iso) - Date.now()) / DAY)
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  return Math.abs(days) < 30 ? rtf.format(days, 'day') : rtf.format(Math.round(days / 30), 'month')
}

/** 13 weekly bars, oldest left; height is relative to this repo's busiest week. */
function Activity({ weeks, label }) {
  const max = Math.max(1, ...weeks)
  return (
    <div className="proj-activity" role="img" aria-label={label}>
      {weeks.map((n, i) => (
        <span key={i} className={n ? 'on' : ''} style={{ '--h': n / max }} />
      ))}
    </div>
  )
}

/** One row of the index. The whole row is one link through the title's
 *  stretched hit area; the optional website link sits above it. */
function Project({ repo, index }) {
  const { t, lang } = useLang()
  const [ref] = useReveal()
  const info = projects.details[repo.name]
  const title = info?.title ?? repo.name
  const desc = info ? t(info.desc) : repo.description
  const tag = info?.tag ?? repo.language

  return (
    <li ref={ref} className="proj reveal" style={{ '--delay': `${(index % 3) * 70}ms` }}>
      <span className="proj-num mono tabular" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="proj-body">
        <h3 className="proj-title" translate="no">
          <a className="proj-link" href={repo.url} target="_blank" rel="noopener">
            {title}
            <span className="sr-only"> {t(ui.newTab)}</span>
          </a>
        </h3>
        {desc && <p className="proj-desc">{desc}</p>}
        <p className="proj-tags label">
          {tag && <span>{tag}</span>}
          {repo.homepage && (
            <a className="proj-site" href={repo.homepage} target="_blank" rel="noopener">
              {t(projects.site)} ↗<span className="sr-only"> {t(ui.newTab)}</span>
            </a>
          )}
        </p>
      </div>

      <div className="proj-stats">
        <Activity weeks={repo.weeks} label={t(projects.activity, { n: repo.commits })} />
        <p className="proj-meta mono">
          <span>{t(projects.commits, { n: repo.commits })}</span>
          <span>
            {t(projects.updated)} {ago(repo.pushedAt, lang)}
          </span>
        </p>
      </div>

      <span className="proj-arrow" aria-hidden="true">
        ↗
      </span>
    </li>
  )
}

export default function Projects() {
  const { t, lang } = useLang()
  const { repos, generatedAt } = repoData
  const synced = new Intl.DateTimeFormat(lang === 'sk' ? 'sk-SK' : 'en-GB', { dateStyle: 'medium' }).format(
    new Date(generatedAt),
  )

  return (
    <Section
      id="projects"
      num="04"
      eyebrow={projects.eyebrow}
      title={projects.title}
      titleEm={projects.titleEm}
      status={t(projects.status, { n: repos.length })}
      lead={projects.lead}
    >
      <ol className="proj-list">
        {repos.map((r, i) => (
          <Project key={r.name} repo={r} index={i} />
        ))}
      </ol>

      <div className="proj-after">
        <a href={site.github} className="btn" target="_blank" rel="noopener">
          {t(projects.all)}
          <span aria-hidden="true">↗</span>
          <span className="sr-only"> {t(ui.newTab)}</span>
        </a>
        <p className="label">{t(projects.synced, { date: synced })}</p>
      </div>
    </Section>
  )
}
