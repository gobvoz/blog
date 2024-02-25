interface BabelLoaderProps {
  isDevelopment: boolean;
  isTsx: boolean;
}

export const webpackBabelLoader = ({ isDevelopment, isTsx }: BabelLoaderProps) => {
  const babelLoader = {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'fr'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isDevelopment && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };

  return babelLoader;
};
