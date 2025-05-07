import { ESortDirection, TQueryPagination } from '../types/general';

export const defaultPaginationParams: TQueryPagination = {
  pageNo: 1,
  pageSize: 12,
  sortBy: 'createdAt',
  sortDirection: ESortDirection.Desc,
};

export const CookieStorageKeys = {
  Advertisement: 'Adverts',
};

export const DEFAULT_THUMB = '';

export const INSTALL_LINKS = {
  AppStore: '',
  GooglePlay: '',
};

export const LINKS = {
  DEMO_SITE: 'https://docs-site-login-a7df168d97ac.herokuapp.com/',
  DOCS_SITE: 'https://tech.aprotech.kr',
};
