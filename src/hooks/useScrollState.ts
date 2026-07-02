import { useEffect, useState } from 'react'

type ScrollState = {
  scrolled: boolean
  progress: number
  activeSection: string
}

/**
 * Tracks page-level scroll state used across the layout:
 * - whether the header should collapse
 * - the top progress bar percentage
 * - which section is currently in view (for nav highlighting)
 */
export function useScrollState(sectionIds: string[]) {
  const [state, setState] = useState<ScrollState>({
    scrolled: false,
    progress: 0,
    activeSection: '',
  })

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const progress = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100

      let active = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          active = id
          break
        }
      }

      setState({
        scrolled: window.scrollY > 40,
        progress: isNaN(progress) ? 0 : progress,
        activeSection: active,
      })
    }

    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return state
}
