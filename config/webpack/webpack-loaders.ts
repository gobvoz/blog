import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { webpackCssLoader } from './loaders/css-loader';
import { webpackSvgLoader } from './loaders/svg-loader';

export const webpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDevelopment } = options;

  const svgLoader = webpackSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: ['file-loader'],
  };

  const cssLoader = webpackCssLoader(isDevelopment);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'fr'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
        ],
      },
    },
  };

  return [babelLoader, fileLoader, svgLoader, typescriptLoader, cssLoader];
};
