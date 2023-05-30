import { FC } from 'react';

import { Country, CountrySelect } from 'entities/country';
import { Currency, CurrencySelect } from 'entities/currency';

import { PageLoader } from 'widgets/page-loader';

import { TextBlock } from 'shared/ui/text-block';
import { Input } from 'shared/ui/input';
import { Hr } from 'shared/ui/hr';
import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';
import { Avatar } from 'shared/ui/avatar';

import cls from './profile-card.module.scss';

import { Profile } from '../../model/types/profile-schema';

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
  onCountryChange?: (value: Country) => void;
  onCityChange?: (value: string) => void;
  onCurrencyChange?: (value: Currency) => void;
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
        <Avatar src={data?.avatar} large />
        <Input
          label={t('username', { ns: 'profile-card' })}
          value={data?.username}
          placeholder={t('your-user-name', { ns: 'profile-card' })}
          readOnly={readonly}
          onChange={onUsernameChange}
        />
        <Input
          label={t('avatar', { ns: 'profile-card' })}
          value={data?.avatar}
          placeholder={t('your-avatar-link', { ns: 'profile-card' })}
          readOnly={readonly}
          onChange={onAvatarChange}
        />
        <Hr />
        <Input
          label={t('first-name', { ns: 'profile-card' })}
          value={data?.first}
          placeholder={t('your-first-name', { ns: 'profile-card' })}
          readOnly={readonly}
          onChange={onFirstNameChange}
        />
        <Input
          label={t('last-name', { ns: 'profile-card' })}
          value={data?.last}
          placeholder={t('your-last-name', { ns: 'profile-card' })}
          readOnly={readonly}
          onChange={onLastNameChange}
        />
        <Input
          label={t('age', { ns: 'profile-card' })}
          value={data?.age}
          placeholder={t('your-age', { ns: 'profile-card' })}
          readOnly={readonly}
          onChange={onAgeChange}
        />
        <Hr />
        <CountrySelect value={data?.country} readOnly={readonly} onChange={onCountryChange} />
        <Input
          label={t('city', { ns: 'profile-card' })}
          value={data?.city}
          placeholder={t('your-city', { ns: 'profile-card' })}
          readOnly={readonly}
          onChange={onCityChange}
        />
        <CurrencySelect value={data?.currency} readOnly={readonly} onChange={onCurrencyChange} />
      </div>
    </section>
  );
};

export { ProfileCard };
