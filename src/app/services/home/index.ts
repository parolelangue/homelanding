import api from '@/@core/utils/api';
import { catchError } from '@/@core/utils/helpers';
import axios from 'axios';

const basePath = '/pub' as const;

export const homeService = {
  getHeadCategories: <T>() =>
    catchError<T>((async () => await api.get(`${basePath}/category/articles`))()),
  getHeadCategoriesForSiteMaps: <T>() =>
    catchError<T>((async () => await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_IN_SERVER}/${basePath}/category/articles`))()),
  getBanners: <T>() => catchError<T>((async () => await api.get(`${basePath}/bnnr/home-page`))()),
  getMainContent: <T>() => catchError<T>((async () => await api.get(`${basePath}/main-content`))()),
  getIndexs: <T>() => catchError<T>((async () => await api.get(`${basePath}/index`))()),
};
