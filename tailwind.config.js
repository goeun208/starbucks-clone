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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        dropdown: {
          '0%': {maxHeight: '0'},
          '100%': {maxHeight: '20rem'},
        },
        firstBanner: {
          '0%': {backgroundColor: 'none'},
          '100%': {backgroundColor: '#014938', color: "white"},
        },
        secondBanner: {
          '0%': {backgroundColor: 'none'},
          '100%': {backgroundColor: '#e54360', fontColor: "white"},
        },
      },
      animation: {
        dropdown: 'dropdown 0.5s ease-in-out forwards',
        firstBanner: 'firstBanner 0.5s ease-out forwards',
        secondBanner: 'secondBanner 0.5s ease-out forwards',
      },
    },
    },
  plugins: [],
}
