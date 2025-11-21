import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Dojo from './components/Dojo'
import Principles from './components/Principles'
import Schedule from './components/Schedule'
import CTA from './components/CTA'

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      {/* Glow backdrop */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <section id="programs"><Programs /></section>
        <Dojo />
        <Principles />
        <Schedule />
        <CTA />
      </main>
      <footer className="py-10 border-t border-white/10 text-center text-slate-400">
        © {new Date().getFullYear()} Fukuri Judokool. Oss!
      </footer>
    </div>
  )
}

export default App