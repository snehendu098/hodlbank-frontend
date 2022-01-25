module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        // => @media (min-width: 640px) { ... }

        md: { max: "768px" },
        // => @media (min-width: 768px) { ... }
      },
    },
    fontFamily: {
      caps: ["Anton", "sans-serif"],
    },
  },
  plugins: [],
};
