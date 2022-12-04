import { WebGLRenderer } from "three";

export const useRenderer = (targetElement, sizes) => {
  const renderer = new WebGLRenderer({
    canvas: targetElement,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const resize = () => {
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  return { renderer, resize };
};
