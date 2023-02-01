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
        'theme-white': '#f9f4f4',
        'theme-gray': '#333333',
      },
      keyframes: {
        'first-drop': {
          from: {
            top: '0px',
            left: '0px',
            opacity: 1,
            width: '12px',
            height: '12px',
          },
          to: {
            top: '30px',
            left: '30px',
            opacity: 0,
            width: '8px',
            height: '8px',
          },
        },
        'second-drop': {
          from: {
            top: '6px',
            left: '0px',
            opacity: 1,
            width: '10px',
            height: '10px',
          },
          to: {
            top: '34px',
            left: '34px',
            opacity: 0,
            width: '6px',
            height: '6px',
          },
        },
      },
      animation: {
        'cursors-tail-first-drop': 'first-drop 1s linear infinite',
        'cursors-tail-second-drop': 'second-drop 2s linear infinite',
      },
    },
  },
  plugins: [],
};
