import { IStockCode } from './stockExchange';

export interface IHeadCategory {
  id: string;
  titleInfo: ITitleInfo;
  contentInfo: IContentInfo;
  bannerUrl: string;
  ancestor: string;
  dispOrd: number;
  ancestorPath: string;
  templateDisplay: string;
  externalLink: string;
  url: string;
  subs: IHeadCategory[];
  onlyFooterYn: string;
}

export interface ITitleInfo {
  en: string;
  ko: string;
  vi: string;
}

export interface IContentInfo {
  en: string;
  ko: string;
  vi: string;
}

export interface IBanner {
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
  btnUrl: string;
  bnnrTitlLangSeq: number;
  bnnrSubsTitlLangSeq: number;
  bnnrMemoLangSeq: number;
  btnLangSeq: number;
  fileId: string;
  bnnrSubsTitlInfo: IBnnrSubsTitlInfo;
  bnnrTitlInfo: IBnnrTitlInfo;
  bnnrMemoInfo: IBnnrMemoInfo;
  btnNameInfo: IBtnNameInfo;
  bnnrFileInfo: IBnnrFileInfo;
}

export interface IBnnrSubsTitlInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface IBnnrTitlInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface IBnnrMemoInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface IBtnNameInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface IBnnrFileInfo {
  fileId: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileType: string;
}

export interface IMainContent {
  cis: ICi[];
  promos: IPromo[];
  bnnr: IBnnr[];
  index: IStockCode[];
}

export interface ICi {
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
  dictLang: string;
  dispOrd: number;
  atrbVal01: string;
  dictDescInfo: DictDescInfo;
  dictLabelInfo: DictLabelInfo;
}

export interface DictDescInfo {
  vi: string;
  en: string;
  ko: string;
}

export interface DictLabelInfo {
  vi: string;
  en: string;
  ko: string;
}

export interface IPromo {
  id: string;
  createdBy: string;
  createdAt: string;
  createdName: string;
  updatedBy: string;
  updatedAt: string;
  promoUrl: string;
  updatedName: string;
  delIf: string;
  rowFlag: string;
  rowMsg: string;
  rowCode: string;
  no: string;
  applyFromFormat: string;
  applyToFormat: string;
  fileId: string;
  promoNameLangSeq: number;
  strtDate: string;
  endDate: string;
  fileInfo: FileInfo;
  promotionName: PromotionName;
}

export interface FileInfo {
  fileId: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileType: string;
}

export interface PromotionName {
  en: string;
  ko: string;
  vi: string;
}

export interface IBnnr {
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
  bnnrTitlLangSeq: number;
  bnnrSubsTitlLangSeq: number;
  bnnrMemoLangSeq: number;
  btnLangSeq: number;
  btnUrl: string;
  fileId: string;
  bnnrSubsTitlInfo: BnnrSubsTitlInfo;
  bnnrTitlInfo: BnnrTitlInfo;
  bnnrMemoInfo: BnnrMemoInfo;
  btnNameInfo: BtnNameInfo;
  bnnrFileInfo?: BnnrFileInfo;
}

export interface BnnrSubsTitlInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface BnnrTitlInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface BnnrMemoInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface BtnNameInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface BnnrFileInfo {
  fileId: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileType: string;
}
