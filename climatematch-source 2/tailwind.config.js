/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#14422f',
        pine: '#0f3325',
        leaf: '#2d7a52',
        sage: '#8fb996',
        mint: '#a7f3d0',
        cream: '#f7fbf4',
      },
    },
  },
  plugins: [],
}
