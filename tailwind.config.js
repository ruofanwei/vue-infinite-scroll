module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#45526C',
        sub: '#DCDCDC',
        light: '#F4F4F4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
