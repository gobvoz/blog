import { FC } from 'react';

import { Sidebar } from 'widgets/sidebar';
import { Navbar } from 'widgets/navbar';

import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';

import { useTheme } from './providers/theme-provider/lib/use-theme';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { PageContent } from 'widgets/page-content';

interface Props {}

const App: FC<Props> = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Navbar />
      <PageContent>
        <Sidebar />
        <AppRouter />
      </PageContent>
    </div>

    // <section className="page-content">

    //         <AppRouter />
    //         <Button mod={ButtonMod.TRANSPARENT} onClick={toggleTheme}>
    //           test transparent button
    //         </Button>
    //       </section>
  );
};

export { App };
