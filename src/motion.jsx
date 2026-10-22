import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const KEY = 'gb-motion'
const MotionCtx = createContext(null)

/** Animations are on for everyone by default, whatever the OS setting; F4
 *  turns them off and the choice is remembered. The inline script in
 *  index.html sets data-motion before first paint, so start from that. */
export function MotionProvider({ children }) {
  const [motion, setMotion] = useState(() =>
    document.documentElement.getAttribute('data-motion') === 'off' ? 'off' : 'on',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-motion', motion)
  }, [motion])

  const toggle = useCallback(() => {
    setMotion((m) => {
      const next = m === 'on' ? 'off' : 'on'
      try {
        localStorage.setItem(KEY, next)
      } catch {}
      return next
    })
  }, [])

  return <MotionCtx.Provider value={{ motion, toggle }}>{children}</MotionCtx.Provider>
}

export function useMotion() {
  const ctx = useContext(MotionCtx)
  if (!ctx) throw new Error('useMotion must be used inside <MotionProvider>')
  return ctx
}
