import { addDecorator } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/router-decorator';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

import { StyleDecorator } from 'shared/config/storybook/style-decorator';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StoreDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
