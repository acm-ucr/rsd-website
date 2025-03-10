/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rsd: {
          "dark-blue": "#03214F",
          "mid-blue": "#6694C9",
          "light-blue": "#CBE8EE",
          "title-blue": "#0040A5",
          yellow: "#FCCC71",
          gold: "#FFB71E",
        },
      },
      fontFamily: {
        "rsd-main": "var(--dm-serif-display-font)",
        "rsd-alt": "var(--noticia-text-font)",
      },
    },
  },
  plugins: [],
};
