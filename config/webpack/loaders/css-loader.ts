import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const webpackCssLoader = (isDevelopment: boolean) => {
  const sccLoader = {
    test: /\.s[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            exportLocalsConvention: 'camelCase',
            localIdentName: isDevelopment ? '[path]__[local]--[hash:base64:5]' : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return sccLoader;
};
