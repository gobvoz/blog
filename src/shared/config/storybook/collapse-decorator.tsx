import { Story } from '@storybook/react';

import { CollapseProvider } from 'app/providers/collapse-provider';

export const CollapseDecorator = (StoryComponent: Story) => {
  return (
    <CollapseProvider>
      <StoryComponent />
    </CollapseProvider>
  );
};
