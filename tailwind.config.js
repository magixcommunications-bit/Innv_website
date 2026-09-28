/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem', // small
      base: '1rem', // body2
      lg: '1.125rem', // body1
      xl: '1.25rem', // h6
      '2xl': '1.5rem', // h5
      '3xl': '2rem', //h4
      '4xl': '3rem', // h3
      '5xl': '3.25rem', // h2
      '6xl': '4rem', // h1
      '7xl': '5rem', // h1
    },
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      fontFamily: {
        light: ['light', 'sans-serif'],
        regular: ['regular', 'sans-serif'],
        medium: ['medium', 'sans-serif'],
        bold: ['bold', 'sans-serif'],
      },
      colors: {
        blue: '#0D2878',
        blueLight: '#2660DD',
        dark: '#3d3d3d',
        orange: '#F69A4D',
        gray: '#DCDCCF',
        darkorange: '#F6DB4D',
        darkgray: '#333',
        darkgray2: '#d8d8d8',
        lightorange: '#FEC89A',
        lightgray: '#E9E9E9',
        gray: '#EDEDED',
      },
      screens: {
        xl: '1175px',
        xsl: '1280px',
        xxl: '1440px',
      },
      borderWidth: {
        1: '1px',
      },
      gridColumn: {},
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      gridTemplateColumns: {
        '2xl-slider': 'repeat(5, 37rem)',
        'xl-slider': 'repeat(5, 33rem)',
        'large-slider': 'repeat(5, 24rem)',
        'md-slider': 'repeat(5, 20rem)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(180deg, #0F73BA 0%, #0036D6 130.12%)',
        'banner-orange-text':
          'linear-gradient(180deg, #F69A4D 0%, #FF8117 100%)',
        'banner-gray': 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        'white-to-orange':
          ' linear-gradient(169deg, rgba(249, 239, 231, 0.00) 0%, rgba(246, 154, 77, 0.33) 100%)',
        'gray-to-white':
          'linear-gradient(90deg, rgba(201, 205, 207, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
        'text-orange-gradient':
          'linear-gradient(177deg, #F69A4D 0%, #FFF 100%)',
        'orange-gradient':
          'linear-gradient(180deg, #F69A4D 0%, rgba(246, 154, 77, 0.52) 100%)',
        'text-dark': 'linear-gradient(178deg, #4D4D4D 0%, #000 100%)',
        'blue-light-gradient':
          'linear-gradient(136deg, #0F73BA 33.82%, #0036D6 135.84%);',
        'dark-gradient': 'linear-gradient(180deg, #10171D 0%, #272E38 100%)',
        'radial-gradient':
          'radial-gradient(ellipse, rgba(246, 154, 77, 0.40) 5.88%, rgba(255, 255, 255, 0.00) 70%)',
      },
      boxShadow: {
        'pointers-card': '0px 0px 20px 0px rgba(246, 154, 77, 0.10)',
        'vision-card': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        activeTab: '0px 1px 4px 0px rgba(246, 154, 77, 0.31)',
        card: 'rgba(247, 151, 79, 0.4) 0px 10px 50px',
      },
    },
  },
  plugins: [],
}
