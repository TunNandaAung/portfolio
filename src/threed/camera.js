import { PerspectiveCamera } from "three";

export const useCamera = sizes => {
  const camera = new PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.1,
    100,
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2.5;

  const resize = () => {
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
  };

  return { camera, resize };
};
