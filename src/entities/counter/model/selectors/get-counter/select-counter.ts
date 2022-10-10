import { StateSchema } from 'app/providers/store-provider';

export const selectCounter = (state: StateSchema) => state.counter;
