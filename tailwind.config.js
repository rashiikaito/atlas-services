/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'safari-gold': '#C5A059',
        'deep-charcoal': '#1E293B',
        'teal': '#0D9488',
        'cream': '#F5F1E8',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'geist': ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
