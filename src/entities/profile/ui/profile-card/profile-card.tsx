import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { PageLoader } from 'widgets/page-loader';

import { TextBlock } from 'shared/ui/text-block';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';

import cls from './profile-card.module.scss';

import { selectProfileData } from '../../model/selectors/select-profile-data';
import { selectProfileLoading } from '../../model/selectors/select-profile-loading';
import { selectProfileReadonly } from '../../model/selectors/select-profile-readonly';

interface Props {
  className?: string;
}

const ProfileCard: FC<Props> = props => {
  const { className } = props;

  const { t } = useTranslation('profile-card');

  const data = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileLoading);
  const readOnly = useSelector(selectProfileReadonly);

  if (isLoading) return <PageLoader />;

  return (
    <section className={classNames(cls.profileCard, className)}>
      <div className={cls.header}>
        <TextBlock header={t('header')} />
      </div>
      <div className={cls.content}>
        <Input value={data?.first} placeholder={t('your-first-name')} readOnly={readOnly} />
        <Input value={data?.last} placeholder={t('your-last-name')} readOnly={readOnly} />
      </div>
      <Button>{t('edit')}</Button>
    </section>
  );
};

export { ProfileCard };
