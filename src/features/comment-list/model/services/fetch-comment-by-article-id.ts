import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/store-provider';
import { Comment } from 'entities/comment';

export const fetchCommentListByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkApiConfig<string>
>('commentList/fetchCommentListByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) return rejectWithValue('articleId is required');

  try {
    const response = await extra.api.get<Comment[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
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
