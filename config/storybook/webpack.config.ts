import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/build-css-loader';
import { buildSvgLoader } from '../build/loaders/build-svg-loader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    entry: '',
    html: '',
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.modules.push('node_modules');
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader(true));

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
    }),
  );

  return config;
};
