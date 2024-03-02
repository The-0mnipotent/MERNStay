/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      col1: "#3903fc",
      col2: "#fc037f",
      white: "#FFFFFF",
      gray: "#e5e7eb",
      red: "#fc0303",
      green: "#03fc45",
    },
    extend: {},
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};
