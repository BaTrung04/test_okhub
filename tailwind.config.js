/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand"],
        Inter: ["Inter"],
      },
      colors: {
        primary: "#F9F9F9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.2rem",
          md: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "3rem",
        },
      },
      fontSize: {
        13: "1.1rem",
        14: "2.8rem",
        15: "3.9rem",
      },
      backgroundImage: {
        "hover-gradient":
          "linear-gradient(92deg, #328AE2 5.28%, #FF0D39 70.27%)",
        "text-gradient":
          "linear-gradient(92deg, #328AE2 13.28%, #FF0D39 91.27%)",
        "bg-gradient":
          "linear-gradient(180deg, rgba(55, 57, 129, 0.10) 0%, rgba(255, 225, 229, 0.00) 23.74%)",
        "bg-card-gradient":
          "linear-gradient(0deg, rgba(47, 46, 121, 0.11) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
