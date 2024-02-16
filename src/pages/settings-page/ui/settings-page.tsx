import { FC, memo } from 'react';
import { useAppTranslation } from 'shared/libs/hooks';

const SettingsPage: FC = memo(() => {
  const { t } = useAppTranslation('settings-page');

  return <h1>{t('page-settings', { ns: 'settings-page' })}</h1>;
});

export { SettingsPage };
