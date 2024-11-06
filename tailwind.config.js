/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {colors: {
      customColor: '#8AAAE5', // Define your custom color
    },
    transform: {
      'rotate-y': 'rotateY(180deg)',
    },
  },
},
  plugins: [],
};
