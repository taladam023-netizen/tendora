/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Inter', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#C8A020',
          'gold-light': '#EDD898',
          'gold-dark': '#A07810',
          mint: '#7EC8A0',
          'mint-dark': '#5AA87A',
          orange: '#C8A020',
          'orange-dark': '#A07810',
          blue: '#5AA87A',
          dark: '#0A0A08',
          card: '#13130E',
          border: '#2A2818',
        },
      },
      animation: {
        pulse2: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
