/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"1rem",
        screens:{
          sm:"640px",
          lg:"1024px",
          xl:"1280px",
        }
      },
      colors:{
        mainColor:"#1ABC9C",
        navColor:"#2C3E50"
      }
    },
  },
  plugins: [],
};