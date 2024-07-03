/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        5: "5px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        metal: "#ecebff",
        white: "#ffffff",
        btn: "rgb(103, 89, 217)",
        roses: "rgb(248, 94, 159)",
      },
      screens: {
        mobile: { min: "300px", max: "500px" },
        tablet: { min: "501px", max: "767px" },
        laptop: { min: "768px", max: "1024px" },
        desktop: "1280px",
      },
      fontFamily: {
        roboto: ['"Roboto"', "serif"],
      },
      boxShadow: {
        "custom-blue": "0 8px 8px rgba(103, 89, 217, 0.5)", // Tạo shadow màu xanh
      },
    },
  },
  plugins: [],
};
