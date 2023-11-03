import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RestoreScrollSchema } from '../types/restore-scroll.schema';

const initialState: RestoreScrollSchema = {
  scroll: {},
};

const restoreScrollSlice = createSlice({
  name: 'restoreScroll',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: restoreScrollActions } = restoreScrollSlice;
export const { reducer: restoreScrollReducer } = restoreScrollSlice;
