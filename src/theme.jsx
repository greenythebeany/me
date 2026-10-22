import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const KEY = 'gb-theme'
const ThemeCtx = createContext(null)
const BG = { dark: '#0d1117', light: '#ffffff' }

/** The inline script in index.html has already picked the theme (stored
 *  choice, else the OS setting) before first paint; start from what it set. */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', BG[theme])
  }, [theme])

  // only an explicit toggle is remembered, so a first visit keeps following the OS
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(KEY, next)
      } catch {}
      return next
    })
  }, [])

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
