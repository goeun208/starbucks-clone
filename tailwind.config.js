/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '280px',
        'sm': '660px',
        'md': '960px',
        'semi-lg': '1100px',
        'lg': '1140px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        dropdown: {
          '0%': {maxHeight: '0'},
          '100%': {maxHeight: '30rem'},
        },
        firstBanner: {
          '0%': {backgroundColor: 'none'},
          '100%': {backgroundColor: '#014938'},
        },
        secondBanner: {
          '0%': {backgroundColor: 'none'},
          '100%': {backgroundColor: '#e54360'},
        },
        whiteButton: {
          '0%': {backgroundColor: 'none'},
          '100%': {backgroundColor: '#fff'},
        },
        dropDownButton: {
          '0%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(180deg)'},
        },
      },
      animation: {
        dropdown: 'dropdown 0.5s ease-in-out forwards',
        firstBanner: 'firstBanner 0.5s ease-out forwards',
        secondBanner: 'secondBanner 0.5s ease-out forwards',
        whiteButton: 'whiteButton 0.5s ease-out forwards',
        dropDownButton: 'dropDownButton 0.5s ease-out forwards'
      },
    },
    },
  plugins: [],
}
