/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          canvas: '#090d16',
          surface: '#0d1322',
          card: '#111827',
          cardHover: '#162035',
          border: '#1e293b',
          borderLight: '#334155',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      boxShadow: {
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'dark-card-hover': '0 20px 40px -12px rgba(37, 99, 235, 0.25), 0 0 1px 1px rgba(59, 130, 246, 0.4)',
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.45)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.45)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.45)',
        'glow-amber': '0 0 30px -5px rgba(245, 158, 11, 0.45)',
      }
    },
  },
  plugins: [],
}
