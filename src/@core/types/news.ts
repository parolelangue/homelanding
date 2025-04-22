import { TQueryPagination } from './general';

export interface IArticleInfo {
  en: string;
  ko: string;
  vi: string;
}

export interface IMemoInfo {
  en: string;
  ko: string;
  vi: string;
}

export interface INews {
  articleId: string;
  articleType: string;
  articleInfo: IArticleInfo;
  certFileInfo: IThumbnail;
  articleCreatedAt: string;
  memoInfo: IMemoInfo;
  slug: string;
  url: string;
  type: EArticleType;
  articlesThumbnail: IThumbnail;
}

export interface IThumbnail {
  fileId: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileType: ENewType;
}

export enum ENewType {
  Thumbnail = 'THUMBNAIL',
  Video = 'VIDEO',
}

export type TNewFilterParams = {
  type: string;
  fromDate: string;
  toDate: string;
} & TQueryPagination;

export interface ICareer {
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
  postTitl: string;
  postDesc: string;
  postPrefQuals: string;
  postBenefit: string;
  positionTitl: string;
  yoeFromQty: string;
  yoeQty: string;
  salaMinAmt: number;
  salaMaxAmt: number;
  postDate: string;

  cateTitl: string;
  salaNegoMthdNm: SalaNegoMthdNm;
  positionGradeNm: string;
  status: string;
  statusName: string;
  jobLocation: string;
  workingTypeNm: WorkingTypeNm;
  requiredNumbers: number;
  viewCnt: string;
  appliedCnt: string;
  currencyCd: string;
  currencyNm: string;
  addrDetail: string;
  mapAdr: string;
}

export interface SalaNegoMthdNm {
  vi: string;
  en: string;
  ko: string;
}

export interface WorkingTypeNm {
  vi: string;
  en: string;
  ko: string;
}

export enum EArticleType {
  Videos = '03',
  News = '01',
  Certificate = '02',
}
export enum EArticleStatus {
  Published = '02',
  Draft = '01',
  Terminated = '03',
}
