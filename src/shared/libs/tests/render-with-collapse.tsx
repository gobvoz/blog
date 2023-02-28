import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { CollapseProvider } from 'app/providers/collapse-provider';

export const renderWithCollapse = (component: ReactNode) => {
  return render(<CollapseProvider initialValue={false}>{component}</CollapseProvider>);
};
