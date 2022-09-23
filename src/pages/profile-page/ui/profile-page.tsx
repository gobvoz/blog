import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation('profile-page');

  return <h1>{t('page-profile')}</h1>;
};

export default ProfilePage;
