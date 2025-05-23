/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        'background-secondary': '#1e1e1e',
        primary: '#20c997',
        secondary: '#1baa80',
        text: '#fff',
        'text-secondary': '#dee3e4',
        'text-muted': '#718096',
        dark: '#343a40',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 