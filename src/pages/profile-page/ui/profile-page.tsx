import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { PageWrapper } from 'widgets/page-wrapper';

import { EditableProfileCard } from 'features/editable-profile-card';

import { useAppTranslation } from 'shared/libs/hooks';

const ProfilePage: FC = memo(() => {
  const { t } = useAppTranslation('profile-page');

  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <h1>{t('profile-info', { ns: 'profile-page' })}</h1>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export { ProfilePage };
