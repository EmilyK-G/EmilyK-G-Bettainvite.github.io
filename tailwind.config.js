const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './app/[lightviteId]/page.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--dancing-script)', ...fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'chocolate': '#4a1800',
      'darkchocolate': '#190c0a',
      'whitesmoke': '#f5f5f5',
      'brick': '#983711',
      'darknavy': '#39486A',
      'midnight': '#2F4858',
      'blue':'#003F7F',
      'tan': '#BD8E87',
      'black':'#000000',
      'error':'#ff0000',
      'success':'#9acd32',
      'salmon':'#FFB895',
      'lightolive':'#909700',
      'champagne':'#FFFCDB',
      'intenseviolet':'#422A7C',
      'gray':'#a0a09a',
      'lightgray':'#D8E5E9',
      'mateblue':'#0052A1',
      'matecherry':'#691c31',
      'rose':'#FFD0D0',
      'lightpink':'#edcddd',
      'darkbrown':'#2d1e17',
      'burntorange':'#673301',
      'mustard':'#D5A418',
      'yellow':'#F9F871',
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
