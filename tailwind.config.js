/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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
    },
  },
  plugins: [],
}
