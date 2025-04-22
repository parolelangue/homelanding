export type TOption = {
  label: string;
  value: string | number;
};

export type TThemeMode = 'dark' | 'light';

export enum EThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum ESortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
  None = '',
}

export enum ELanguage {
  KR = 'kr',
  EN = 'en',
  VI = 'vi',
}

export enum ETemplateDisplay {
  Contact = 'CONTACT',
  Content = 'CONTENT',
  ContentList = 'CONTENT_LIST',
  BondsList = 'BONDS_LIST',
  BondsListDetail = 'BONDS_LIST_DETAIL',
  CareerList = 'CAREER_LIST',
  CareerListDetail = 'CAREER_LIST_DETAIL',
  Grid = 'GRID',
  DetailPageArticle = 'DETAIL_PAGE_ARTICLE',
  DetailPageVideo = 'DETAIL_PAGE_VIDEO',
  Master = 'MASTER',
  External = 'EXTERNAL',
  Link = 'LINK',
  ContentBanner = 'CONTENT_BANNER',
}

export type TQueryPagination = {
  pageNo: number;
  pageSize: number;
  pageOffset?: number;
  sortBy: string;
  sortDirection: ESortDirection;
  searchKeyword?: string;
};

export type TMeta = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRows: number;
};

export type PayloadType<T> = T extends (...args: infer P) => Promise<[Error] | [undefined, T]>
  ? P
  : never;

export interface IObjLang {
  en: string;
  vi: string;
  ko: string;
}
export interface IFileInfo {
  fileId: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileType: string;
}

export enum EDictDataKey {
  HomePageContactInfo = 'HOME_PAGE_CONTACT_INFO',
  Location = 'LOCATION',
  Email = 'EMAIL',
  Hotline = 'HOTLINE',
}

export enum EHomePageContactInfoKey {
  Email = 'EMAIL',
  Phone01 = 'PHONE_01',
  Phone02 = 'PHONE_02',
  Phone03 = 'PHONE_03',
  Phone04 = 'PHONE_04',
  LinkedUrl = 'LINKED_URL',
  FBUrl = 'FB_URL',
  YoutubeUrl = 'YOUTUBE_URL',
  MapUrl = 'MAP_URL',
  Addr = 'ADDR',
  Memo = 'MEMO',
}

export interface IHomeInfo {
  id: string;
  createdBy: string;
  createdAt: string;
  createdName: string;
  updatedBy: string;
  updatedAt: string;
  updatedName: string;
  delIf: string;
  rowFlag: string;
  rowMsg: string;
  rowCode: string;
  no: string;
  applyFromFormat: string;
  applyToFormat: string;
  dictTypKey: string;
  dictCode: string;
  useYn: string;
  dictLabelLangSeq: number;
  dictDescLangSeq: number;
  dictValMainLagSeq: string;
  dictValSubLagSeq: string;
  dictLang: string;
  dispOrd: number;
  dictLabelInfo: IObjLang;
  dictDescInfo: IObjLang;
  dictValMainInfo: string;
  dictValSubInfo: string;
}
