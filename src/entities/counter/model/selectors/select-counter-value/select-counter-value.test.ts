import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { selectCounterValue } from 'entities/counter';

describe('select-counter-value', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(selectCounterValue(state as StateSchema)).toEqual(10);
  });
});
