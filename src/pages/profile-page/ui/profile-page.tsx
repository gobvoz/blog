import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage: FC = () => {
  const { t } = useTranslation('profile-page');

  return <h1>{t('page-profile', { ns: 'profile-page' })}</h1>;
};

export { ProfilePage };
