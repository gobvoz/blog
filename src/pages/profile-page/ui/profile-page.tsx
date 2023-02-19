import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const ProfilePage: FC<Props> = props => {
  const { t } = useTranslation('profile-page');

  return <h1>{t('page-profile')}</h1>;
};

export { ProfilePage };
