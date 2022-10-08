import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  target?: HTMLElement;
}

const Portal: FC<IPortalProps> = props => {
  const { children, target = document.body } = props;

  return createPortal(children, target);
};

export { Portal };
