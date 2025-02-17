/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#2a68ff",
        greyIsh: "#f1f4f8",
        textColor: "#000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora"],
      },
    },
  },

  plugins: [],
};
