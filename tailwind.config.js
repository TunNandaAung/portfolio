const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": [
          "10rem",
          {
            lineHeight: "1.2",
          },
        ],
      },
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
        "circular-rotation": {
          "0%": {
            transform: "rotate(0deg) translate(-20px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)  translate(-20px) rotate(-360deg)",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        "floating-alt": "floating-alt 2.3s ease-in-out infinite",
        "floating-diagonal": "floating-diagonal 3s ease-in-out infinite",
        "heart-pulse": "heart-pulse 1s infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-y": "gradient-y 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
        "circular-rotation": "circular-rotation 5s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
