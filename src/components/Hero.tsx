import Chip from './Chip'
import { useLanguage } from '../context/LanguageContext'
import profileImg from '../assets/profile.webp'

const coreChips = ['JavaScript', 'TypeScript', 'React', 'HTML5 / CSS3', 'Firebase']

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-24 md:pb-0 relative max-w-[1180px] mx-auto px-8">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
        <div>
          <div className="reveal in font-mono text-[.85rem] text-text-dim flex items-center gap-2.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3dfa8c] shadow-[0_0_10px_#3dfa8c] animate-pulse-dot" />
            {t.hero.status}
          </div>

          <h1 className="reveal in font-display font-bold text-[clamp(2.6rem,7vw,5.4rem)] leading-[1.03] tracking-tight max-w-[16ch] whitespace-pre-line">
            {t.hero.name}
            <span className="bg-grad-primary bg-clip-text text-transparent">.</span>
          </h1>

          <p className="reveal in mt-6" style={{ transitionDelay: '.08s' }}>
            <span className="text-[clamp(1.05rem,1.6vw,1.3rem)] text-text-dim max-w-[46ch] inline-block">
              {t.hero.subtitle}
            </span>
          </p>

          <div className="reveal in flex flex-wrap gap-2.5 mt-8" style={{ transitionDelay: '.16s' }}>
            {coreChips.map((label) => (
              <Chip key={label} label={label} />
            ))}
          </div>

          <div className="reveal in flex gap-4 flex-wrap mt-11" style={{ transitionDelay: '.24s' }}>
            <a
              href="#projetos"
              className="font-semibold text-[.92rem] px-7 py-3.5 rounded-[10px] bg-grad-primary text-void inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-10px_rgba(61,123,250,.55)]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contato"
              className="font-semibold text-[.92rem] px-7 py-3.5 rounded-[10px] border border-border text-text bg-white/[.02] inline-flex items-center gap-2 transition-all duration-300 hover:border-blue hover:-translate-y-1"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="reveal in flex justify-center md:justify-end" style={{ transitionDelay: '.1s' }}>
          <div className="relative animate-float z-10">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40 scale-90"
              style={{ background: 'radial-gradient(circle, rgba(61,123,250,.55), transparent 70%)' }}
            />
            <img
              src={profileImg}
              alt="Tarcisio Vanderlei Evangelista"
              className="relative w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,.55)]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[.7rem] text-text-faint flex flex-col items-center gap-2.5 z-30">
        <span>{t.hero.scroll}</span>
        <span className="w-px h-9 bg-gradient-to-b from-cyan to-transparent animate-scroll-cue" />
      </div>
    </section>
  )
}
