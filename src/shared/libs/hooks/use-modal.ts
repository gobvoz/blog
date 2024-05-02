import { useCallback, useEffect, useRef, useState } from 'react';
import { Key, MODAL_ANIMATION_DURATION } from 'shared/constants/ui';

interface Props {
  keepOpen?: boolean;
  setOpen: (open: boolean) => void;
}

export const useModal = (props: Props) => {
  const { keepOpen = true, setOpen } = props;

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

  return {
    isInAnimation,
    isOutAnimation,
    isNoAnimation,
    openModal,
    closeModal,
  };
};
