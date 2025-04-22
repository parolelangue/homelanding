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

export const DEFAULT_THUMB = 'http://smarteevina.ddns.net:9083/img/asam_thumb.jpg';

export const ASAM_TRADING_URL = 'https://trading.asamvn.com.vn';

export const ASAM_TRADING_LOGIN_URL = 'https://trading.asamvn.com.vn/login';

export const ASAM_INSTALL_LINKS = {
  AppStore: 'https://apps.apple.com/kr/app/asam-mobile/id1614361673?l=en-GB',
  GooglePlay: 'https://play.google.com/store/apps/details?id=vn.asam.mts&hl=vi&pli=1',
};
