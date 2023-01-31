import webpack from 'webpack';

export const webpackLoaders = (): webpack.RuleSetRule[] => {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: '/node_modules/',
    },
  ];
};
