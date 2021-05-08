module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#181818',
        gray: {
          DEFAULT: '#333333',
          dark: '#b2bac2'
        },
        yellow: {
          DEFAULT: '#ff8000',
          dark: '#ffd800'
        }
      },
      fontFamily: {
        headline: ['Montserrat', 'Arial', 'sans-serif'],
        paragraph: ['Roboto', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
