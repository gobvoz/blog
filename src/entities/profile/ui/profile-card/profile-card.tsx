import { FC } from 'react';

import { TextBlock } from 'shared/ui/text-block';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { Hr } from 'shared/ui/hr';
import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';

import { PageLoader } from 'widgets/page-loader';

import cls from './profile-card.module.scss';

import { Profile } from '../../model/types/profile-schema';

interface Props {
  data?: Profile;
  className?: string;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}

const ProfileCard: FC<Props> = props => {
  const { data, className, isLoading, error, readonly = true } = props;

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

  return (
    <section className={classNames(cls.profileCard, className)}>
      <div className={cls.header}>
        <TextBlock header={t('header', { ns: 'profile-card' })} />
      </div>
      <div className={cls.content}>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('first-name', { ns: 'profile-card' })}</span>
          <Input
            value={data?.first}
            placeholder={t('your-first-name', { ns: 'profile-card' })}
            readOnly={readonly}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('last-name', { ns: 'profile-card' })}</span>
          <Input
            value={data?.last}
            placeholder={t('your-last-name', { ns: 'profile-card' })}
            readOnly={readonly}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('age', { ns: 'profile-card' })}</span>
          <Input
            value={String(data?.age)}
            placeholder={t('your-age', { ns: 'profile-card' })}
            readOnly={readonly}
          />
        </label>
        <Hr />
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('country', { ns: 'profile-card' })}</span>
          <Input
            value={data?.country}
            placeholder={t('your-country', { ns: 'profile-card' })}
            readOnly={readonly}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('city', { ns: 'profile-card' })}</span>
          <Input
            value={data?.city}
            placeholder={t('your-city', { ns: 'profile-card' })}
            readOnly={readonly}
          />
        </label>
        <label className={cls.label}>
          <span className={cls.fieldName}>{t('currency', { ns: 'profile-card' })}</span>
          <Input
            value={data?.currency}
            placeholder={t('your-preferred-currency', { ns: 'profile-card' })}
            readOnly={readonly}
          />
        </label>
      </div>
      <Button>{t('edit', { ns: 'profile-card' })}</Button>
    </section>
  );
};

export { ProfileCard };
