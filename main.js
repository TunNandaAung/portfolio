import Alpine from "alpinejs";
import "./style.css";
import intersect from "@alpinejs/intersect";
import LocomotiveScroll from "locomotive-scroll";

window.Alpine = Alpine;

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1.5,
});

const updateTheme = () => {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
};

Alpine.data("themeSwitcher", () => ({
  currentTheme: localStorage.getItem("theme") ?? "dark",
  updateTheme,

  get isDarkTheme() {
    return this.currentTheme == "dark";
  },

  switchTheme(theme) {
    localStorage.setItem("theme", theme);
    this.currentTheme = theme;
    this.updateTheme();
  },
}));

Alpine.plugin(intersect);
Alpine.start();

window.onload = () => {
  document.getElementById("title").classList.add("is-inview");
  updateTheme();
};
