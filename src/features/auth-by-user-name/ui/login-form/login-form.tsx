import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ReduxStoreWithManager } from 'app/providers/store-provider/config/state-schema';

import i18n from 'shared/config/i18n/i18n';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names/class-names';
import { TextBlock } from 'shared/ui/text-block';

import cls from './login-form.module.scss';
import { loginByUsername } from '../../model/services/login-by-user-name';
import { loginActions, loginReducer } from '../../model/slice/login-slice';
import { selectLoading } from '../../model/selectors/select-loading';
import { selectUsername } from '../../model/selectors/select-username';
import { selectPassword } from '../../model/selectors/select-password';
import { selectError } from '../../model/selectors/select-error';

interface Props {
  className?: string;
}

const LoginForm = memo((props: Props) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  const isLoading = useSelector(selectLoading);
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const error = useSelector(selectError);

  const { setUsername, setPassword } = loginActions;

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
  }, []);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(setUsername(value));
    },
    [dispatch, setUsername],
  );
  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch, setPassword],
  );
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <form className={classNames(cls.loginForm, className)} onSubmit={handleSubmit}>
      <TextBlock form header="Login form" />

      <label className={cls.label}>
        <span className={cls.fieldName}>{t('login')}</span>
        <Input
          id="username"
          value={username}
          onChange={handleUsernameChange}
          autoFocus
          disabled={isLoading}
        />
      </label>
      <label className={cls.label}>
        <span className={cls.fieldName}>{t('password')}</span>
        <Input
          id="password"
          value={password}
          onChange={handlePasswordChange}
          disabled={isLoading}
        />
      </label>
      {error && <TextBlock errorMessage>{i18n.t('login-password-error')}</TextBlock>}
      <Button className={cls.button} type="submit" disabled={isLoading} loading={isLoading}>
        {t('menu-login')}
      </Button>
    </form>
  );
});

export { LoginForm };
