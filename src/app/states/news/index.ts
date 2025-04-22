import { TMeta, TQueryPagination } from '@/@core/types/general';
import { ICareer, INews } from '@/@core/types/news';

type NewsState = {
  eventNews: INews[] | [];
  inforClosureNews: INews[] | [];
  news: INews[] | [];
  newsParams: TQueryPagination | null;
  careers: ICareer[] | [];
  careerParams: TQueryPagination | null;
  jobDetail: ICareer | null;
  isLoading: boolean;
  newsDetail: INews | null;
  meta: TMeta | null;
  careerMeta: TMeta | null;
};

const initialNewsState: NewsState = {
  eventNews: [],
  inforClosureNews: [],
  news: [],
  careers: [],
  newsDetail: null,
  jobDetail: null,
  isLoading: false,
  meta: null,
  careerMeta: null,
  newsParams: null,
  careerParams: null,
};

export default initialNewsState;
