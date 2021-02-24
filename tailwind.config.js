/* eslint-disable no-undef */
const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    extend: {
      colors: {
        black: '#323232',
        ...colors
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters')
  ]
};
