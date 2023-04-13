/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainWhite: '#f3f3f3',
        mainBlack: '#181717',
        mainGray: '#606060',
        secondary: '#2429af',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('flowbite/plugin')],
};
