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
        'theme-black': '#1D2228',
      },
      boxShadow: {
        'inner-tv': 'inset 0 0 45px 0 rgba(0, 0, 0, 1)',
      },
      keyframes: {
        'screen-lagg': {
          from: {
            top: '0px',
          },
          to: {
            top: '5px',
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
        'tv-screen-lagg': 'screen-lagg 2s linear infinite',
        'cursors-tail-second-drop': 'second-drop 2s linear infinite',
      },
    },
  },
  plugins: [],
};
