/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a0023",   // Deep dark purple
        neon: "#ec4899",      // Neon pink
        accent: "#f472b6",    // Lighter pink
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #ec4899, #c026d3)',
      },
    },
  },
  plugins: [],
}
