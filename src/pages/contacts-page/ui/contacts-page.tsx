import { FC, memo } from 'react';
import { useAppTranslation } from 'shared/libs/hooks';

const ContactsPage: FC = memo(() => {
  const { t } = useAppTranslation('contacts-page');

  return <h1>{t('page-contacts', { ns: 'contacts-page' })}</h1>;
});

export { ContactsPage };
