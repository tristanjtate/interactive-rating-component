/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        "my-orange": "hsl(25, 97%, 53%)",
        "very-dark-blue": "hsl(216, 12%, 8%)", // Use kebab-case for naming
        "my-light-grey": "hsl(217, 12%, 63%)",
        "my-dark-blue": "hsl(213, 19%, 18%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
