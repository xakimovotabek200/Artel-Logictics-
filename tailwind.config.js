/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e4181d",
        secondary: "#333366",
        text: "#9B95A2",
      },
    },
  },
  plugins: [],
};
