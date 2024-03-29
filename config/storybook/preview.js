import { addDecorator } from '@storybook/react';

import { RouterDecorator } from 'shared/config/storybook/router-decorator';
import { TranslationDecorator } from 'shared/config/storybook/translation-decorator';
import { StyleDecorator } from 'shared/config/storybook/style-decorator';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { SuspenseDecorator } from 'shared/config/storybook/suspense-decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
