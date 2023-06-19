import { StateSchema } from 'app/providers/store-provider';
import { selectArticleData } from '../select-article-data';

describe('selectData', () => {
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectArticleData(state as StateSchema)).toEqual(undefined);
  });

  it('should return data', () => {
    const data = {
      id: 'id',
      title: 'title',
      body: [],
    };

    const state: DeepPartial<StateSchema> = {
      article: {
        data,
      },
    };

    expect(selectArticleData(state as StateSchema)).toEqual(data);
  });
});
