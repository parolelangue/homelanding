import { IArticle } from '@/@core/types/category';
import { EDictDataKey, IHomeInfo } from '@/@core/types/general';

type CategoryState = {
  detailData: IArticle | null;
  homeInfo: IHomeInfo[] | [];
};

const initialCategoryState: CategoryState = {
  detailData: null,
  homeInfo: [],
};

export default initialCategoryState;
