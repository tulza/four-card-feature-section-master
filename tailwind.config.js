/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 78%, 62%)",
        Cyan: "hsl(180, 62%, 55%)",
        Orange: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
        VeryDarkBlue: "hsl(234, 12%, 34%)",
        GrayishBlue: "hsl(229, 6%, 66%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      screens: {
        mob: { max: "1150px" },
      },
      fontFamily: {},
      transitionProperty: {},
    },
  },
  plugins: [],
};
