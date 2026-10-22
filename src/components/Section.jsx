import { useDecode, useReveal } from '../hooks'
import { useLang } from '../i18n'

/** A framed BIOS panel with a numbered header strip. The title resolves out
 *  of noise when it scrolls into view; assistive tech reads the final text
 *  from aria-label. Everything below is plain readable content. */
export default function Section({ id, num, eyebrow, title, titleEm, status, lead, children }) {
  const { t } = useLang()
  const [ref, shown] = useReveal()

  const full = t(title) + t(titleEm)
  const head = useDecode(t(title), shown)
  const em = useDecode(t(titleEm), shown, 2.4)

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
          {status && <span className="section-head-right">[ {status} ]</span>}
        </div>

        <div ref={ref} className="reveal section-intro">
          <h2 id={`${id}-title`} className="section-title" aria-label={full}>
            <span aria-hidden="true">
              {head}
              <em>{em}</em>
            </span>
          </h2>
          {lead && <p className="lead">{t(lead)}</p>}
        </div>

        {children}
      </div>
    </section>
  )
}
