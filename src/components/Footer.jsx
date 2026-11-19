import { useLang } from '../i18n'
import { footer, nav, site, ui } from '../data/content'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footbar">
      <div className="shell">
        <div className="footbar-top">
          <p className="footbar-big">
            {t(footer.thanks)} <em>{t(footer.thanksEm)}</em>
          </p>
          <span className="footbar-mark" aria-hidden="true">
            g
          </span>
        </div>

        <div className="footbar-cols">
          <nav aria-label={t(ui.sections)}>
            <p className="label">{t(footer.site)}</p>
            <ul>
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{t(n.label)}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="label">{t(footer.elsewhere)}</p>
            <ul>
              <li>
                <a href={site.github} target="_blank" rel="noopener">
                  {t(footer.github)} ↗<span className="sr-only"> {t(ui.newTab)}</span>
                </a>
              </li>
              <li>
                <a href={site.triptych}>{t(footer.triptych)}</a>
              </li>
              <li>
                <a href={site.triptychInstagram} target="_blank" rel="noopener">
                  {t(footer.triptychInstagram)} ↗<span className="sr-only"> {t(ui.newTab)}</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label">{t(footer.files)}</p>
            <ul>
              <li>
                <a href={site.cv} download>
                  {t(footer.cvLink)} ↓
                </a>
              </li>
              <li>
                <a href="#main">{t(footer.top)} ↑</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footbar-meta chrome">
          <span>
            © {new Date().getFullYear()} {site.realName}
          </span>
          <span translate="no">greenybeany.dev</span>
          <span>{site.version}</span>
        </div>
      </div>
    </footer>
  )
}
