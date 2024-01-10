import { FC, memo, useCallback } from 'react';

import { classNames } from 'shared/libs/class-names';
import { Button } from 'shared/ui/button';
import { useAppTranslation } from 'shared/libs/hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'shared/constants/app-routes';

import EditIcon from 'shared/assets/icons/edit.svg';

import cls from './article-header.module.scss';
import { useSelector } from 'react-redux';
import { selectCanEditArticle } from 'pages/article-detail-page';
import { selectArticleData } from '../../../model/selectors/select-article-data';

interface Props {
  className?: string;

  noEdit?: boolean;
}

const ArticleHeader: FC = memo((props: Props) => {
  const { className } = props;

  const { t } = useAppTranslation('article-detail-page');
  const navigate = useNavigate();

  const article = useSelector(selectArticleData);
  const canEditArticle = useSelector(selectCanEditArticle);

  const handleBack = useCallback(() => {
    navigate(AppRoutes.ARTICLES);
  }, [navigate]);

  const handleEditArticle = useCallback(() => {
    navigate(`${AppRoutes.ARTICLES}/${article?.id || 0}/edit`);
  }, [navigate, article]);

  return (
    <div className={classNames(cls.header, className)}>
      <Button onClick={handleBack} appLink noPadding>
        {t('back', { ns: 'article-detail-page' })}
      </Button>
      {canEditArticle && (
        <Button className={cls.editButton} onClick={handleEditArticle} appLink icon>
          <EditIcon className={cls.icon} />
          {t('edit', { ns: 'article-detail-page' })}
        </Button>
      )}
    </div>
  );
});

export { ArticleHeader };
