module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "pure-white": "#FFFFFF",
        "pure-red": "#FC4747",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
        "dark-blue": "#10141E",
        background: "#10141E",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};