module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        1232: '77rem',
      },
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: ['1rem', '1.5rem'],
      sm: ['1.5rem', '2rem'],
      tiny: ['2rem', '3rem'],
      base: ['3rem', '4rem'],
      lg: ['4rem', '5.5rem'],
      xl: ['4.5rem', '6rem'],
    },
    fontFamily: {
      heading: ['FocusGrotesk'],
      body: ['Avenir'],
    },
    gridTemplateRows: {
      8: 'repeat(auto-fill, minmax(300px, 1fr))',
    },
  },
  plugins: [require('daisyui')],
}
