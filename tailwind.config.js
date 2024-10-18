/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E4E9F2",
          100: "#C5D0E6",
          200: "#9FB4D9",
          300: "#7A98CD",
          400: "#567AC0",
          500: "#335DB4",
          600: "#254894",
          700: "#1A3474",
          800: "#102154",
          900: "#081034",
        },
        secondary: {
          50: "#FFF0EB",
          100: "#FFD6C2",
          200: "#FFBD99",
          300: "#FFA36F",
          400: "#FF8946",
          500: "#FF6F1D",
          600: "#DB5A00",
          700: "#A84600",
          800: "#753100",
          900: "#421D00",
        },

        neutral: {
          50: "#F2F2F2",
          100: "#E3E3E3",
          200: "#C9C9C9",
          300: "#B0B0B0",
          400: "#969696",
          500: "#7D7D7D",
          600: "#636363",
          700: "#4A4A4A",
          800: "#303030",
          900: "#171717",
        },
        pure: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      backgroundColor: {
        "teal-Nav": "#F6FAFB",
        "green-button": "#20B486",
      },
      textColor: {
        "green-text": "#56BC80",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
