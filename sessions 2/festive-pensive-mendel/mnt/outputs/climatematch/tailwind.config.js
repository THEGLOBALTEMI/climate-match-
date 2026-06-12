/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#14422f',
        pine:   '#1d5c3e',
        leaf:   '#2d7a52',
        sage:   '#4ca876',
        mint:   '#a7f3d0',
        cream:  '#f0fdf6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
        'fade-in': 'fadeIn 0.4s ease both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #14422f 0%, #1d5c3e 40%, #2d7a52 100%)',
        'gradient-card': 'linear-gradient(135deg, #14422f, #1d5c3e)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(20, 66, 47, 0.11)',
        'card-lg': '0 12px 40px rgba(20, 66, 47, 0.15)',
      },
    },
  },
  plugins: [],
};
