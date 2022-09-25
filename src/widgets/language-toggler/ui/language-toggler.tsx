import { FC } from 'react';

import { Button, ButtonMod } from 'shared/ui/button';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names';

import cls from './language-toggler.module.scss';

interface ILanguageTogglerProps {}

const LanguageToggler: FC<ILanguageTogglerProps> = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');

  return (
    <div>
      <Button
        className={classNames([cls.languageToggler])}
        onClick={toggleLanguage}
        mod={ButtonMod.TRANSPARENT}>
        {t('language')}
      </Button>
    </div>
  );
};

export { LanguageToggler };
