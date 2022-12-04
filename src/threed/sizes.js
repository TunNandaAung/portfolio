export const useSizes = targetElement => {
  let width = targetElement.getBoundingClientRect().width;
  let height = targetElement.getBoundingClientRect().height;

  const resize = () => {
    width = targetElement.getBoundingClientRect().width;
    height = targetElement.getBoundingClientRect().height;
  };

  return {
    sizes: {
      width,
      height,
    },
    resize,
  };
};
