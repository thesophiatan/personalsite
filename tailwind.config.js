/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFAFC', // Softer, cream-like white with a hint of pink
        text: '#574167', // Softer plum color for main text
        'text-light': '#796087', // Lighter plum for secondary text
        primary: '#F8B8D0', // Sweet pink
        secondary: '#BAE1C9', // Mint green
        accent: '#FFE0BD', // Soft peach/apricot
        'accent-alt': '#D5C1F0', // Lavender
        'accent-dark': '#7AB8A7', // Sage green
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'gentle-float': 'gentle-float 12s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(3px)' },
        },
        'soft-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(230, 195, 217, 0.2)',
        'float': '0 10px 25px -5px rgba(230, 195, 217, 0.3)',
      },
    },
  },
  plugins: [],
} 