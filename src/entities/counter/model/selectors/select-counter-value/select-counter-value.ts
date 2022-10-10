import { createSelector } from '@reduxjs/toolkit';

import { selectCounter } from '../select-counter/select-counter';

export const selectCounterValue = createSelector(selectCounter, counter => counter.value);
