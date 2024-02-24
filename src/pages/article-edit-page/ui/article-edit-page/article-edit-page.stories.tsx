import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleEditPage } from './article-edit-page';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { ArticleBlockType } from 'entities/article/model/types/article';
import { ArticleType } from 'entities/article';

const article: ArticleType = {
  id: '1',
  profile: {
    id: '1',
    first: 'John',
    last: 'Doe',
    avatar: 'https://i.pravatar.cc/300?img=13',
  },
  title: '7 New JavaScript Features in ECMAScript 2022',
  subtitle: '',
  image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KionUgns58P78XvfAFeeuw.jpeg',
  createdAt: '31.01.2023',
  link: 'https://enlear.academy/7-new-javascript-features-in-ecmascript-2022-64a330f6eae2',
  views: 0,
  topics: ['Ecmascript', 'JavaScript', 'Features', 'JS', 'WebDevelopment'],
  body: [
    {
      id: '1',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
      ],
    },
    {
      id: '3',
      type: ArticleBlockType.HINT,
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut nulla vero ullam recusandae incidunt? Blanditiis neque odit omnis pariatur doloribus eveniet hic corrupti odio natus nobis, nihil delectus temporibus!',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.SEPARATOR,
      content: [],
    },
    {
      id: '5',
      type: ArticleBlockType.HEADER,
      content: ['1. Lorem ipsum dolor sit.'],
    },
    {
      id: '6',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio amet minus expedita, nobis culpa hic dolores itaque earum dolorum pariatur cupiditate quam iure cumque quaerat illum cum. Tempora, expedita blanditiis.',
      ],
    },
    {
      id: '7',
      type: ArticleBlockType.SEPARATOR,
      content: [],
    },
    {
      id: '8',
      type: ArticleBlockType.HEADER,
      content: ['2. Lorem ipsum dolor sit.'],
    },
    {
      id: '9',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima quisquam tenetur optio, dolore nam enim maiores? Et esse neque adipisci aliquam quas rerum cumque mollitia dolor, consequuntur sequi cum?',
      ],
    },
    {
      id: '10',
      type: ArticleBlockType.CODE,
      content: ['myArray.at(2);'],
    },
    {
      id: '11',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum ratione officiis ipsam optio rem mollitia? Sed soluta ea non.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum ratione officiis ipsam optio rem mollitia? Sed soluta ea non.',
      ],
    },
    {
      id: '12',
      type: ArticleBlockType.CODE,
      content: ['myArray[2];'],
    },
    {
      id: '13',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum ratione officiis ipsam optio rem mollitia? Sed soluta ea non.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum ratione officiis ipsam optio rem mollitia? Sed soluta ea non.',
      ],
    },
    {
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
    },
    {
      id: '15',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eum quae voluptatem laboriosam. Natus incidunt architecto delectus voluptates voluptatibus libero voluptatem quod dolorum laborum perspiciatis. Animi neque quam modi quis repellendus. Sequi sapiente possimus eum culpa velit quod consectetur quasi cumque adipisci veritatis totam, iusto minus repudiandae excepturi facilis quo.',
      ],
    },
    {
      id: '16',
      type: ArticleBlockType.SEPARATOR,
      content: [],
    },
    {
      id: '17',
      type: ArticleBlockType.PARAGRAPH,
      content: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eum quae voluptatem laboriosam. Natus incidunt architecto delectus voluptates voluptatibus libero voluptatem quod dolorum laborum perspiciatis. Animi neque quam modi quis repellendus. Sequi sapiente possimus eum culpa velit quod consectetur quasi cumque adipisci veritatis totam, iusto minus repudiandae excepturi facilis quo.',
      ],
    },
  ],
};

export default {
  title: 'page/article-edit-page',
  component: ArticleEditPage,
  decorators: [StoreDecorator({ article: { data: article } })],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = args => <ArticleEditPage {...args} />;

export const Default = Template.bind({});
