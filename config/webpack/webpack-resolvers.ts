import webpack from 'webpack';

export const webpackResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
};
