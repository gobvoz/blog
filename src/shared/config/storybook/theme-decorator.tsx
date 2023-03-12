import { Story } from '@storybook/react';

import { Theme } from 'shared/constants/theme';
import { classNames } from 'shared/libs/class-names';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={classNames('app', theme)}>
      <StoryComponent />
    </div>
  );
};
