import { useDecode, useReveal } from '../hooks'
import { useLang } from '../i18n'

/** A framed BIOS panel with a numbered header strip. The title resolves out
 *  of noise when it scrolls into view; everything below is plain readable
 *  content. */
export default function Section({ id, num, eyebrow, title, titleEm, status = 'OK', children }) {
  const { t } = useLang()
  const [ref, shown] = useReveal()

  const head = useDecode(t(title), shown)
  const em = useDecode(t(titleEm), shown, 2.4)

  return (
    <section id={id} className="section">
      <div className="shell">
        <div className="section-head chrome">
          <span className="section-head-left">
            <span className="section-num">{num}</span>
            {t(eyebrow)}
          </span>
          <span className="section-head-right">[ {status} ]</span>
        </div>

        <div ref={ref} className="reveal">
          <h2 className="section-title">
            {head}
            <em>{em}</em>
          </h2>
        </div>

        {children}
      </div>
    </section>
  )
}
