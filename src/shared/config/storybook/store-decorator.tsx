import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator = (StoryComponent: Story) => {
  return (
    <StoreProvider isDev>
      <StoryComponent />
    </StoreProvider>
  );
};
