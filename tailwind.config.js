/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',    // Bright blue
        secondary: '#0747A6',  // Darker blue
        accent: '#E6F0FF',     // Light blue background
        lightblue: '#F0F7FF',  // Lighter blue for hover states
        darkblue: '#172B4D',   // Dark blue for text
        navy: '#091E42',       // Navy blue for contrast
        white: '#FFFFFF',      // Pure white
        offwhite: '#F7FAFC',   // Slightly off-white for backgrounds
      }
    },
  },
  plugins: [],
} 