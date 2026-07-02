import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref and adds the
 * `in` class once the element enters the viewport (pairs with the
 * `.reveal` / `.reveal.in` styles defined in index.css).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
