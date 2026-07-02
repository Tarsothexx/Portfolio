import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import type { Content } from '../i18n/translations'

function TimelineItem({
  item,
  isLast,
}: {
  item: Content['timeline']['items'][number]
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`t-item relative ${inView ? 'in' : ''} ${isLast ? 'pb-0' : 'pb-14'}`}>
      <span className="font-mono text-[.75rem] text-text-faint mb-2 block">{item.date}</span>
      <h4 className="font-display text-[1.15rem] mb-2">{item.title}</h4>
      <p className="text-text-dim max-w-[60ch]">{item.description}</p>
    </div>
  )
}

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trajetoria" className="py-36">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="reveal in max-w-[640px] mb-16">
          <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-cyan flex items-center gap-2.5 mb-4 eyebrow">
            {t.timeline.eyebrow}
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
            {t.timeline.headingLine1} <span className="text-text-dim">{t.timeline.headingLine2}</span>
          </h2>
        </div>

        <div ref={trackRef} className={`timeline-track relative pl-10 ${inView ? 'in' : ''}`}>
          {t.timeline.items.map((item, i) => (
            <TimelineItem key={item.title} item={item} isLast={i === t.timeline.items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
