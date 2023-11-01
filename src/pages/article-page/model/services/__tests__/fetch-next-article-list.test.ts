import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { fetchNextArticleList } from '../fetch-next-article-list';
import { fetchArticleList } from '../fetch-article-list';

jest.mock('../fetch-article-list');

describe('fetchNextArticleListPage', () => {
  it('should to be a successful', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticleList, {
      articleList: {
        page: 2,
        limit: 10,
        hasMore: true,
        isLoading: false,
      },
    });

    await thunk.dispatchAsync();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
  });
  it("shouldn't to be called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticleList, {
      articleList: {
        page: 2,
        limit: 10,
        hasMore: false,
        isLoading: false,
      },
    });

    await thunk.dispatchAsync();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
