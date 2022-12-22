const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
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
      'darkchocolate': '#190c0a',
      'whitesmoke': '#f5f5f5',
      'brick': '#983711',
      'darknavy': '#39486A',
      'midnight': '#2F4858',
      'tan': '#BD8E87',
      'black':'#000000',
      'error':'#ff0000',
      'success':'#9acd32',
      'salmon':'#FFB895',
      'lightolive':'#909700',
      'champagne':'#FFFCDB',
      'th-primary-dark': 'var(--primary-dark)',
      'th-primary-medium': 'var(--primary-medium)',
      'th-primary-light': 'var(--primary-light)',
      'th-accent-light': 'var(--accent-light)',
      'th-accent-dark': 'var(--accent-dark)',
    },
  },
  plugins: [],
  
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
