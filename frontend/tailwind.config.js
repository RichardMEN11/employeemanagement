module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nanoBlue: '#19194A',
        giantRed: '#D90855',
        mircoBlue: '#EEF2F6',
        rapidGrey: '#9E9E9E',
        slowGrey: '#EFEFEF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
