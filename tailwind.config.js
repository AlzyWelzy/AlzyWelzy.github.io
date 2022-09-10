/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#acea91",

          secondary: "#f4c0f9",

          accent: "#efadaa",

          neutral: "#2C2730",

          "base-100": "#2F2E38",

          info: "#6981E2",

          success: "#21C48B",

          warning: "#EDA150",

          error: "#F76E5E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
