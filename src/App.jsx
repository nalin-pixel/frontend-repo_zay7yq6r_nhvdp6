import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-gray-900">VoiceHub</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#waitlist" className="hover:text-gray-900">Waitlist</a>
            <a href="/test" className="hover:text-gray-900">Backend</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Pricing />
        <Waitlist />
      </main>

      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} VoiceHub Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
