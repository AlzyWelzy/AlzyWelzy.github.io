/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#293a89",

          secondary: "#032168",

          accent: "#b4b1ed",

          neutral: "#1E1C26",

          "base-100": "#323943",

          info: "#A2B1E2",

          success: "#1AAD92",

          warning: "#F7B022",

          error: "#F73B3E",
        },
      },
    ],
  },
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
