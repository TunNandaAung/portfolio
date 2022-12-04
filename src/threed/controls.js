import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const useControls = (camera, targetElement) => {
  const controls = new OrbitControls(camera, targetElement);
  controls.enableDamping = true;
  controls.enableZoom = false;

  return controls;
};
