import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from 'app/providers/store-provider';

import i18n from 'shared/config/i18n/i18n.for-tests';
import { CollapseProvider } from 'app/providers/collapse-provider';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <CollapseProvider initialValue={false}>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </MemoryRouter>
      </CollapseProvider>
    </StoreProvider>,
  );
};
