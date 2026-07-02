import { useEffect, useRef } from 'react'

type Particle = { x: number; y: number; vx: number; vy: number }

const LINK_DIST = 150

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let particles: Particle[] = []
    let frameId: number

    const count = reduceMotion ? 0 : window.innerWidth < 720 ? 34 : 70

    function resize() {
      width = canvas!.width = window.innerWidth
      height = canvas!.height = window.innerHeight
    }

    function initParticles() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    function tick() {
      ctx!.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx!.strokeStyle = `rgba(80,140,255,${(1 - dist / LINK_DIST) * 0.35})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      particles.forEach((p) => {
        ctx!.fillStyle = 'rgba(143,182,255,.8)'
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx!.fill()
      })

      if (!reduceMotion) frameId = requestAnimationFrame(tick)
    }

    resize()
    initParticles()
    tick()

    function onResize() {
      resize()
      initParticles()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full opacity-55 pointer-events-none"
    />
  )
}
