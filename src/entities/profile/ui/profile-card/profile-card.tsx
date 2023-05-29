import { FC } from 'react';

import { TextBlock } from 'shared/ui/text-block';
import { Input } from 'shared/ui/input';
import { Hr } from 'shared/ui/hr';
import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';

import { PageLoader } from 'widgets/page-loader';

import cls from './profile-card.module.scss';

import { Profile } from '../../model/types/profile-schema';
import { Avatar } from 'shared/ui/avatar';

interface Props {
  data?: Profile;
  className?: string;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onUsernameChange?: (value: string) => void;
  onAvatarChange?: (value: string) => void;
  onFirstNameChange?: (value: string) => void;
  onLastNameChange?: (value: string) => void;
  onAgeChange?: (value: string) => void;
  onCountryChange?: (value: string) => void;
  onCityChange?: (value: string) => void;
  onCurrencyChange?: (value: string) => void;
}

const getFullName = (first?: string, last?: string) => {
  if (first || last) return `${first} ${last}`;

  return '';
};

const ProfileCard: FC<Props> = props => {
  const {
    data,
    className,
    isLoading,
    error,
    readonly = true,
    onUsernameChange,
    onAvatarChange,
    onFirstNameChange,
    onLastNameChange,
    onAgeChange,
    onCountryChange,
    onCityChange,
    onCurrencyChange,
  } = props;

  const { t } = useAppTranslation('profile-card');

  if (isLoading) return <PageLoader />;

  if (error)
    return (
      <section className={classNames(cls.profileCard, className)}>
        <TextBlock header={t('header-error', { ns: 'profile-card' })} errorMessage medium>
          {error}
        </TextBlock>
      </section>
    );

  if (!data) return null;

  return (
    <section className={classNames(cls.profileCard, className)}>
      <div className={cls.header}>
        <TextBlock
          header={getFullName(data?.first, data?.last) || t('header', { ns: 'profile-card' })}
        />
      </div>
      <div className={cls.content}>
        {data?.avatar && <Avatar src={data.avatar} large />}
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('username', { ns: 'profile-card' })}</span>
          <Input
            value={data?.username}
            placeholder={t('your-user-name', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onUsernameChange}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('avatar', { ns: 'profile-card' })}</span>
          <Input
            value={data?.avatar}
            placeholder={t('your-avatar-link', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onAvatarChange}
          />
        </label>
        <Hr />
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('first-name', { ns: 'profile-card' })}</span>
          <Input
            value={data?.first}
            placeholder={t('your-first-name', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onFirstNameChange}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('last-name', { ns: 'profile-card' })}</span>
          <Input
            value={data?.last}
            placeholder={t('your-last-name', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onLastNameChange}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('age', { ns: 'profile-card' })}</span>
          <Input
            value={data?.age}
            placeholder={t('your-age', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onAgeChange}
          />
        </label>
        <Hr />
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('country', { ns: 'profile-card' })}</span>
          <Input
            value={data?.country}
            placeholder={t('your-country', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onCountryChange}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('city', { ns: 'profile-card' })}</span>
          <Input
            value={data?.city}
            placeholder={t('your-city', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onCityChange}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('currency', { ns: 'profile-card' })}</span>
          <Input
            value={data?.currency}
            placeholder={t('your-preferred-currency', { ns: 'profile-card' })}
            readOnly={readonly}
            onChange={onCurrencyChange}
          />
        </label>
      </div>
    </section>
  );
};

export { ProfileCard };
