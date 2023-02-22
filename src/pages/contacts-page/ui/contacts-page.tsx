import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ContactsPage: FC = () => {
  const { t } = useTranslation('contacts-page');

  return <h1>{t('page-contacts')}</h1>;
};

export { ContactsPage };
