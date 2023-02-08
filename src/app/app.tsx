import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from './providers/theme-provider/lib/use-theme';

import { classNames } from 'shared/libs/class-names';

import './styles/index.scss';
import { AppRouter } from './providers/router';

interface Props {}

export const App: FC<Props> = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <nav>
        <Link to={'/main'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/contacts'}>Contacts</Link>
      </nav>
      <button onClick={toggleTheme}>theme</button>

      <AppRouter />
    </div>
  );
};
