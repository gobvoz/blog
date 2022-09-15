import webpack from 'webpack';
import path from 'path';

import { BuildOptions } from './types/config';
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolve';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
