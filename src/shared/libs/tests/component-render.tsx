import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { CollapseProvider } from 'app/providers/collapse-provider';

import i18n from 'shared/config/i18n/i18n.for-tests';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema} asyncReducers={asyncReducers}>
        <CollapseProvider initialValue={false}>
          <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </CollapseProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
