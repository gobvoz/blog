import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation('profile-page');

  return <h1>{t('header', { ns: 'profile-page' })}</h1>;
};

export default ProfilePage;
