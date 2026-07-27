import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const KEY = 'gb-lang'
const LangCtx = createContext(null)

/** Every string in src/data is an `{ en, sk }` pair; `t` picks the side. */
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(KEY) === 'sk' ? 'sk' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, lang)
    } catch {}
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback(
    (pair) => (pair && typeof pair === 'object' ? (pair[lang] ?? pair.en) : pair),
    [lang],
  )

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'sk' : 'en')), [])

  return <LangCtx.Provider value={{ lang, setLang, toggle, t }}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
