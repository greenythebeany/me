import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { boot, site } from '../data/content'

const KEY = 'gb-booted'
const STEP = 190

/** A short POST sequence on first load. Runs once per tab, is skippable with
 *  a click or any key, and is bypassed entirely for reduced-motion users. */
export default function Boot() {
  const { t } = useLang()

  const [done, setDone] = useState(() => {
    try {
      if (sessionStorage.getItem(KEY)) return true
    } catch {}
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (done) return
    const finish = () => {
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {}
      setDone(true)
    }

    if (step >= boot.length) {
      const id = setTimeout(finish, 420)
      return () => clearTimeout(id)
    }

    const id = setTimeout(() => setStep((s) => s + 1), step === 0 ? 260 : STEP)
    window.addEventListener('keydown', finish)
    window.addEventListener('pointerdown', finish)
    return () => {
      clearTimeout(id)
      window.removeEventListener('keydown', finish)
      window.removeEventListener('pointerdown', finish)
    }
  }, [step, done])

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [done])

  if (done) return null

  return (
    <div className="boot" role="status" aria-live="polite">
      <div className="boot-inner mono">
        {boot.slice(0, step).map((line, i) => (
          <div key={i} className="boot-line">
            {t(line)}
          </div>
        ))}
        <div className="boot-line boot-cursor">
          {site.name.toUpperCase()} <span className="caret">&nbsp;</span>
        </div>
      </div>
      <div className="boot-skip label">press any key to skip</div>
    </div>
  )
}
