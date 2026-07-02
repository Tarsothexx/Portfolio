import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { socials } from '../i18n/translations'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="contato" className="py-36">
      <div className="max-w-[1180px] mx-auto px-8">
        <div
          ref={ref}
          className="reveal text-center px-10 py-24 rounded-3xl border border-border bg-surface relative overflow-hidden"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(61,123,250,.14), transparent 60%)' }}
        >
          <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-cyan flex items-center justify-center gap-2.5 mb-4 eyebrow">
            {t.contact.eyebrow}
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight mb-4.5">
            {t.contact.headingLine1}
            <br />
            {t.contact.headingLine2}
          </h2>
          <p className="text-text-dim max-w-[44ch] mx-auto mb-9">{t.contact.text}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[.92rem] px-7 py-3.5 rounded-[10px] bg-grad-primary text-void inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-10px_rgba(61,123,250,.55)]"
            >
              {t.contact.githubLabel}
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[.92rem] px-7 py-3.5 rounded-[10px] border border-border text-text bg-white/[.02] inline-flex items-center gap-2 transition-all duration-300 hover:border-blue hover:-translate-y-1"
            >
              {t.contact.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
