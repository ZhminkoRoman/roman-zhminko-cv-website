/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'theme-white': '#ffffff',
        'theme-gray': '#333333',
      },
      boxShadow: {
        'shadow-cursor': '0 0 15px #00000033',
      },
      translate: {
        'translate-cursor': '-50%',
      },
    },
  },
  plugins: [],
};
