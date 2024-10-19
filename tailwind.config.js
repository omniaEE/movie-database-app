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
          50: "#F3F4F6", // Lightest grayish
          100: "#E1E3E8", // Very light
          200: "#C6C8D0", // Light neutral
          300: "#A6A9B5", // Soft, muted gray-blue
          400: "#868B99", // Mid-tone secondary (Main button color)
          500: "#6C7080", // Slightly darker
          600: "#525564", // Darker, neutral tone
          700: "#3B3D4D", // Strong contrast for darker backgrounds
          800: "#292A3B", // Darker gray-blue
          900: "#1A1B28", // Almost black
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
        "yelo-text": "#FFB941",
      },
      dropShadow: {
        businessman: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        maxWidth: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
