import { FC, Suspense } from 'react';

import { Sidebar } from 'widgets/sidebar';
import { Navbar } from 'widgets/navbar';
import { PageWrapper } from 'widgets/page-wrapper';
import { PageContent } from 'widgets/page-content';
import { PageLoader } from 'widgets/page-loader';

import { classNames } from 'shared/libs/class-names';

import { ThrowErrorButton } from './providers/error-boundary';
import { useTheme } from './providers/theme-provider/lib/use-theme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <PageContent>
          <Sidebar />
          <PageWrapper>
            <AppRouter />
          </PageWrapper>
        </PageContent>
        <ThrowErrorButton />
      </Suspense>
    </div>
  );
};

export { App };
