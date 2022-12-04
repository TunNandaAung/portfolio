import { Clock } from "three";
import { addIcosahedron } from "./threed/addObject";
import { useRenderer } from "./threed/renderer";

const {
  icosahedron: icosahedron1,
  resize: resizeIcosahedron1,
  render: renderIcosahedron1,
} = addIcosahedron("#webgl-web-dev", 0x3b82f6);

const {
  icosahedron: icosahedron2,
  resize: resizeIcosahedron2,
  render: renderIcosahedron2,
} = addIcosahedron("#webgl-mobile-dev", 0xd946ef);

const resizeObjects = () => {
  resizeIcosahedron1();
  resizeIcosahedron2();
};

window.addEventListener("resize", () => resizeObjects());

const clock = new Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  renderIcosahedron1(elapsedTime);
  renderIcosahedron2(elapsedTime);

  window.requestAnimationFrame(tick);
};

tick();

window.addEventListener("mousemove", e => {
  icosahedron1.position.z = -e.clientY * 0.0007;
  icosahedron2.position.z = -e.clientY * 0.0007;
});
