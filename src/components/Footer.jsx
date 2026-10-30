import { useLang } from '../i18n'
import { footer, site, ui } from '../data/content'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footbar">
      <div className="shell">
        <div className="footbar-panel panel">
          <p className="footbar-prompt mono" aria-hidden="true">
            C:\USERS\GREENYBEANY&gt;<span className="caret">&nbsp;</span>
          </p>
          <p className="footbar-note label">{t(footer.halted)}</p>
        </div>

        <div className="footbar-meta chrome">
          <span>
            © {new Date().getFullYear()} {site.realName}
          </span>
          <span className="footbar-links">
            <a href={site.github} target="_blank" rel="noopener">
              {t(footer.github)}
              <span className="sr-only"> {t(ui.newTab)}</span>
            </a>
            <a href={site.triptych}>{t(footer.triptych)}</a>
            <a href={site.cv} download>
              {t(footer.cvLink)}
            </a>
            <a href="#main">{t(footer.top)}</a>
          </span>
          <span>{site.version}</span>
        </div>
      </div>
    </footer>
  )
}
