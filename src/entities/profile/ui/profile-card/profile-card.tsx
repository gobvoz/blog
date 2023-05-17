import { FC } from 'react';
import { useSelector } from 'react-redux';

import { PageLoader } from 'widgets/page-loader';

import { TextBlock } from 'shared/ui/text-block';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';

import cls from './profile-card.module.scss';

import { selectProfileData } from '../../model/selectors/select-profile-data';
import { selectProfileLoading } from '../../model/selectors/select-profile-loading';
import { selectProfileReadonly } from '../../model/selectors/select-profile-readonly';

interface Props {
  className?: string;
}

const ProfileCard: FC<Props> = props => {
  const { className } = props;

  const { t } = useAppTranslation('profile-card');

  const data = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileLoading);
  const readOnly = useSelector(selectProfileReadonly);

  if (isLoading) return <PageLoader />;

  return (
    <section className={classNames(cls.profileCard, className)}>
      <div className={cls.header}>
        <TextBlock header={t('header', { ns: 'profile-card' })} />
      </div>
      <div className={cls.content}>
        <Input
          value={data?.first}
          placeholder={t('your-first-name', { ns: 'profile-card' })}
          readOnly={readOnly}
        />
        <Input
          value={data?.last}
          placeholder={t('your-last-name', { ns: 'profile-card' })}
          readOnly={readOnly}
        />
      </div>
      <Button>{t('edit', { ns: 'profile-card' })}</Button>
    </section>
  );
};

export { ProfileCard };
