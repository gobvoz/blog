import { StateSchema } from 'app/providers/store-provider';
import { selectProfileReadonly } from '../select-profile-readonly';

describe('selectProfileReadonly', () => {
  it('should return readonly status', () => {
    const readonlyStatus = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: readonlyStatus,
      },
    };
    expect(selectProfileReadonly(state as StateSchema)).toEqual(readonlyStatus);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
