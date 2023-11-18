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
        200: "#E4EBFA",
        300: "#635FC71A",
        400: "#E9EFFA80",
      },
      orange: {
        100: "#EDA249",
        200: "#D14C32",
        300: "#CD5120",
        400: "#8D4004",
      },
      black: {
        100: "#000000",
        200: "#2B2C37",
        300: "#0F0F0F",
      },
      purple: {
        100: "#6F2ED6",
        200: "#630330",
      },
      red: {
        100: "#D83A34",
      },
      green: {
        100: "#1EC2A4",
        200: "#478778",
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
