import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Language, type Content } from '../i18n/translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === 'en' || stored === 'pt') {
      setLanguageState(stored)
    }
  }, [])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  function toggleLanguage() {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
