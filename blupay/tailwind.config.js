/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dusty-blue': {
          50: '#f8fafc',  // Airy & almost white
          100: '#e2e8f0', // The "blushy" light grey-blue
          200: '#cbd5e1', // Soft muted stone blue
          300: '#94a3b8', // Classic Dusty Blue
          400: '#8499b4', // "Ashy blue" sweet spot
          500: '#64748b', // True Livid (Blue-Grey)
          600: '#475f94', // Deeper, more saturated dusty tone
          700: '#334155', // Midnight slate
          800: '#1e293b', // Deep leaden blue
          900: '#0f172a', // Darkest ink
        },

        'blupay': {
          // Primary Color (Buttons, Highlights)
          blue: "#2D7CF6",
          // Deep Trust Blue (Headlines, Logo Text)
          dark: "#001F66",
          // Light Sky Blue (Gradients, Accents)
          light: "#5FA8FF",
          // Accent Color (Promotional, CTAs)
          gold: "#FFD447",
        },
      fontFamily: {
        // This prepends Geist to the sans font stack
        sans: ['"Geist Variable"', 'sans-serif'],
      },
      }, 
    },
  },
  plugins: [],
}
