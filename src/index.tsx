import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/app';
import { CollapseProvider } from 'app/providers/collapse-provider';
import { ThemeProvider } from 'app/providers/theme-provider';
import { ErrorBoundary } from 'app/providers/error-boundary';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <CollapseProvider>
          <App />
        </CollapseProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
