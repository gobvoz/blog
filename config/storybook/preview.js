import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/translation-decorator';
import { Theme } from '../../src/shared/constants/theme';

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
