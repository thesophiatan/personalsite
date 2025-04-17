/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF8A98', // Soft coral pink
        'primary-light': '#FFE4E8', // Very light pink
        'secondary': '#8AC4D0', // Soft teal
        'secondary-light': '#E8F4F7', // Very light teal
        'accent': '#FFB38A', // Soft peach
        'background': '#FDFDFD', // Off-white
        'text': '#4A4A4A', // Soft dark gray
        'text-light': '#8A8A8A', // Medium gray
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'watercolor': "url('/src/assets/watercolor-bg.png')",
      },
    },
  },
  plugins: [],
} 