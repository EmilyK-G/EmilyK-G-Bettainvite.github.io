const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './app/[lightviteId]/page.tsx',
    './app/[bettacardId]/page.tsx',
    './app/[themeId]/page.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--dancing-script)', ...fontFamily.sans],
        cinzel: ['var(--cinzel)', ...fontFamily.serif]
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'rosebrown':'#574141',
      'oldrose':'#c99593',
      'leaves-brown':'#73210a',
      'chocolate': '#4a1800',
      'darkchocolate': '#190c0a',
      'whitesmoke': '#f5f5f5',
      'bonewhite':'#eaebe6',
      'brick': '#983711',
      'darknavy': '#39486A',
      'midnight': '#2F4858',
      'oceanevening':'#6186a0',
      'blue':'#003F7F',
      'tan': '#BD8E87',
      'black':'#000000',
      'error':'#ff0000',
      'success':'#9acd32',
      'salmon':'#FFB895',
      'lightolive':'#909700',
      'darkolive':'#323814',
      'olive':'#647847',
      'champagne':'#FFFCDB',
      'intenseviolet':'#422A7C',
      'gray':'#a0a09a',
      'turquoise-gray':'#4a6563',
      'lightgray':'#D8E5E9',
      'dancer-gray':'#b4b09d',
      'mateblue':'#0052A1',
      'matecherry':'#691c31',
      'garnet':'#9A2A2A',
      'rose':'#FFD0D0',
      'lightpink':'#edcddd',
      'darkbrown':'#2d1e17',
      'brown':'#57423F',
      'lightsand':'#d8d4ca',
      'burntorange':'#673301',
      'mustard':'#D5A418',
      'yellow':'#F9F871',
      'ivory':'#FEEBD6',
      'leaves-ivory':'#fddec1',
      'pinkishwhite':'#ebe9ed',
      'lightcyan':'#E6EFFF',
      'th-primary-dark': 'var(--primary-dark)',
      'th-primary-medium': 'var(--primary-medium)',
      'th-primary-light': 'var(--primary-light)',
      'th-accent-light': 'var(--accent-light)',
      'th-accent-dark': 'var(--accent-dark)',
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
  
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
