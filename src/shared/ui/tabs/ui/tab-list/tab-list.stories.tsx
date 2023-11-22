import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TabList } from './tab-list';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';
import { ArticleTag } from 'shared/constants/ui';

const tabList = [
  { value: ArticleTag.ALL, content: 'All' },
  { value: ArticleTag.JS, content: 'JS' },
  { value: ArticleTag.FOOD, content: 'FOOD' },
  { value: ArticleTag.RECIPE, content: 'Recipe' },
  { value: ArticleTag.COOKING, content: 'Cooking' },
];

export default {
  title: 'shared/tab-list',
  component: TabList,
} as ComponentMeta<typeof TabList>;

const Template: ComponentStory<typeof TabList> = args => <TabList {...args} />;

export const Light = Template.bind({});
Light.args = {
  tabList,
  currentTab: ArticleTag.ALL,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  tabList,
  currentTab: ArticleTag.ALL,
  onTabChange: action('onTabChange'),
};
