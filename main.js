import Alpine from "alpinejs";
import "./style.css";
import intersect from "@alpinejs/intersect";

window.Alpine = Alpine;

Alpine.plugin(intersect);
Alpine.start();
