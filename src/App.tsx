import NetworkCanvas from './components/NetworkCanvas'
import CursorGlow from './components/CursorGlow'
import ProgressBar from './components/ProgressBar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import { useScrollState } from './hooks/useScrollState'

const SECTION_IDS = ['sobre', 'skills', 'projetos', 'trajetoria', 'contato']

function Page() {
  const { scrolled, progress, activeSection } = useScrollState(SECTION_IDS)

  return (
    <>
      <NetworkCanvas />
      <div className="fixed inset-0 z-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="fixed z-0 w-[640px] h-[640px] rounded-full pointer-events-none -top-52 -left-44"
        style={{ background: 'radial-gradient(circle, rgba(61,123,250,.22), transparent 70%)', filter: 'blur(120px)' }}
      />
      <div
        className="fixed z-0 w-[640px] h-[640px] rounded-full pointer-events-none -bottom-64 -right-56"
        style={{ background: 'radial-gradient(circle, rgba(55,205,250,.16), transparent 70%)', filter: 'blur(120px)' }}
      />
      <CursorGlow />
      <ProgressBar progress={progress} />

      <Header scrolled={scrolled} activeSection={activeSection} />

      <main id="top" className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <div className="relative z-[2]">
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
