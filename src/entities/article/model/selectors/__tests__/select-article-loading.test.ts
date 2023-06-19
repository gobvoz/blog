import { StateSchema } from 'app/providers/store-provider';
import { selectArticleLoading } from '../select-article-loading';

describe('selectLoading', () => {
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectArticleLoading(state as StateSchema)).toEqual(undefined);
  });

  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };

    expect(selectArticleLoading(state as StateSchema)).toEqual(true);
  });
});
