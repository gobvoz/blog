import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names/class-names';

import cls from './login-form.module.scss';

interface Props {
  className?: string;
}

const LoginForm: FC<Props> = props => {
  const { className } = props;
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={classNames(cls.loginForm, className)}>
      <label className={cls.label}>
        <span className={cls.fieldName}>{t('login')}</span>
        <Input id="username" value={username} onChange={setUsername} autoFocus />
      </label>
      <label className={cls.label}>
        <span className={cls.fieldName}>{t('password')}</span>
        <Input id="password" value={password} onChange={setPassword} />
      </label>

      <Button className={cls.button}>{t('menu-login')}</Button>
    </form>
  );
};

export { LoginForm };
