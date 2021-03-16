/* eslint-disable no-undef */
const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    extend: {
      colors: {
        black: '#323232',
        darkBg: '#101827',
        darkBgLight: '#1F2936',
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose,
        ...colors
      },
      fontFamily: {
        display: ['GT Super Display', '-apple-system', 'BlinkMacSystemFont', ...fontFamily.sans],
        sans: ['Space Mono', '-apple-system', 'BlinkMacSystemFont', ...fontFamily.sans],
        blog: ['-apple-system', 'BlinkMacSystemFont', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      scale: ['group-hover', 'hover'],
      zIndex: ['hover', 'active']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters')
  ]
};
