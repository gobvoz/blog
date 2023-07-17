import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from 'app/providers/store-provider';

import { Comment } from 'entities/comment';
// TODO: add to public api
import { selectUserAuthData } from 'entities/user/model/selectors/select-user-auth-data';
// TODO: add to public api
import { newCommentFormActions } from 'features/new-comment-form/model/slice/new-comment-form-slice';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  { id: string; text: string },
  ThunkApiConfig<string>
>('articleDetails/addCommentForArticle', async ({ id, text }, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const profileId = selectUserAuthData(getState())?.id;

  if (!profileId || !text || !id) {
    return rejectWithValue('no data');
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: id,
      profileId,
      body: text,
      createdAt: Intl.DateTimeFormat('fr-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date()),
    });

    if (!response.data) throw new Error('no data from server');

    dispatch(newCommentFormActions.setText(''));

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue(e.response?.data?.message || e.message || e);
  }
});
