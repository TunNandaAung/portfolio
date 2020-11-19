const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js", "./*.html"],
  theme: {
    extend: {
      colors: {
        default: "var(--text-default-color)",
        accent: "var(--text-accent-color)",
        "accent-light": "var(--text-accent-light-color)",
        muted: "var(--text-muted-color)",
        "muted-light": "var(--text-muted-light-color)",
        error: "var(--text-error-color)",
        hover: "var(--text-hover-color)",
        focus: "var(--text-focus-color)",
        skill: "var(--text-skill-color)",
        link: "var(--text-link-color)",
        wave: "var(--text-wave-color)",
        mail: "var(--text-mail-color)",
        menu: "var(--text-menu-color)",
        header: "var(--header-background-color)",
        headerAccent: "var(--skill-background-color)",
        teal: colors.teal,
      },
      backgroundColor: {
        page: "var(--page-background-color)",
        card: "var(--card-background-color)",
        button: "var(--button-background-color)",
        header: "var(--header-background-color)",
        skill: "var(--skill-background-color)",
        contact: "var(--contact-background-color)",
        webcard: "var(--web-card-background-color)",
        mobilecard: "var(--mobile-card-background-color)",
        othercard: "var(--other-card-background-color)",
        icon: "var(--icon-background-color)",
        line: "var(--contact-line-color)",
      },
      opacity: {
        card: "var(--card-opacity)",
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        270: "270deg",
      },
      spacing: {
        14: "3.5rem",
        30: "7.5rem",
        72: "18rem",
        80: "20rem",
        100: "25rem",
        128: "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        5: "5",
        6: "6",
      },
      borderRadius: {
        xl: "1.0rem",
        xxl: "6.0rem",
      },
      inset: {
        "-1": "-0.25rem",
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-8": "-2rem",
        "-16": "-4rem",
        0: "0",
        auto: "auto",
        2: "0.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        80: "20rem",
        96: "24rem",
        "1/4": "25%",
        "1/2": "50%",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "3/4": "75%",
        "4/5": "80%",
        "17/20": "85%",
        "9/10": "90%",
      },
      screens: {
        xxl: "1600px",
      },
    },
  },
  variants: {},
  plugins: [],
};
