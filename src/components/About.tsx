import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const headRef = useReveal<HTMLDivElement>()
  const copyRef = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-36">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid md:grid-cols-[.8fr_1.2fr] gap-14 items-start">
          <div ref={headRef} className="reveal max-w-[640px] mb-4">
            <div className="eyebrow font-mono text-[.78rem] tracking-[.14em] uppercase text-cyan flex items-center gap-2.5 mb-4">
              {t.about.eyebrow}
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              {t.about.headingLine1}
              <br />
              <span className="text-text-dim">{t.about.headingLine2}</span>
            </h2>
          </div>

          <div ref={copyRef} className="reveal" style={{ transitionDelay: '.08s' }}>
            <p className="text-text-dim text-[1.06rem] mb-5 max-w-[60ch]">{t.about.paragraph1}</p>

            <p className="font-display text-[1.3rem] text-text border-l-2 border-blue pl-5.5 my-9 max-w-[48ch]">
              {t.about.pullQuote}
            </p>

            <p className="text-text-dim text-[1.06rem] max-w-[60ch]">{t.about.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
