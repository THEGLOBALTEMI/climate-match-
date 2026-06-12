# 🌿 ClimateMatch

**Find your place in the climate economy.**

ClimateMatch is an AI-powered career matching platform that helps people discover climate careers that fit their existing skills, interests, experience, and values — even without a climate background.

🌐 **Live site:** [climatematch.tech](https://climatematch.tech)

---

## ✨ Features

- **7-step career assessment** — background, skills, interests, work style, and goals
- **Smart matching engine** — maps your profile to 10+ climate career pathways
- **Personalised results** — match scores, skills gap, 30-day action plan
- **LinkedIn headline generator** — tailored to your top match
- **CV summary generator** — climate-focused professional bio
- **Email capture** — results delivered before showing full report
- **Waitlist CTA** — built-in growth mechanism
- **Fully responsive** — mobile-first design

---

## 🛠 Tech Stack

| Layer      | Technology                |
|------------|---------------------------|
| Framework  | React 18                  |
| Bundler    | Vite 5                    |
| Styling    | Tailwind CSS 3            |
| Deployment | Vercel / GitHub Pages     |
| Backend    | None (stateless MVP)      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/climatematch.git
cd climatematch

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
climatematch/
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component + view routing
    ├── index.css               # Global styles + Tailwind directives
    ├── data/
    │   ├── careers.js          # All 10 career pathway definitions
    │   └── questions.js        # Assessment question config
    ├── utils/
    │   └── matching.js         # Career scoring + content generation
    └── components/
        ├── layout/
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        ├── landing/
        │   ├── Hero.jsx
        │   ├── WhySection.jsx
        │   ├── HowItWorks.jsx
        │   ├── ExampleCareers.jsx
        │   ├── WhoItsFor.jsx
        │   ├── Testimonials.jsx
        │   └── CTABanner.jsx
        ├── assessment/
        │   ├── AssessmentPage.jsx
        │   ├── MultiChip.jsx
        │   └── RadioOpt.jsx
        ├── email/
        │   └── EmailCapture.jsx
        └── results/
            ├── ResultsPage.jsx
            └── MatchCard.jsx
```

---

## 🌍 Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Add your custom domain `climatematch.tech` in Settings → Domains

### Netlify

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site
3. Connect your repo
4. Build command: `npm run build` | Publish dir: `dist`
5. Deploy

---

## 🔌 Connecting to an AI API (future)

The matching logic in `src/utils/matching.js` is built to be easily replaced with an AI API call. When ready:

1. Add your API key to `.env`:
   ```
   VITE_OPENAI_API_KEY=your_key_here
   ```
2. Replace the `computeMatches()` function in `matching.js` with an API call
3. The component structure remains unchanged

---

## 📬 Contact

Built by **Temilade Salami**  
📧 booktemiladesalami@gmail.com  
🌐 [tuntunre.com](https://tuntunre.com)

---

## 📄 License

MIT — free to use, adapt, and build on.
