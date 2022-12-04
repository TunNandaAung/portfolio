import { AmbientLight, HemisphereLight, PointLight } from "three";

export const useLights = () => {
  const pointLight = new PointLight(0xffffff, 0.9);
  pointLight.position.set(10, 10, 10);

  const pointLight2 = new PointLight(0xffffff, 0.9);
  pointLight2.position.set(-10, -10, -10);

  const pointLight3 = new PointLight(0xffffff, 0.9);
  pointLight3.position.set(0, 0, 0);

  const ambientLight = new AmbientLight(0xffffff, 2);

  const hemisphereLight = new HemisphereLight(0xffffff, 2);
  hemisphereLight.position.set(-7, 25, 13);
  return {
    pointLight,
    pointLight2,
    pointLight3,
    ambientLight,
    hemisphereLight,
  };
};
