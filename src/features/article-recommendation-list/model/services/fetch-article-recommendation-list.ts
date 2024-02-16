import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';
import { Article } from '../../../../entities/article/model/types/article';

export const fetchArticleRecommendationList = createAsyncThunk<
  Article[],
  string,
  ThunkApiConfig<string>
>('article/fetchArticleRecommendationList', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    // TODO: articleId is not used in the request.
    // TODO: request is hardcoded to get the same data
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _limit: 4,
      },
    });

    if (!response.data) throw new Error('no data from server');

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue(e.response?.data?.message || e.message || e);
  }
});
