import Alpine from "alpinejs";
import "./styles/style.css";
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
  } else {
    document.documentElement.classList.remove("dark");
  }
};

Alpine.data("portfolio", () => ({
  isMenuOpen: false,
  webDevInView: false,
  mobileDevInView: false,
  currentSection: "",
  init() {
    this.$refs.landing.addEventListener("mousemove", e => {
      this.$refs.headerBox.style.transform = `translate(${
        -e.clientX * 0.05
      }px,${-e.clientY * 0.05}px)`;
    });
  },

  goToSection(section) {
    if (section !== this.currentSection) {
      this.currentSection = section;
      window.history.replaceState(null, null, `#${section}`);
      scroll.scrollTo(`#${section}`);
    }
    this.isMenuOpen = false;
  },
}));

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
};

console.log("Hey there, stranger 👋");
