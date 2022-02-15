module.exports = {
  mode : 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'lg': '1025px',
      // => @media (min-width: 1025px) { ... }
    }
  },
  plugins: [],
}
