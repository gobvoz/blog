import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../webpack/types/config';
import { webpackSvgLoader } from '../webpack/loaders/svg-loader';
import { webpackCssLoader } from '../webpack/loaders/css-loader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push(webpackSvgLoader());
  config.module.rules.push(webpackCssLoader(true));

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API_BASE_URL__: JSON.stringify(''),
    }),
  );

  return config;
};
