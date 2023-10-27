import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListTypeSwitcher } from './list-type-switcher';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { ListType } from '../types/list-type';

export default {
  title: 'features/list-type-switcher',
  component: ListTypeSwitcher,
} as ComponentMeta<typeof ListTypeSwitcher>;

const Template: ComponentStory<typeof ListTypeSwitcher> = args => <ListTypeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    articleList: {
      listType: ListType.GRID,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [
  StoreDecorator({
    articleList: {
      listType: ListType.GRID,
    },
  }),
];
