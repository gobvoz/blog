import { FC } from 'react';

import { Modal } from 'widgets/modal';

import { classNames } from 'shared/libs/class-names/class-names';

import cls from './login-modal.module.scss';

import { LoginForm } from '../login-form/login-form';

interface Props {
  className?: string;
  setOpen: (open: boolean) => void;
}

const LoginModal: FC<Props> = props => {
  const { className, setOpen } = props;

  return (
    <Modal className={classNames(cls.loginModal, className)} setOpen={setOpen}>
      <LoginForm />
    </Modal>
  );
};

export { LoginModal };
