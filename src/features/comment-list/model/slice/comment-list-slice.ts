import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { Comment } from 'entities/comment';

import { ArticleCommentListSchema } from '../types/article-comment-list-schema';
import { fetchCommentListByArticleId } from '../services/fetch-comment-by-article-id';

const commentListAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
});

const getArticleCommentList = commentListAdapter.getSelectors<StateSchema>(
  state => state.commentList || commentListAdapter.getInitialState(),
);

const CommentListSlice = createSlice({
  name: 'commentList',
  initialState: commentListAdapter.getInitialState<ArticleCommentListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCommentListByArticleId.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentListByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentListAdapter.setAll(state, action.payload);
        state.error = undefined;
      })
      .addCase(fetchCommentListByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: commentListReducer } = CommentListSlice;
export { getArticleCommentList };
