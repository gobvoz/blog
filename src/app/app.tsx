import { FC } from 'react';

import { Navbar } from 'widgets/navbar';

import { classNames } from 'shared/libs/class-names';

import { useTheme } from './providers/theme-provider/lib/use-theme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

interface Props {}

const App: FC<Props> = props => {
  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export { App };
