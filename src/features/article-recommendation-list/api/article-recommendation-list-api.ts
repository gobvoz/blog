import { rtkApi } from 'shared/api/rtk-api';
import { Article } from 'entities/article/model/types/article';

const articleRecommendationListApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetch: build.query<Article[], string>({
      query: limit => ({
        url: `/articles`,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

const useArticleRecommendationList = articleRecommendationListApi.useFetchQuery;

export { useArticleRecommendationList };
