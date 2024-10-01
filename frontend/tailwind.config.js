/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'wood-light': '#f5deb3', // Light wood background
        'wood-dark': '#4b3d28', // Dark wood background
        'wood-brown': '#8b4513', // Medium wood button
        'wood-brown-dark': '#6b4f4f', // Dark wood button
        'wood-golden': '#d2b48c', // Light wood golden
        'wood-navbar': '#deb887', // Light wood navbar
        'wood-brown-light': '#a0522d', // Light wood button in dark mode
        'wood-golden-light': '#f0e68c', // Soft gold in dark mode
        'wood-navbar-dark': '#3e2723', // Dark wood navbar
        'wood-brown-deep': '#2b1b10', // Deep wood button in dark mode
      },
    },
  },
  plugins: [],
}

