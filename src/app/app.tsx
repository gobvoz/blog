import { Navbar } from 'widgets/navbar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider/lib/use-theme';

import { classNames } from 'shared/lib/class-names';

import './styles/index.scss';
import { Button } from 'shared/ui/button';
import { ButtonMod } from 'shared/ui/button/ui/button';
import { Sidebar } from 'widgets/sidebar';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme], {})}>
      <Navbar />
      <section className="page-content">
        <Sidebar />
        <AppRouter />
        <Button mod={ButtonMod.TRANSPARENT} onClick={toggleTheme}>
          test transparent button
        </Button>
      </section>
    </div>
  );
};
