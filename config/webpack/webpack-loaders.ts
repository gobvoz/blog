import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export const webpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDevelopment } = options;

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr-webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: ['file-loader'],
  };

  const cssLoader = {
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

  const webpackLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  };

  return [fileLoader, svgLoader, webpackLoader, cssLoader];
};
