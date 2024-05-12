/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      overpass: ['Overpass', 'sans-serif']
    },
    screens: {
      'sm':'400px',
      'md':'768px',
      'xl':'1024px',
    }
  },
  plugins: [],
}