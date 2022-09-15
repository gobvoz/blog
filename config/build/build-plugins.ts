import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => [
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
];
