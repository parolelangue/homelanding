export interface IArticle {
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
  seoTitle: string;
  rowCode: string;
  slug: string;
  url: string;
  source: string;
  no: string;
  publishDate:string
  applyFromFormat: string;
  applyToFormat: string;
  cateId: string;
  articlesThumbnail: {
    fileUrl: string;
  };
  contentInfo: ContentInfo;
  titleInfo: TitleInfo;
  memoInfo: MemoInfo;
  hashTagInfo: IHashTag[];
}

export interface ContentInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface TitleInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface MemoInfo {
  en: string;
  vi: string;
  ko: string;
}

export interface HashTagName {
  en: string;
  vi: string;
  ko: string;
}

export interface IHashTag {
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
  articleId: string;
  hashTagId: string;
  hashTagName: string;
}
