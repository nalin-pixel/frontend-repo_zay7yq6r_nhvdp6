import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">VoiceHub</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#waitlist" className="hover:text-white">Waitlist</a>
            <a href="/test" className="hover:text-white">Backend</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Pricing />
        <Waitlist />
      </main>

      <footer className="py-10 border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between text-sm text-white/70">
          <p>© {new Date().getFullYear()} VoiceHub Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
