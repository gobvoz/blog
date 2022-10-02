import { Story } from '@storybook/react';
import { Theme } from 'shared/constants/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
