/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
      maingreen: "#04C97E", 
      textblack:"#222222",
      textgray:"#AEAEAE",
      buttonBlack:"#302E2D"
  }
    },
  },
  plugins: [],
}

