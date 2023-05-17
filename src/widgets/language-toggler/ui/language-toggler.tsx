import { FC, memo } from 'react';

import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';
import { useAppTranslation } from 'shared/libs/hooks';

import cls from './language-toggler.module.scss';

interface Props {
  className?: string;
}

const LanguageToggler: FC<Props> = memo((props: Props) => {
  const { className } = props;
  const { t, i18n } = useAppTranslation();

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
});

export { LanguageToggler };
