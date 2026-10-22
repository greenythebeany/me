import { useEffect, useRef, useState } from 'react'

const SCRAMBLE = '#$%&*+=?@01<>/\\[]'

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Adds `.in` once the element scrolls into view, then stops observing.
 *  Returns the ref plus whether it has fired, so children can key off it. */
export function useReveal(options) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // no observer (old or hardened browser) means no reveal, never hidden content
    if (reducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('in')
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          setShown(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08, ...options },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return [ref, shown]
}

/** Resolves `text` out of random glyphs, left to right. Length never changes,
 *  so nothing reflows while it settles. */
export function useDecode(text, active, speed = 1.7) {
  const [out, setOut] = useState(() => (reducedMotion() ? text : ''))

  useEffect(() => {
    if (!active || reducedMotion()) {
      setOut(text)
      return
    }
    let frame = 0
    let raf
    const tick = () => {
      frame += 1
      const revealed = Math.floor(frame / speed)
      setOut(
        text
          .split('')
          .map((c, i) =>
            i < revealed || c === ' '
              ? c
              : SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0],
          )
          .join(''),
      )
      if (revealed < text.length) raf = requestAnimationFrame(tick)
      else setOut(text)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text, active, speed])

  return out || text
}

/** Eases a number from 0 to `target` once `active` flips true. */
export function useCountUp(target, active, duration = 1100) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (reducedMotion()) {
      setValue(target)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value
}

/** Which section is currently under the top bar — drives the nav highlight. */
export function useScrollSpy(ids, offset = 200) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      // the last section can be too short to ever reach the offset
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}

/** 0 → 1 across the length of the document. */
export function useScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return p
}

/** The current time, re-read every `every` ms. */
export function useNow(every = 1000) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), every)
    return () => clearInterval(id)
  }, [every])
  return now
}

/** Binds a bare key (no modifiers) to `fn`, ignored while typing in a field. */
export function useShortcut(key, fn) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== key || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return
      if (e.target.closest?.('input, textarea, select, [contenteditable="true"]')) return
      e.preventDefault()
      fn()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [key, fn])
}

/** Feeds the cursor position to a panel as --mx/--my for its glow layer. */
export function trackGlow(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
