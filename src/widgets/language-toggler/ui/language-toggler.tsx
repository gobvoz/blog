import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';

import cls from './language-toggler.module.scss';

interface Props {
  className?: string;
}

const LanguageToggler: FC<Props> = props => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');

  return (
    <div>
      <Button
        className={classNames(cls.languageToggler, className)}
        onClick={toggleLanguage}
        transparent>
        {t('language')}
      </Button>
    </div>
  );
};

export { LanguageToggler };
