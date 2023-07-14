// import { createAsyncThunk } from '@reduxjs/toolkit';

// import { ThunkApiConfig } from 'app/providers/store-provider';

// import { newCommentFormActions } from '../slice/new-comment-form-slice';

// interface Props {
//   text: string;
// }

// export const addNewComment = createAsyncThunk<text, Props, ThunkApiConfig<string>>(
//   'login/loginByUsername',
//   async (authData, thunkApi) => {
//     const { extra, dispatch, rejectWithValue } = thunkApi;

//     try {
//       const response = await extra.api.post('/login', { username, password });

//       if (!response.data) throw new Error('no data from server');

//       dispatch(newCommentFormActions.setAuthData(response.data));

//       return response.data;
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.log(e);
//       return rejectWithValue(e.response?.data?.message || e.message || e);
//     }
//   },
// );
