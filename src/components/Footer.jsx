import { useLang } from '../i18n'
import { footer, site } from '../data/content'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footbar">
      <div className="shell">
        <div className="footbar-panel panel">
          <div className="footbar-prompt mono">
            C:\USERS\GREENYBEANY&gt;<span className="caret">&nbsp;</span>
          </div>
          <p className="footbar-note label">{t(footer.halted)}</p>
        </div>

        <div className="footbar-meta chrome">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="footbar-links">
            <a href={site.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={site.cv} target="_blank" rel="noopener">
              {t(footer.cvLink)}
            </a>
          </span>
          <span>{site.version}</span>
        </div>
      </div>
    </footer>
  )
}
