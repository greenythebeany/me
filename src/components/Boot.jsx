import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { reducedMotion } from '../hooks'
import { boot, site } from '../data/content'

const KEY = 'gb-booted'
const STEP = 190

/** Runs once per tab and never under reduced motion. */
export function shouldBoot() {
  try {
    if (sessionStorage.getItem(KEY)) return false
  } catch {}
  return !reducedMotion()
}

/** A short POST sequence on first load, skippable with a click or any key. */
export default function Boot({ onDone }) {
  const { t } = useLang()
  const [step, setStep] = useState(0)
  const total = boot.lines.length + 1

  useEffect(() => {
    const finish = () => {
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {}
      onDone()
    }

    const id =
      step >= total
        ? setTimeout(finish, 420)
        : setTimeout(() => setStep((s) => s + 1), step === 0 ? 260 : STEP)

    window.addEventListener('keydown', finish)
    window.addEventListener('pointerdown', finish)
    return () => {
      clearTimeout(id)
      window.removeEventListener('keydown', finish)
      window.removeEventListener('pointerdown', finish)
    }
  }, [step, total, onDone])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="boot" aria-hidden="true">
      <div className="boot-inner mono">
        {step > 0 && <div className="boot-line boot-banner">{t(boot.banner)}</div>}
        {boot.lines.slice(0, Math.max(0, step - 1)).map((line, i) => (
          <div key={i} className="boot-line leader">
            <span>{t(line.text)}</span>
            <span className="boot-ok">{t(line.status)}</span>
          </div>
        ))}
        <div className="boot-line boot-cursor">
          {site.name.toUpperCase()} <span className="caret">&nbsp;</span>
        </div>
      </div>
      <div className="boot-skip label">{t(boot.skip)}</div>
    </div>
  )
}
