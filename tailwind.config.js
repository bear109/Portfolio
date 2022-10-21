/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['NanumSquare'],
      },
      height: {
        98: '32rem',
        100: '42rem',
      },
    },
  },
  plugins: [],
};
