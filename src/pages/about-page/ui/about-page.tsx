import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

const AboutPage: FC<Props> = props => {
  const { t } = useTranslation('about-page');

  return <h1>{t('page-about')}</h1>;
};

export { AboutPage };
