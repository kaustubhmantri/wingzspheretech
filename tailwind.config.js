/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          purple: '#a855f7',
          pink: '#ec4899',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #14b8a6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #ef4444 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(20, 184, 166, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.1) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
};
