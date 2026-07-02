import { useReveal } from '../hooks/useReveal'
import Chip from './Chip'
import { useLanguage } from '../context/LanguageContext'
import type { Content } from '../i18n/translations'

function SkillCard({
  category,
  delay,
}: {
  category: Content['skills']['categories'][number]
  delay: string
}) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal bg-surface border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40"
      style={{ transitionDelay: delay }}
    >
      <span className="font-mono text-[.75rem] text-text-faint mb-4 block">{category.label.toUpperCase()}</span>
      <h3 className="font-display text-[1.15rem] font-semibold mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <Chip key={tag.label} label={tag.label} level={tag.level} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-36">
      <div className="max-w-[1180px] mx-auto px-8">
        <div ref={headRef} className="reveal max-w-[640px] mb-16">
          <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-cyan flex items-center gap-2.5 mb-4 eyebrow">
            {t.skills.eyebrow}
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
            {t.skills.headingLine1} <span className="text-text-dim">{t.skills.headingLine2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.skills.categories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
