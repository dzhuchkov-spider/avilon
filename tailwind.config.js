/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'avilon-bg': '#eeeff1',
        'avilon-blue': '#00a4ff',
        'avilon-green': '#00c03f',
        'avilon-text': '#3a3b4f',
        'avilon-text-secondary': '#818587',
        'avilon-text-muted': '#767676',
      },
      boxShadow: {
        'glass': '0px 8px 40px 0px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
