import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ContactsPage: FC = memo(() => {
  const { t } = useTranslation('contacts-page');

  return <h1>{t('page-contacts', { ns: 'contacts-page' })}</h1>;
});

export { ContactsPage };
