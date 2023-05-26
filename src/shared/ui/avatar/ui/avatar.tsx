import { memo } from 'react';

import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';
import EmptyAvatar from 'shared/assets/icons/profile.svg';

import cls from './avatar.module.scss';

interface Props {
  className?: string;
  src?: string;

  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const Avatar = memo((props: Props) => {
  const { className, src, small, medium, large, ...otherProps } = props;

  const { t } = useAppTranslation('profile-card');

  const mods = {
    [cls.small]: small,
    [cls.medium]: medium,
    [cls.large]: large,
  };

  if (!src)
    return (
      <div className={cls.wrapper}>
        <EmptyAvatar className={classNames(cls.avatar, className, mods)} {...otherProps} />
      </div>
    );

  return (
    <div className={cls.avatarWrapper}>
      <img
        className={classNames(cls.avatar, className, mods)}
        src={src}
        width="75"
        height="75"
        alt={t('avatar-alt', { ns: 'profile-card' })}
        {...otherProps}
      />
    </div>
  );
});

export { Avatar };
