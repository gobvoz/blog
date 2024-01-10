import { FC, memo, useCallback } from 'react';

import { PageWrapper } from 'widgets/page-wrapper';

import { DynamicModuleLoader } from 'shared/libs/components/dynamic-module-loader';

import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { useParams } from 'react-router-dom';

interface Props {
  className?: string;
}

const ArticleEditPage: FC = memo((props: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useAppTranslation('article-edit-page');
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;

  const handleScrollToBottom = useCallback(() => {
    //dispatch();
  }, [dispatch]);

  return (
    <PageWrapper onScrollEnd={handleScrollToBottom}>
      {/* <DynamicModuleLoader reducerList={reducerList} leaveAfterUnmount></DynamicModuleLoader> */}
      {isEdit
        ? t('edit-mode-header', { ns: 'article-edit-page' })
        : t('create-mode-header', { ns: 'article-edit-page' })}
    </PageWrapper>
  );
});

export { ArticleEditPage };
