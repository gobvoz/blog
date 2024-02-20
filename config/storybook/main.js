module.exports = {
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../../public'],
  previewBody: body => `
    <style>
      .app {
        padding: 5px;
      }
      .app.light:has(> .dark) {
        padding: 0;
      }
    </style>
    ${body}
  `,
};
