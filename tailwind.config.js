module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "floating-diagonal": {
          "0%,100%": {
            transform: "translateY(-10px) translateX(10px)",
          },
          "50%": {
            transform: "translateY(5px) translateX(-5px)",
          },
        },
        floating: {
          "0%,100%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
        "floating-alt": {
          "0%,100%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
        "heart-pulse": {
          "10%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        "floating-alt": "floating-alt 2.3s ease-in-out infinite",
        "floating-diagonal": "floating-diagonal 3s ease-in-out infinite",
        "heart-pulse": "heart-pulse 1s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
