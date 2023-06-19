import { StateSchema } from 'app/providers/store-provider';
import { selectArticleError } from '../select-article-error';

describe('selectError', () => {
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectArticleError(state as StateSchema)).toEqual(undefined);
  });

  it('should return the error', () => {
    const error = 'error';
    const state: DeepPartial<StateSchema> = {
      article: {
        error,
      },
    };

    expect(selectArticleError(state as StateSchema)).toEqual(error);
  });
});
