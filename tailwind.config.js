module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        card: '480px',
      },
      scale: {
        '1percent': '1.01',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
