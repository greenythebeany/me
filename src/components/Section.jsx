import { useReveal } from '../hooks'
import { useLang } from '../i18n'

/** A numbered editorial section: a hairline header line (number, eyebrow,
 *  optional status), a large serif title with an italic accent, a lead. */
export default function Section({ id, num, eyebrow, title, titleEm, status, lead, children }) {
  const { t } = useLang()
  const [ref] = useReveal()

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="shell">
        <div className="section-head chrome">
          <span className="section-head-left">
            <span className="section-num" aria-hidden="true">
              {num}
            </span>
            {t(eyebrow)}
          </span>
          {status && <span className="section-head-right">{status}</span>}
          <span className="section-glyph" aria-hidden="true">
            {num}
          </span>
        </div>

        <div ref={ref} className="reveal section-intro">
          <h2 id={`${id}-title`} className="section-title">
            {t(title)}
            <em>{t(titleEm)}</em>
          </h2>
          {lead && <p className="lead">{t(lead)}</p>}
        </div>

        {children}
      </div>
    </section>
  )
}
