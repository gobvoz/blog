import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names/class-names';

import cls from './login-form.module.scss';
import { loginByUsername } from '../../model/services/login-by-user-name';
import { loginActions } from '../../model/slice/login-slice';
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
  const isLoading = useSelector(selectLoading);
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const error = useSelector(selectError);

  const { setUsername, setPassword } = loginActions;

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
      <label className={cls.label}>
        <span className={cls.fieldName}>{t('login')}</span>
        <Input id="username" value={username} onChange={handleUsernameChange} autoFocus />
      </label>
      <label className={cls.label}>
        <span className={cls.fieldName}>{t('password')}</span>
        <Input id="password" value={password} onChange={handlePasswordChange} />
      </label>
      {error && <p className={cls.errorMessage}>{error}</p>}
      <Button className={cls.button} type="submit" disabled={isLoading} loading={isLoading}>
        {t('menu-login')}
      </Button>
    </form>
  );
});

export { LoginForm };
