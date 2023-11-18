/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "240px",
      sm: "500px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#FAFAFA",
        300: "#EBEBEB",
        400: "#E3E3E3",
        500: "#f8f8ff",
      },
      silver: {
        100: "#F4F7FD",
        200: "#635FC71A",
      },
      orange: {
        100: "#D14C32",
      },
      black: {
        100: "#000000",
        200: "#2B2C37",
      },
      purple: {
        100: "#6F2ED6",
        200: "#630330",
      },
      green: {
        100: "#1EC2A4",
        200: "#478778",
      },
      gray: {
        100: "#36454F",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
    fontSize: {
      xs: "13px",
      sm: "15px",
      md: "18px",
      mdii: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "48px",
      "3xl": "52px",
    },
    extend: {},
  },
  plugins: [],
};
