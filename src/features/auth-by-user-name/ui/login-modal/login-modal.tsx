import { FC } from 'react';

import { Modal } from 'widgets/modal';

import { classNames } from 'shared/lib/class-names/class-names';
import cls from './login-modal.module.scss';

import { LoginForm } from '../login-form/login-form';

interface ILoginModalProps {
  className?: string;
  onClose: () => void;
}

const LoginModal: FC<ILoginModalProps> = props => {
  const { className, onClose } = props;

  return (
    <Modal className={classNames([cls.loginModal, className])} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};

export { LoginModal };
