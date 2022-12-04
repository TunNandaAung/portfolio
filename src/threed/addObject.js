import { useSizes } from "./sizes";
import { useCamera } from "./camera";
import { useScene } from "./scene";
import { useRenderer } from "./renderer";
import { useIcosahedron } from "./icosahedron";
import { useControls } from "./controls";
import { Clock } from "three";

export const addIcosahedron = (targetQuery, color) => {
  const targetElement = document.querySelector(targetQuery);

  const { scene } = useScene();
  const { icosahedron, rotate, float } = useIcosahedron(color);
  const { sizes, resize: updateSizes } = useSizes(targetElement);
  const { camera, resize: resizeCamera } = useCamera(sizes);
  const { renderer, resize: resizeRenderer } = useRenderer(
    targetElement,
    sizes,
    scene,
  );
  const controls = useControls(camera, targetElement);
  scene.add(icosahedron);

  const resize = () => {
    updateSizes();
    resizeCamera();
    resizeRenderer();
  };
  const render = elapsedTime => {
    // Update objects
    rotate(elapsedTime);
    float(elapsedTime / 1.5);

    // Update Orbital Controls
    controls.update();

    renderer.render(scene, camera);
  };

  return {
    icosahedron,
    resize,
    render,
    scene,
  };
};
