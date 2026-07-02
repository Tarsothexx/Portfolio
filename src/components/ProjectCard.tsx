import { useReveal } from '../hooks/useReveal'
import type { Project } from '../i18n/translations'

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`project-card reveal grid ${
        project.featured ? 'md:grid-cols-2' : 'md:grid-cols-[.85fr_1.15fr]'
      } bg-surface border border-border rounded-[20px] overflow-hidden mb-7 transition-all duration-400 hover:border-blue/40 hover:shadow-[0_30px_60px_-30px_rgba(61,123,250,.35)]`}
    >
      <div
        className={`relative ${
          project.featured ? 'min-h-[340px]' : 'min-h-[260px]'
        } bg-gradient-to-br from-surface-2 to-void flex items-center justify-center overflow-hidden`}
      >
        <span
          className="absolute font-display font-bold select-none text-[9rem] -top-5 -left-2.5"
          style={{ color: 'rgba(143,182,255,.08)' }}
        >
          {project.decoration}
        </span>

        <div className="mock-window w-[82%] bg-surface-2 border border-border rounded-xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
          <div className="flex gap-1.5 px-3.5 py-2.5 bg-white/[.03] border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-text-faint" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-faint" />
            <span className="w-2.5 h-2.5 rounded-full bg-text-faint" />
          </div>
          <div className="p-6">
            <div className="h-2 rounded w-[60%] bg-white/[.06] mb-2.5" />
            <div className="h-2 rounded w-[40%] bg-white/[.06] mb-2.5" />
            <div className="mt-4.5 h-1.5 rounded bg-white/[.06] overflow-hidden">
              <span className="block h-full w-[72%] bg-grad-primary rounded" />
            </div>
            <div className="flex gap-2 mt-4.5">
              {project.stack.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="font-mono text-[.65rem] px-2.5 py-1 rounded-full border border-border text-text-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-11 flex flex-col justify-center">
        <span className="font-mono text-[.72rem] text-cyan tracking-[.1em] uppercase mb-3.5">{project.tag}</span>
        <h3 className="font-display text-[1.7rem] mb-3.5">{project.title}</h3>
        <p className="text-text-dim mb-5.5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6.5">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[.72rem] px-3 py-1.5 rounded-full border border-border text-text-dim">
              {s}
            </span>
          ))}
        </div>

        {project.links && (
          <div className="flex gap-5.5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[.88rem] font-semibold relative nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
