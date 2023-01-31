import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/webpack/webpack-config';
import { BuildMode, BuildOptions } from './config/webpack/types/config';

const mode = BuildMode.DEVELOPMENT;

const isDev = mode === BuildMode.DEVELOPMENT;

const buildOptions: BuildOptions = {
  mode,
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  },
  isDev,
};

const config: webpack.Configuration = buildWebpackConfig(buildOptions);

export default config;
