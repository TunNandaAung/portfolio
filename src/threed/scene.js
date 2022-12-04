import { Scene } from "three";
import { useLights } from "./lights";

export const useScene = () => {
  const scene = new Scene();
  const {
    pointLight,
    ambientLight,
    hemisphereLight,
    pointLight2,
    pointLight3,
  } = useLights();
  scene.add(pointLight);
  scene.add(pointLight2);
  scene.add(pointLight3);
  scene.add(ambientLight);
  scene.add(hemisphereLight);

  return { scene };
};
