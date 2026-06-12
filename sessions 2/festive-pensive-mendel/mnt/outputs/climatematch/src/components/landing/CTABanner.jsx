import { useState } from 'react';

export default function CTABanner({ onStart }) {
  const [email, setEmail] = useState('');
  const [done,  setDone]  = useState(false);

  function handleJoin() {
    if (!email.trim()) return;
    // TODO: connect to email service (Mailchimp, ConvertKit, etc.)
    console.info('Waitlist signup:', email);
    setDone(true);
  }

  return (
    <section className="py-24 bg-amber-50 px-4 border-y border-amber-100">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-3xl mb-4">🌿</div>
        <h2 className="text-3xl sm:text-4xl font-black text-forest mb-4">
          Ready to find your place
          <br />
          in the climate economy?
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          Join thousands of professionals discovering climate careers that match who they already are.
        </p>

        {done ? (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl px-6 py-4 font-semibold">
            ✓ You&apos;re on the waitlist! We&apos;ll be in touch.
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
              placeholder="Your email address"
              className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
            />
            <button
              onClick={handleJoin}
              className="bg-forest text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-pine transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        )}

        <button
          onClick={onStart}
          className="mt-6 text-forest font-semibold text-sm underline underline-offset-2"
        >
          Or start the assessment now →
        </button>
      </div>
    </section>
  );
}
