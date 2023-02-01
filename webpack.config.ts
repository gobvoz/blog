import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/webpack/webpack-config';
import { BuildMode, BuildOptions, Env } from './config/webpack/types/config';

const buildConfig = (env: Env) => {
  const MODE = env.MODE || BuildMode.DEVELOPMENT;
  const PORT = env.PORT || 3000;

  const isDev = MODE === BuildMode.DEVELOPMENT;

  const buildOptions: BuildOptions = {
    mode: MODE,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev,
    port: PORT,
  };

  const config: webpack.Configuration = buildWebpackConfig(buildOptions);

  return config;
};

export default buildConfig;
