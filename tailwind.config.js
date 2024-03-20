/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown_1": "#694127",
        "brown_2": "#DAD1C5",
        "brown_3": "#97745D",
        "brown_4": "#EDE7DC",
      },
    },
  },
  plugins: [],
};
