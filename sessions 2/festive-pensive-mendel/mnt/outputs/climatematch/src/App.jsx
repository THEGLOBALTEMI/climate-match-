import { useState } from 'react';

import Navbar         from './components/layout/Navbar.jsx';
import Footer         from './components/layout/Footer.jsx';
import Hero           from './components/landing/Hero.jsx';
import WhySection     from './components/landing/WhySection.jsx';
import HowItWorks     from './components/landing/HowItWorks.jsx';
import ExampleCareers from './components/landing/ExampleCareers.jsx';
import WhoItsFor      from './components/landing/WhoItsFor.jsx';
import Testimonials   from './components/landing/Testimonials.jsx';
import CTABanner      from './components/landing/CTABanner.jsx';
import AssessmentPage from './components/assessment/AssessmentPage.jsx';
import EmailCapture   from './components/email/EmailCapture.jsx';
import ResultsPage    from './components/results/ResultsPage.jsx';

/** @typedef {'landing'|'assessment'|'email'|'results'} View */

export default function App() {
  /** @type {[View, Function]} */
  const [view,              setView]              = useState('landing');
  const [assessmentAnswers, setAssessmentAnswers] = useState(null);
  const [userData,          setUserData]          = useState(null);

  function goToAssessment() {
    setView('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleAssessmentComplete(answers) {
    setAssessmentAnswers(answers);
    setView('email');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleEmailCapture(data) {
    setUserData(data);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function restart() {
    setAssessmentAnswers(null);
    setUserData(null);
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Shared mini navbar for non-landing views
  const MiniNav = (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm h-16 flex items-center px-4">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <button onClick={restart} className="flex items-center gap-2">
          <span className="text-xl">🌿</span>
          <span className="font-black text-forest text-lg tracking-tight">
            Climate<span className="text-leaf">Match</span>
          </span>
        </button>
        <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2.5 py-1 rounded-full">
          Beta
        </span>
      </div>
    </div>
  );

  if (view === 'landing') {
    return (
      <>
        <Navbar onStart={goToAssessment} />
        <main>
          <Hero           onStart={goToAssessment} />
          <WhySection />
          <HowItWorks     onStart={goToAssessment} />
          <ExampleCareers onStart={goToAssessment} />
          <WhoItsFor      onStart={goToAssessment} />
          <Testimonials />
          <CTABanner      onStart={goToAssessment} />
        </main>
        <Footer />
      </>
    );
  }

  if (view === 'assessment') {
    return (
      <>
        {MiniNav}
        <AssessmentPage onComplete={handleAssessmentComplete} />
      </>
    );
  }

  if (view === 'email') {
    return (
      <>
        {MiniNav}
        <EmailCapture onContinue={handleEmailCapture} />
      </>
    );
  }

  if (view === 'results' && assessmentAnswers) {
    return (
      <>
        {MiniNav}
        <ResultsPage
          answers={assessmentAnswers}
          userData={userData}
          onRestart={restart}
        />
      </>
    );
  }

  // Fallback — should never reach here
  return null;
}
