import { FC } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';
import { Button } from 'shared/ui/button';
import { Overlay } from 'shared/ui/overlay';

import cls from './modal.module.scss';
import { useModal } from 'shared/libs/hooks/use-modal';

interface Props {
  className?: string;
  children: React.ReactNode;
  keepOpen?: boolean;
  setOpen: (open: boolean) => void;
}

const Modal: FC<Props> = props => {
  const { className, children, keepOpen = true, setOpen } = props;

  const { isInAnimation, isOutAnimation, isNoAnimation, closeModal } = useModal({
    keepOpen,
    setOpen,
  });

  const handleOverlayClick = () => closeModal();
  const handleModalBodyClick = (evt: React.MouseEvent) => evt.stopPropagation();
  const handleCloseButtonClick = () => closeModal();

  return (
    <Overlay
      onClick={handleOverlayClick}
      inAnimation={isInAnimation}
      outAnimation={isOutAnimation}
      noAnimation={isNoAnimation}>
      <div
        className={classNames(cls.modal, className, {
          [cls.modalAnimationIn]: isInAnimation,
          [cls.modalAnimationOut]: isOutAnimation,
          [cls.modalNoAnimation]: isNoAnimation,
        })}
        onClick={handleModalBodyClick}>
        <div className={cls.closeButtonWrapper}>
          <Button
            className={cls.closeButton}
            type="button"
            primary
            onClick={handleCloseButtonClick}
          />
        </div>
        {children}
      </div>
    </Overlay>
  );
};

export { Modal };
