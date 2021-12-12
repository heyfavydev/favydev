const { applyActionCode } = require('firebase/auth')
const { Html } = require('next/document')
const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background': '#000000',
        'accent1': '#111111',
        'accent2': '#333333',
        'accent3': '#444444',
        'accent4': '#666666',
        'accent5': '#888888',
        'accent6': '#999999',
        'accent7': '#EAEAEA',
        'accent8': '#FAFAFA',
        'foreground': '#FFFFFF',
        transparent: 'transparent',
        current: 'currentColor',
        error1: '#F7D4D6',
        error2: '#F33',
        error3: '#FF0000',
        errordark: '#E60000',
        success1: '#D3E5FF',
        success2: '#3291FF',
        success3: '#0070F3',
        successdark: '#0761D1',
        warn1: '#FFEFCF',
        warn2: '#F7B955',
        warn3: '#F5A623',
        warndark: '#AB570A',
        cyan1: '#AAFFEC',
        cyan2: '#79FFE1',
        cyan3: '#50E3C2',
        cyan4: '#29BC9B',
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
