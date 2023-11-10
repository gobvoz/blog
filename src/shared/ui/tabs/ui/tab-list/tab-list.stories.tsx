import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TabList } from './tab-list';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

export default {
  title: 'shared/tab-list',
  component: TabList,
} as ComponentMeta<typeof TabList>;

const Template: ComponentStory<typeof TabList> = args => <TabList {...args} />;

export const Light = Template.bind({});
Light.args = {
  tabList: [
    { value: 'tab1', content: 'Tab 1' },
    { value: 'tab2', content: 'Tab 2' },
    { value: 'tab3', content: 'Tab 3' },
    { value: 'tab4', content: 'Tab 4' },
    { value: 'tab5', content: 'Tab 5' },
  ],
  currentTab: 'tab1',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  tabList: [
    { value: 'tab1', content: 'Tab 1' },
    { value: 'tab2', content: 'Tab 2' },
    { value: 'tab3', content: 'Tab 3' },
    { value: 'tab4', content: 'Tab 4' },
    { value: 'tab5', content: 'Tab 5' },
  ],
  currentTab: 'tab2',
  onTabChange: action('onTabChange'),
};
