import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';

export const selectRestoreScroll = (state: StateSchema) => state.restoreScroll.scroll;

export const selectRestoreScrollByPath = createSelector(
  selectRestoreScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
