import { MARK_BOLD, MARK_HEAVY } from '../data/mark'

/** The 緑 mark as inline SVG. Always decorative: the brand name sits next to
 *  it in text. Extra props (fill, stroke…) go to the glyph path; children
 *  (e.g. a <defs> pattern) go before it. */
export default function Mark({ cut = 'heavy', className, children, ...pathProps }) {
  return (
    <svg className={className} viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
      {children}
      <path d={cut === 'bold' ? MARK_BOLD : MARK_HEAVY} fill="currentColor" {...pathProps} />
    </svg>
  )
}
