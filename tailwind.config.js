/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      boxShadow: {
        '3d': '10px 10px 10px rgba(0, 0, 0, 0.2)',
      },
      transform: ['hover', 'focus'],
      colors:{bodyBg:"#232741", buttonText:"#35384d", h1Text:"#232741", buttonBg:"#35384d"
      
    },    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  
  
    },
  },
  plugins: [],
}