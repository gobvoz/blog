import { FC, memo } from 'react';

import { useAppTranslation } from 'shared/libs/hooks';

const AdminPanelPage: FC = memo(() => {
  const { t } = useAppTranslation('admin-panel-page');

  return <h1>{t('page-admin-panel', { ns: 'admin-panel-page' })}</h1>;
});

export { AdminPanelPage };
