/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': '#FFFFFF00',
      'white': '#FFF',
      'black': '#000',
      'opaque': '#A1A1A1',
      'blue': '#012030',
      'dark-blue': '#001525',
      'light-blue': '#13678A',
    },

    extend: {},
  },
  plugins: [],
}
