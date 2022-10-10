import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store-provider';

import { selectCounter } from 'entities/counter';

describe('select-counter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(selectCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
