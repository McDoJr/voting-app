/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3EC6FF",
        secondary: "#C0C0C0"
      },
      fontFamily: {
        inter: "Inter"
      },
      backgroundImage: {
        "fsuu-bg": "url('/src/assets/fsuu_bg.png')",
        "fsuu-logo": "url('/src/assets/fsuu_logo.png')"
      }
    },
  },
  plugins: [],
}

