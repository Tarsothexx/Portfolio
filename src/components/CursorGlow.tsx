import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isFinePointer = window.matchMedia('(pointer:fine)').matches
    if (reduceMotion || !isFinePointer) return

    function onMove(e: MouseEvent) {
      glow!.style.opacity = '1'
      glow!.style.left = `${e.clientX}px`
      glow!.style.top = `${e.clientY}px`
    }
    function onLeave() {
      glow!.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed z-[1] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 pointer-events-none transition-opacity duration-300"
      style={{ background: 'radial-gradient(circle, rgba(61,123,250,.14), transparent 70%)' }}
    />
  )
}
