<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Academic Color Palette
        primary: '#2F5DFF',
        secondary: '#1E1E2E',
        accent: '#22C55E',
        'accent-secondary': '#6366F1',
        background: {
          light: '#F7F9FC',
          dark: '#0F172A',
        },
        card: '#FFFFFF',
        text: {
          primary: '#0A0A0A',
          secondary: '#6B7280',
        },
        // Legacy support (will be phased out)
        'primary-indigo': '#2F5DFF',
        'primary-blue': '#2F5DFF',
        'accent-emerald': '#22C55E',
        'accent-amber': '#F59E0B',
        'accent-rose': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'navbar': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6366F1',
        accent: '#0EA5E9',
      },
    },
  },
  plugins: [],
}

>>>>>>> 999916cca54ef7d165f8357624474a49f9f27ee2
