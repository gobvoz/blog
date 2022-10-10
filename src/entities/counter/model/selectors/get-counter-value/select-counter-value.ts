import { createSelector } from '@reduxjs/toolkit';

import { selectCounter } from '../get-counter/select-counter';

export const selectCounterValue = createSelector(selectCounter, counter => counter.value);
