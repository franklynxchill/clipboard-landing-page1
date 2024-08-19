/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '450px',
      md: '768px',
      lg: '992px',
      xl: '1124px',
    },
    container: {
      center: true,
    },
    
    extend: {
      colors : {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        dark_GrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        primaryFont: 'Bai Jamjuree',
      }, 
      backgroundImage: {
        headerDesktop: "url('/images/bg-header-desktop.png')",
        headerMobile: "url('/images/bg-header-mobile.png')",
      }
    },
  },
  plugins: [],
}

