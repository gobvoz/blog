import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/libs/class-names/class-names';
import { Key, MODAL_ANIMATION_DURATION } from 'shared/constants/ui';
import { Button } from 'shared/ui/button';
import { Overlay } from 'shared/ui/overlay';

import cls from './modal.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  keepOpen?: boolean;
  setOpen: (open: boolean) => void;
}

const Modal: FC<Props> = props => {
  const { className, children, keepOpen = true, setOpen } = props;

  const [isInAnimation, setInAnimation] = useState(false);
  const [isOutAnimation, setOutAnimation] = useState(false);
  const [isNoAnimation, setNoAnimation] = useState(false);

  const animationInRef = useRef<ReturnType<typeof setTimeout>>();
  const animationOutRef = useRef<ReturnType<typeof setTimeout>>();

  const openModal = useCallback(() => {
    document.body.style.overflowY = 'hidden';

    setInAnimation(true);

    animationInRef.current = setTimeout(() => {
      setNoAnimation(true);
      setInAnimation(false);
    }, MODAL_ANIMATION_DURATION);
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflowY = 'auto';

    setOutAnimation(true);
    setNoAnimation(false);

    animationOutRef.current = setTimeout(() => {
      setOutAnimation(false);
      setOpen(false);
    }, MODAL_ANIMATION_DURATION);
  }, [setOpen]);

  const handleOverlayClick = () => closeModal();
  const handleModalBodyClick = (evt: React.MouseEvent) => evt.stopPropagation();
  const handleCloseButtonClick = () => closeModal();
  const handleKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === Key.ESCAPE) {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    openModal();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(animationInRef.current);
      clearTimeout(animationOutRef.current);

      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (!keepOpen) {
      closeModal();
    }
  }, [keepOpen, closeModal]);

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
