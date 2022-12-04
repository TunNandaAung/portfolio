import {
  Color,
  IcosahedronGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

export const useIcosahedron = color => {
  const geometry = new IcosahedronGeometry(0.8);

  // Materials
  const material = new MeshStandardMaterial();
  material.metalness = 0.8;
  material.roughness = 0.65;
  material.color = new Color(color);

  // Mesh
  const icosahedron = new Mesh(geometry, material);

  const rotate = factor => {
    icosahedron.rotation.y = 0.3 * factor;
    icosahedron.rotation.x = 0.3 * factor;
  };

  const float = factor => {
    icosahedron.position.x = MathUtils.lerp(icosahedron.position.x, 0, 0.2);
    icosahedron.position.y = MathUtils.lerp(
      icosahedron.position.y,
      Math.sin(factor) / 6,
      0.2,
    );
  };

  return { icosahedron, float, rotate };
};
