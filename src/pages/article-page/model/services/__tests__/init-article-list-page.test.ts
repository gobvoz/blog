import { TestAsyncThunk } from 'shared/libs/tests/test-async-thunk';

import { initArticlePage } from '../init-article-page';
import { fetchArticleList } from '../fetch-article-list';

jest.mock('../fetch-article-list');

describe('initArticleListPage', () => {
  it('should to be a successful', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articleList: {
        _initialized: false,
      },
    });

    await thunk.dispatchAsync(new URLSearchParams());

    expect(thunk.dispatch).toHaveBeenCalledTimes(7);
    expect(fetchArticleList).toHaveBeenCalledWith({});
  });

  it("shouldn't to be called", async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articleList: {
        _initialized: true,
      },
    });

    await thunk.dispatchAsync(new URLSearchParams());

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
