import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/landing/Hero.jsx'
import WhySection from './components/landing/WhySection.jsx'
import HowItWorks from './components/landing/HowItWorks.jsx'
import ExampleCareers from './components/landing/ExampleCareers.jsx'
import WhoItsFor from './components/landing/WhoItsFor.jsx'
import Testimonials from './components/landing/Testimonials.jsx'
import CTABanner from './components/landing/CTABanner.jsx'
import AssessmentPage from './components/assessment/AssessmentPage.jsx'
import ResultsPage from './components/results/ResultsPage.jsx'

export default function App() {
  const [view, setView] = useState('home')
  const [answers, setAnswers] = useState(null)

  const start = () => {
    setView('assessment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const complete = (assessmentAnswers) => {
    setAnswers(assessmentAnswers)
    setView('results')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const restart = () => {
    setAnswers(null)
    setView('assessment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (view === 'assessment') return <AssessmentPage onComplete={complete} />
  if (view === 'results') return <ResultsPage answers={answers || {}} user={{}} onRestart={restart} />

  return (
    <>
      <Navbar onStart={start} />
      <main>
        <Hero onStart={start} />
        <WhySection />
        <HowItWorks onStart={start} />
        <ExampleCareers onStart={start} />
        <WhoItsFor onStart={start} />
        <Testimonials />
        <CTABanner onStart={start} />
      </main>
      <Footer />
    </>
  )
}
