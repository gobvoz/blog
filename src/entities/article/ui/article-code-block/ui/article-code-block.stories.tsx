import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCodeBlock } from './article-code-block';
import { ArticleBlockCode } from '../../../model/types/article';
import { ArticleBlockType } from '../../../model/const/const';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/constants/theme';

export default {
  title: 'entities/article/blocks/article-code-block',
  component: ArticleCodeBlock,
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = args => <ArticleCodeBlock {...args} />;

const block: ArticleBlockCode = {
  id: '14',
  type: ArticleBlockType.CODE,
  content: [
    'class MyClass {',
    '    #privateField;',
    '    publicField;',
    '    constructor () {',
    '        this.#privateField = "I\'m a private field";',
    '        this.publicField = "I\'m a public field";',
    '    }',
    '}',
  ],
};

export const Light = Template.bind({});
Light.args = {
  block,
};

export const Dark = Template.bind({});
Dark.args = {
  block,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
