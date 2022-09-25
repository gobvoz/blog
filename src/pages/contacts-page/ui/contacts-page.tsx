import { useTranslation } from 'react-i18next';

const ContactsPage = () => {
  const { t } = useTranslation('contacts-page');

  return <h1>{t('header', { ns: 'contacts-page' })}</h1>;
};

export default ContactsPage;
