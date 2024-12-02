/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'],
         albert: ['Albert Sans', 'sans-serif'],
         jetbrains: ['JetBrains Mono', 'sans-serif'],
      },
      screens: { 'mx': {'max': '640px'}, },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(200%) rotate(100deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slide 1s ease-out',
      },
    },
  },
  plugins: [],
}
