import { fetchArticleData } from '../../services/fetch-article-data';
import { ArticleSchema } from '../../types/article-schema';
import { Article, ArticleBlockType } from '../../types/article';
import { articleReducer } from '../article-slice';

describe('articleSlice test', () => {
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

  // extraReducers
  test('should set isLoading to true (pending)', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: false,
      error: 'old error',
    };
    expect(articleReducer(state as ArticleSchema, fetchArticleData.pending)).toEqual({
      isLoading: true,
      error: undefined,
    });
  });
  test('should set isLoading to false (fulfilled)', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: true,
      error: undefined,
    };

    expect(
      articleReducer(
        state as ArticleSchema,
        fetchArticleData.fulfilled(returnedData as Article, '1', ''),
      ),
    ).toEqual({
      isLoading: false,
      data: returnedData,
      error: undefined,
    });
  });
  test('should set error (reject)', () => {
    const state: DeepPartial<ArticleSchema> = { isLoading: true, error: 'old error' };

    expect(articleReducer(state as ArticleSchema, fetchArticleData.rejected)).toEqual({
      isLoading: false,
      error: undefined,
    });
  });
});
