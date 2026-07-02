import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 text-center font-mono text-[.78rem] text-text-faint">
      <div className="max-w-[1180px] mx-auto px-8">
        © {new Date().getFullYear()} Tarcisio Vanderlei Evangelista — {t.footer.text}
      </div>
    </footer>
  )
}
