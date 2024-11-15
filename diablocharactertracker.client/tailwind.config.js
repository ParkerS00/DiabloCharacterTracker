/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#040303",
        customRed: "#780606",
        blood: {
          950: "hsl(0, 91%, 4%)",
          900: "hsl(0, 91%, 9%)",
          800: "hsl(0, 92%, 14%)",
          700: "hsl(0, 92%, 19%)",
          600: "hsl(0, 90%, 24%)",
          500: "hsl(0, 53%, 35%)",
          400: "hsl(0, 33%, 47%)",
          300: "hsl(0, 29%, 58%)",
          200: "hsl(0, 29%, 69%)",
          100: "hsl(0, 29%, 80%)",
          50: "hsl(0, 28%, 92%)",
        },
      },
      screens: {
        'skill': '890px', 
        'item': '1152px'
      },
    },
  },
  plugins: [],
};
