import path from 'path';
import webpack from 'webpack';

import { webpackPlugins } from './webpack-plugins';
import { webpackLoaders } from './webpack-loaders';
import { webpackResolvers } from './webpack-resolvers';

import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:8].js',
      path: paths.output,
      clean: true,
    },
    plugins: webpackPlugins(paths),
    module: {
      rules: webpackLoaders(),
    },
    resolve: webpackResolvers(),
  };
};
