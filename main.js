import Alpine from "alpinejs";
import "./style.css";
import intersect from "@alpinejs/intersect";
import LocomotiveScroll from "locomotive-scroll";

window.onload = function () {
  document.getElementById("title").classList.add("is-inview");
};

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1.5,
});

window.Alpine = Alpine;

Alpine.plugin(intersect);
Alpine.start();
