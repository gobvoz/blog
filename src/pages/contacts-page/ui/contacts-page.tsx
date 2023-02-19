import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const ContactsPage: FC<Props> = props => {
  const { t } = useTranslation('contacts-page');

  return <h1>{t('page-contacts')}</h1>;
};

export { ContactsPage };
