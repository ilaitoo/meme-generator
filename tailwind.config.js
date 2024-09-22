/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "Header-to": "#A626D3",
        "Header-from": "#672280",
        "input-border": "#D1D5DB",
      },
    },
  },
  plugins: [],
};
