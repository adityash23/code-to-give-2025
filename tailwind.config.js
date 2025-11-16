/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f6effa',
          100: '#e8d8f0',
          200: '#d4bde6',
          300: '#bf9fdb',
          400: '#ad86d3',
          500: '#9a6ccc',
          600: '#8859c0',
        },
        brand: {
          primary: '#9a6ccc',
          accent: '#8859c0',
        },
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      boxShadow: {
        glass: '0 20px 45px rgba(154, 108, 204, 0.25)',
      },
    },
  },
  plugins: [],
}
