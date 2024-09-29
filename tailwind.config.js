/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins", sans-serif;'],
      },
      backgroundImage: {
        'landing': "url(../images/bg-home.jpg)",
        'info': "url(../images/info-bg.jpg)",
      }
    },
  },
  plugins: [],
}

