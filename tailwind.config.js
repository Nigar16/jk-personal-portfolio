/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'min-sm': '640px',
      // => @media (min-width: 640px) { ... }

      'min-md': '768px',
      // => @media (min-width: 768px) { ... }

      'min-lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'min-xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'min-2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1040px'},
      // => @media (max-width: 1023px) { ... }
      'lg2': {'max': '867px'},

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
     

    },

    extend: {
      colors: {
        'nav-bg': '#EBF3FC',
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
