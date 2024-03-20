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
        "str-brown": "#694127",
        "w-brown": "#DAD1C5",
        "w-bg-brown": "#EDE7DC",
      },
    },
  },
  plugins: [],
};
