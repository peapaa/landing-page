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
        orange: "rgb(255, 87, 34)",
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
        "custom-blue": "0 8px 8px rgba(103, 89, 217, 0.5)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        shadowNew:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        shadowCardReview: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;",
      },
    },
  },
  plugins: [],
};
