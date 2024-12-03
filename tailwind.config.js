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
        zoomUp: {
          '0%': { transform: 'scale(80%)'},
          '100%': { transform: 'scale(100%)'},
        },
        zoomIn: {
          '0%': { transform: 'scale(100%)'},
          '100%': { transform: 'scale(110%)'},
        },
        slide: {
          '0%': { transform: 'translateX(200%) rotate(100deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        sDown: {
          '0%': { transform: 'translateY(-200%)', opacity: '0' },
          '70%': { transform: 'translateY(30%)',},
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        sUp: {
          '0%': { transform: 'translateY(200%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        sright: {
          '0%': { transform: 'translateX(-200%)', opacity: '0' },
          '70%': { transform: 'translateX(5%)',},
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        zoom: 'zoomIn 0.5s ease-in-out forwards',
        zoomup: 'zoomUp 1s ease-in-out',
        slideIn: 'slide 1s ease-out',
        sd: 'sDown 1s ease-in-out',
        su: 'sUp 1s ease-in-out',
        sr: 'sright 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
