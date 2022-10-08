import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/class-names/class-names';
import { Key, MODAL_ANIMATION_DURATION } from 'shared/constants/ui';
import { Button, ButtonMod } from 'shared/ui/button';

import cls from './modal.module.scss';

interface IModalProps {
  className?: string;
  children: React.ReactNode;
  keepOpen?: boolean;
  onClose: () => void;
}

const Modal: FC<IModalProps> = props => {
  const { className, children, keepOpen = true, onClose } = props;

  const [isInAnimation, setInAnimation] = useState(false);
  const [isOutAnimation, setOutAnimation] = useState(false);
  const [isNoAnimation, setNoAnimation] = useState(false);

  const animationInRef = useRef<ReturnType<typeof setTimeout>>();
  const animationOutRef = useRef<ReturnType<typeof setTimeout>>();

  const openHandler = () => {
    document.body.style.overflowY = 'hidden';

    setInAnimation(true);

    animationInRef.current = setTimeout(() => {
      setNoAnimation(true);
      setInAnimation(false);
    }, MODAL_ANIMATION_DURATION);
  };

  const closeHandler = useCallback(() => {
    document.body.style.overflowY = 'auto';

    setOutAnimation(true);
    setNoAnimation(false);

    animationOutRef.current = setTimeout(() => {
      setOutAnimation(false);
      onClose();
    }, MODAL_ANIMATION_DURATION);
  }, [onClose]);

  const onOverlayClick = () => closeHandler();
  const onModalClick = (evt: React.MouseEvent) => evt.stopPropagation();
  const onCloseClick = () => closeHandler();

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === Key.ESCAPE) {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    openHandler();

    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(animationInRef.current);
      clearTimeout(animationOutRef.current);

      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (!keepOpen) {
      closeHandler();
    }
  }, [keepOpen, closeHandler]);

  return (
    <>
      {/* eslint-disable-next-line
      jsx-a11y/no-static-element-interactions,
      jsx-a11y/click-events-have-key-events */}
      <div
        className={classNames([cls.overlay, cls.center], {
          [cls.overlayAnimationIn]: isInAnimation,
          [cls.overlayAnimationOut]: isOutAnimation,
          [cls.overlayNoAnimation]: isNoAnimation,
        })}
        onClick={onOverlayClick}>
        {/* eslint-disable-next-line
      jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions */}
        <div
          className={classNames([cls.modal, className], {
            [cls.modalAnimationIn]: isInAnimation,
            [cls.modalAnimationOut]: isOutAnimation,
            [cls.modalNoAnimation]: isNoAnimation,
          })}
          onClick={onModalClick}>
          <div className={cls.closeButtonWrapper}>
            <Button
              className={classNames([cls.closeButton])}
              type="button"
              mod={ButtonMod.PRIMARY}
              onClick={onCloseClick}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export { Modal };
