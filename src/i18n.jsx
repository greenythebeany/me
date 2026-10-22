import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const KEY = 'gb-lang'
const LangCtx = createContext(null)

/** Every string in src/data is an `{ en, sk }` pair; `t` picks the side and
 *  fills `{name}` placeholders from `vars`. */
export function LangProvider({ children }) {
  // a stored choice wins; a first visit from a Slovak or Czech browser gets Slovak
  const [lang, setLang] = useState(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored === 'sk' || stored === 'en') return stored
    } catch {}
    return (navigator.languages ?? [navigator.language]).some((l) => /^(sk|cs)\b/i.test(l))
      ? 'sk'
      : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback(
    (pair, vars) => {
      let s = pair && typeof pair === 'object' ? (pair[lang] ?? pair.en) : pair
      if (typeof s !== 'string') return s
      if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m))
      // Slovak typography: a one-letter preposition or conjunction never ends a line
      if (lang === 'sk') s = s.replace(/(?<=^|[\s(])([aikosuvzAIKOSUVZ]) /g, '$1 ')
      return s
    },
    [lang],
  )

  const toggle = useCallback(() => {
    setLang((l) => {
      const next = l === 'en' ? 'sk' : 'en'
      try {
        localStorage.setItem(KEY, next)
      } catch {}
      return next
    })
  }, [])

  return <LangCtx.Provider value={{ lang, setLang, toggle, t }}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
