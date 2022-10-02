export const buildSvgLoader = () => {
  const svgLoader = {
    test: /\.svg$/,
    use: '@svgr/loader',
  };

  return svgLoader;
};
