import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  target?: HTMLElement;
}

const Portal: FC<Props> = props => {
  const { children, target = document.body } = props;

  return createPortal(children, target);
};

export { Portal };
