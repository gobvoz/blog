import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from 'entities/article';

import { selectArticleListLoading } from 'pages/article-page/model/selectors/select-article-list-loading';
import { selectArticleListType } from 'pages/article-page/model/selectors/select-article-list-type';
import { fetchLastArticle } from 'pages/article-page/model/services/fetch-last-article';
import { articleListReducer, getArticleList } from 'pages/article-page/model/slice/article-list';

import { ITEMS_PER_PAGE_PRESENTATION } from 'shared/constants/ui';
import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation, useInitialEffect } from 'shared/libs/hooks';

import { PageWrapper } from 'widgets/page-wrapper';

const reducerList: ReducerList = {
  articleList: articleListReducer,
};

const MainPage: FC = memo(() => {
  const { t } = useAppTranslation('main-page');

  const dispatch = useAppDispatch();

  const articleList = useSelector(getArticleList.selectAll);
  const isLoading = useSelector(selectArticleListLoading);
  const listType = useSelector(selectArticleListType);

  useInitialEffect(() => {
    dispatch(fetchLastArticle({ last: ITEMS_PER_PAGE_PRESENTATION }));
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>{t('page-main', { ns: 'main-page' })}</h1>
      {/* eslint-disable i18next/no-literal-string */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur culpa modi
        laudantium sunt tempore temporibus et magni nihil saepe a adipisci sed aperiam itaque. Ut
        vitae laudantium soluta atque. Impedit quia dolore dignissimos temporibus culpa qui ipsam
        id, iusto deserunt ab repellat vel incidunt distinctio facere assumenda cum, laborum
        expedita. Quo sequi ipsa est nam veniam similique quis animi! Alias debitis sequi soluta ex
        quasi inventore autem saepe, ipsa doloribus architecto similique odit nobis sapiente. Ipsa
        sunt, corporis, porro sapiente, placeat dolor quaerat at delectus nesciunt tempora eius
        animi. Porro labore culpa unde animi corporis blanditiis in. Libero voluptatum minus
        necessitatibus. Delectus modi aperiam distinctio, ipsam facilis dignissimos ratione eaque
        necessitatibus, tenetur maiores, aliquid in repellendus repudiandae nam nostrum? Eos officia
        necessitatibus voluptatem itaque, fugiat excepturi quidem ducimus aliquid corrupti. Autem
        provident nisi deleniti, fugiat culpa delectus aut. Minus excepturi tempora, reprehenderit
        qui fugiat molestias esse voluptatem tenetur.
      </p>

      <h2>Last articles</h2>

      <DynamicModuleLoader reducerList={reducerList}>
        <ArticleList articleList={articleList} isLoading={isLoading} listType={listType} />
      </DynamicModuleLoader>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur culpa modi
        laudantium sunt tempore temporibus et magni nihil saepe a adipisci sed aperiam itaque. Ut
        vitae laudantium soluta atque. Impedit quia dolore dignissimos temporibus culpa qui ipsam
        id, iusto deserunt ab repellat vel incidunt distinctio facere assumenda cum, laborum
        expedita. Quo sequi ipsa est nam veniam similique quis animi! Alias debitis sequi soluta ex
        quasi inventore autem saepe, ipsa doloribus architecto similique odit nobis sapiente. Ipsa
        sunt, corporis, porro sapiente, placeat dolor quaerat at delectus nesciunt tempora eius
        animi. Porro labore culpa unde animi corporis blanditiis in. Libero voluptatum minus
        necessitatibus. Delectus modi aperiam distinctio, ipsam facilis dignissimos ratione eaque
        necessitatibus, tenetur maiores, aliquid in repellendus repudiandae nam nostrum? Eos officia
        necessitatibus voluptatem itaque, fugiat excepturi quidem ducimus aliquid corrupti. Autem
        provident nisi deleniti, fugiat culpa delectus aut. Minus excepturi tempora, reprehenderit
        qui fugiat molestias esse voluptatem tenetur.
      </p>
    </PageWrapper>
  );
});

export { MainPage };
