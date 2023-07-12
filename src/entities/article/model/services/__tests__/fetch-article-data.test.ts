import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { fetchArticleData } from '../fetch-article-data';
import { Article, ArticleBlockType } from '../../types/article';

jest.mock('axios');

describe('fetchArticleData', () => {
  it('should to be success', async () => {
    const returnedData: Article = {
      id: '42',
      profile: {
        id: '42',
        username: 'Name',
        avatar: 'https://www.example.com/images/googlelogo.png',
      },
      title: 'Title',
      subtitle: 'Subtitle',
      image: 'https://www.example.com/images/googlelogo.png',
      createdAt: '22-02-2022',
      link: 'https://www.example.com/article/42',
      views: 42,
      topics: ['IT', 'news'],
      body: [
        {
          id: '1',
          type: ArticleBlockType.HEADER,
          content: ['Header'],
        },
        {
          id: 'string',
          type: ArticleBlockType.PARAGRAPH,
          content: ['Paragraph'],
        },
      ],
    };

    const thunk = new TestAsyncThunk(fetchArticleData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: returnedData }));
    const result = await thunk.dispatchAsync('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(returnedData);
  });
  it('should to be rejected', async () => {
    const returnedData = { e: 'error' };

    const thunk = new TestAsyncThunk(fetchArticleData);
    thunk.api.get.mockReturnValue(Promise.reject(returnedData));
    const result = await thunk.dispatchAsync('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual(returnedData);
  });
});
