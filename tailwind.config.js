/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
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

    },

    extend: {
      colors: {
        'primary-bg': '#011027',
        'primary-card': '#021D46',
        'news-text': '#F3F3F3',
        'news-empty-border': '#949494',
        'primary-light': '#94B7EC',
        'line': '#243652',
        'light-gray':'#e4e8f1',
        'ink-blue':'#143068'
      },
      fontFamily: {
        'openSans': ['OpenSans']
      },
      margin: {
        '30': '120px',
        
      },
      lineHeight: {
        '12': '3rem',
      },
  
    },
  },
  plugins: [],


};
