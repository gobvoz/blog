import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/app';
import { ThemeProvider } from 'app/providers/theme-provider';

import 'shared/config/i18n/i18n';
import { CollapseProvider } from 'app/providers/collapse-provider';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <CollapseProvider>
        <App />
      </CollapseProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
