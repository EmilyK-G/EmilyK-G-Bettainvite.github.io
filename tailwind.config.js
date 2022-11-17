/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'brick': '#983711',
      'magenta': '#982A40',
      'violet': '#803462',
      'darkviolet': '#5B4170',
      'darknavy': '#39486A',
      'midnight': '#2F4858',
      'whitesmoke': '#f5f5f5',
      'black':'#000000',
      'error':'#ff0000',
      'success':'#9acd32',
    },
  },
  plugins: [],
  
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
