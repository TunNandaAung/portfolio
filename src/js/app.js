import { createApp } from "vue";
import NavDrawer from "./components/NavigationDrawer.vue";
import ScrollLink from "./components/ScrollLink.vue";
import inViewport from "in-viewport";
import TransformContent from "./components/TransformContent";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AOS from "aos";

const el = document.getElementById("app");

const app = createApp({
  components: {
    NavDrawer,
    ScrollLink,
    TransformContent,
    ThemeSwitcher,
  },
  mounted() {
    AOS.init();
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    // this.loadSVG("img/landing-bg.svg");
    this.registerWorker();
  },

  methods: {
    loadSVG(img) {
      let url = `${img}?r=` + Math.random();
      document.querySelector("#landing-bg").setAttribute("src", url);
    },
    registerWorker() {
      if (navigator.serviceWorker) {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.log("ServiceWorker registration failed:", error);
          });
      }
    },
    handleScroll() {
      let indicator = document.querySelector("#indicator");
      let contactTitle = document.querySelector("#contact-title");

      !inViewport(document.querySelector("#home"))
        ? this.showIndicator(indicator)
        : indicator.classList.replace("is-floating", "is-hiding");

      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    showIndicator(indicator) {
      indicator.classList.contains("is-hiding")
        ? indicator.classList.replace("is-hiding", "is-floating")
        : indicator.classList.add("is-floating");
    },
  },
});

app.mount("#app");
