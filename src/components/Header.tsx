import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

type Props = {
  scrolled: boolean
  activeSection: string
}

export default function Header({ scrolled, activeSection }: Props) {
  const [open, setOpen] = useState(false)
  const { t, language, toggleLanguage } = useLanguage()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'py-3.5 bg-void/75 backdrop-blur-md border-border' : 'py-5.5 border-transparent'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <nav className="flex items-center justify-between gap-6">
          <a href="#top" className="font-mono text-[.95rem] tracking-wide flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_theme(colors.cyan)]" />
            TARCISIO<span className="text-text-faint">.dev</span>
          </a>

          {/* desktop nav */}
          <ul className="hidden md:flex text-[.9rem] text-text-dim gap-9">
            {t.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link transition-colors duration-200 ${
                    activeSection === item.id ? 'text-text active' : 'hover:text-text'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="font-mono text-[.72rem] tracking-wide border border-border rounded-full px-3 py-1.5 flex items-center gap-1.5 text-text-dim hover:border-blue hover:text-ice transition-colors duration-200"
            >
              <span className={language === 'en' ? 'text-cyan' : ''}>EN</span>
              <span className="text-text-faint">/</span>
              <span className={language === 'pt' ? 'text-cyan' : ''}>PT</span>
            </button>

            <button
              className="md:hidden text-text text-2xl bg-transparent border-none cursor-pointer"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* mobile nav drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[min(78vw,320px)] bg-[#060911fa] backdrop-blur-xl border-l border-border flex flex-col justify-center items-start gap-7 p-10 transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-text text-2xl bg-transparent border-none cursor-pointer"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {t.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className={`text-lg nav-link ${activeSection === item.id ? 'text-text active' : 'text-text-dim'}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
