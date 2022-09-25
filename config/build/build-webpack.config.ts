import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildPlugins } from './build-plugins.config';
import { buildLoaders } from './build-loaders.config';
import { buildResolvers } from './build-resolve.config';
import { buildDevServer } from './build-dev-server.config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

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
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
