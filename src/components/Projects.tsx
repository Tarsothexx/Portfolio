import { useReveal } from '../hooks/useReveal'
import ProjectCard from './ProjectCard'
import { useLanguage } from '../context/LanguageContext'
import { socials } from '../i18n/translations'

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>()
  const soonRef = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="projetos" className="py-36">
      <div className="max-w-[1180px] mx-auto px-8">
        <div ref={headRef} className="reveal max-w-[640px] mb-16">
          <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-cyan flex items-center gap-2.5 mb-4 eyebrow">
            {t.projects.eyebrow}
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
            {t.projects.headingLine1} <span className="text-text-dim">{t.projects.headingLine2}</span>
          </h2>
        </div>

        {t.projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <div
          ref={soonRef}
          className="reveal border border-dashed border-border rounded-[20px] px-10 py-9 flex items-center justify-between gap-6 flex-wrap"
        >
          <div>
            <span className="font-mono text-[.72rem] text-cyan tracking-[.1em] uppercase mb-1 block">
              {t.projects.soonTag}
            </span>
            <p className="text-text-dim max-w-[46ch]">{t.projects.soonText}</p>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[.92rem] px-7 py-3.5 rounded-[10px] border border-border text-text bg-white/[.02] inline-flex items-center gap-2 transition-all duration-300 hover:border-blue hover:-translate-y-1"
          >
            {t.projects.soonCta}
          </a>
        </div>
      </div>
    </section>
  )
}
