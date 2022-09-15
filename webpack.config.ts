import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildMode, BuildPath } from './config/build/types/config';

const mode = BuildMode.DEVELOPMENT;

const paths: BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const isDev = mode === BuildMode.DEVELOPMENT;

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
