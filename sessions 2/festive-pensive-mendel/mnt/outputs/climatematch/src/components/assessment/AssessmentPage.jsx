import { useState } from 'react';
import { STEPS } from '../../data/questions.js';
import RadioOpt  from './RadioOpt.jsx';
import MultiChip from './MultiChip.jsx';

export default function AssessmentPage({ onComplete }) {
  const [step,    setStep]    = useState(0);
  const [answers, setAnswers] = useState({});

  const current = STEPS[step];
  const progress = Math.round((step / STEPS.length) * 100);

  function canAdvance() {
    const v = answers[current.key];
    if (current.type === 'text')   return typeof v === 'string' && v.trim().length > 0;
    if (current.type === 'single') return !!v;
    if (current.type === 'multi')  return Array.isArray(v) && v.length > 0;
    return false;
  }

  function toggleMulti(opt) {
    const prev = answers[current.key] || [];
    const next = prev.includes(opt)
      ? prev.filter((x) => x !== opt)
      : [...prev, opt];
    setAnswers({ ...answers, [current.key]: next });
  }

  function setSingle(opt) {
    setAnswers({ ...answers, [current.key]: opt });
  }

  function setText(val) {
    setAnswers({ ...answers, [current.key]: val });
  }

  function next() {
    if (!canAdvance()) return;
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      onComplete(answers);
    }
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col pt-20">
      {/* Progress bar */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40 px-4 py-3">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between text-xs text-gray-400 font-medium mb-2">
            <span>Question {step + 1} of {STEPS.length}</span>
            <span>{current.label}</span>
          </div>
          <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="progress-fill bg-gradient-to-r from-forest to-leaf h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-xl step-transition">
          <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 border border-gray-50">
            <h2 className="text-xl sm:text-2xl font-black text-forest mb-1">
              {current.question}
            </h2>
            {current.hint && (
              <p className="text-sm text-gray-400 mb-6">{current.hint}</p>
            )}
            {!current.hint && <div className="mb-6" />}

            {/* Single select */}
            {current.type === 'single' && (
              <div className="flex flex-col gap-2.5">
                {current.options.map((opt) => (
                  <RadioOpt
                    key={opt}
                    label={opt}
                    selected={answers[current.key] === opt}
                    onClick={() => setSingle(opt)}
                  />
                ))}
              </div>
            )}

            {/* Text input */}
            {current.type === 'text' && (
              <input
                type="text"
                value={answers[current.key] || ''}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && canAdvance() && next()}
                placeholder={current.hint}
                autoFocus
                className="w-full border-2 border-gray-200 focus:border-leaf rounded-2xl px-5 py-4 text-base outline-none focus:ring-2 focus:ring-leaf/20 transition-all"
              />
            )}

            {/* Multi-select chips */}
            {current.type === 'multi' && (
              <div className="flex flex-wrap gap-2">
                {current.options.map((opt) => (
                  <MultiChip
                    key={opt}
                    label={opt}
                    selected={(answers[current.key] || []).includes(opt)}
                    onClick={() => toggleMulti(opt)}
                  />
                ))}
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={back}
                  className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 transition-colors"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={next}
                disabled={!canAdvance()}
                className={`flex-1 py-3.5 rounded-full font-bold text-sm transition-all ${
                  canAdvance()
                    ? 'bg-forest text-white hover:bg-pine shadow-md hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {step === STEPS.length - 1 ? 'See My Results 🎯' : 'Next →'}
              </button>
            </div>
          </div>

          {/* Step dots */}
          <div className="flex justify-center mt-6 gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === step   ? 'w-6 bg-forest'  :
                  i <  step    ? 'w-3 bg-leaf'    :
                                 'w-3 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
