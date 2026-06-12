import { useState } from 'react'
import Navbar         from './components/layout/Navbar.jsx'
import Footer         from './components/layout/Footer.jsx'
import Hero           from './components/landing/Hero.jsx'
import WhySection     from './components/landing/WhySection.jsx'
import HowItWorks     from './components/landing/HowItWorks.jsx'
import ExampleCareers from './components/landing/ExampleCareers.jsx'
import WhoItsFor      from './components/landing/WhoItsFor.jsx'
import Testimonials   from './components/landing/Testimonials.jsx'
import CTABanner      from './components/landing/CTABanner.jsx'
import AssessmentPage from './components/assessment/AssessmentPage.jsx'
import EmailCapture   from './components/email/EmailCapture.jsx'
import ResultsPage    from './components/results/ResultsPage.jsx'

export default function App() {
  const [view,    setView]    = useState('landing')
  const [answers, setAnswers] = useState(null)
  const [user,    setUser]    = useState(null)

  const go = (v) => { setView(v); window.scrollTo({ top: 0 }) }

  const MiniNav = (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 bg-white/95 backdrop-blur border-b border-gray-100 flex items-center px-6 justify-between">
      <button onClick={() => go('landing')} className="flex items-center gap-2">
        <span className="text-xl">🌿</span>
        <span className="font-black text-forest text-lg">Climate<span className="text-leaf">Match</span></span>
      </button>
      <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">Beta</span>
    </nav>
  )

  if (view === 'assessment') return <>{MiniNav}<AssessmentPage onComplete={a => { setAnswers(a); go('email') }} /></>
  if (view === 'email')      return <>{MiniNav}<EmailCapture onContinue={d => { setUser(d); go('results') }} /></>
  if (view === 'results' && answers) return <>{MiniNav}<ResultsPage answers={answers} user={user} onRestart={() => go('landing')} /></>

  return (
    <>
      <Navbar onStart={() => go('assessment')} />
      <main>
        <Hero           onStart={() => go('assessment')} />
        <WhySection />
        <HowItWorks     onStart={() => go('assessment')} />
        <ExampleCareers onStart={() => go('assessment')} />
        <WhoItsFor      onStart={() => go('assessment')} />
        <Testimonials />
        <CTABanner      onStart={() => go('assessment')} />
      </main>
      <Footer />
    </>
  )
}
