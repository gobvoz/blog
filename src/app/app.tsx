import { FC, Suspense } from 'react';

import { Sidebar } from 'widgets/sidebar';
import { Navbar } from 'widgets/navbar';
import { PageWrapper } from 'widgets/page-wrapper';
import { PageContent } from 'widgets/page-content';

import { classNames } from 'shared/libs/class-names';

import { useTheme } from './providers/theme-provider/lib/use-theme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback="Loading translation...">
        <Navbar />
        <PageContent>
          <Sidebar />
          <PageWrapper>
            <AppRouter />
          </PageWrapper>
        </PageContent>
      </Suspense>
    </div>
  );
};

export { App };
