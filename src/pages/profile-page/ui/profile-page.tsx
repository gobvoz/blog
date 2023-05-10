import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ThrowErrorButton } from 'app/providers/error-boundary';

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation('profile-page');

  return (
    <>
      <h1>{t('page-profile', { ns: 'profile-page' })}</h1>
      <ThrowErrorButton />
    </>
  );
});

export { ProfilePage };
