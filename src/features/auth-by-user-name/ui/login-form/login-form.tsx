import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { TextBlock } from 'shared/ui/text-block';

import i18n from 'shared/config/i18n/i18n';
import { TextBlockMod } from 'shared/ui/text-block/ui/text-block';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './login-form.module.scss';

import { loginByUsername } from '../../model/services/login-by-user-name/login-by-user-name';
import { loginActions } from '../../model/slice/login-slice';
import { selectLoading } from '../../model/selectors/select-loading/select-loading';
import { selectUsername } from '../../model/selectors/select-username/select-username';
import { selectPassword } from '../../model/selectors/select-password/select-password';
import { selectError } from '../../model/selectors/select-error/select-error';

interface ILoginFormProps {
  className?: string;
}

const LoginForm = memo((props: ILoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { setUsername, setPassword } = loginActions;
  const isLoading = useSelector(selectLoading);
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const error = useSelector(selectError);

  const usernameChangeHandler = useCallback(
    (value: string) => {
      dispatch(setUsername(value));
    },
    [dispatch, setUsername],
  );
  const passwordChangeHandler = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch, setPassword],
  );
  const submitHandler = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <form className={classNames([cls.loginForm, className])} onSubmit={submitHandler}>
      <TextBlock mod={TextBlockMod.FORM} header="Login form" />

      <label className={cls.label} htmlFor="username">
        <span className={cls.fieldName}>{t('login')}</span>
        <Input id="username" value={username} onChange={usernameChangeHandler} autoFocus />
      </label>
      <label className={cls.label} htmlFor="password">
        <span className={cls.fieldName}>{t('password')}</span>
        <Input id="password" value={password} onChange={passwordChangeHandler} />
      </label>
      {error && (
        <TextBlock mod={TextBlockMod.ERROR_MESSAGE}>{i18n.t('login-password-error')}</TextBlock>
      )}
      <Button className={cls.button} type="submit" disabled={isLoading} loading={isLoading}>
        {t('menu-login')}
      </Button>
    </form>
  );
});

export { LoginForm };
