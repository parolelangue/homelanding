import { IFileInfo, IObjLang } from './general';

export interface PaySchedule {
  en: string;
  vi: string;
  ko: string;
}

export interface Description {
  en: string;
  vi: string;
  ko: string;
}

export interface IBond {
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
  bondCode: string;
  issuer: string;
  bondFundType: string;
  imgUrl: string;
  latestPrice: number;
  latestPriceDate: string;
  yieldRate: number;
  maturityFrom: string;
  maturityTo: string;
  dispOrd: number;
  template: string;
  paySchedule: PaySchedule;
  description: Description;
  logoFileInfo: IFileInfo;
}

export interface IBondHistory {
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
  bondCode: string;
  priceDate?: string;
  issuer: string;
  bondFundType: string;
  imgUrl: string;
  latestPrice: number;
  latestPriceDate: string;
  yieldRate: number;
  maturityFrom: string;
  maturityTo: string;
  dispOrd: number;
  interestPaymentMethod: string;
  marketCap: string;
  interestRate: string;
  nextInterestRate: string;
  collateral: string;
  descriptionLangSeq: number;
  paySchedLangSeq: number;
  prospectusFileId: string;
  logoFileId: string;
  status: string;
  bondSize: string;
  parValue: string;
  prospectusFileInfo: IFileInfo;
  logoFileInfo: IFileInfo;
  interestPaySchedule: IObjLang;
  description: IObjLang;

  buyingPrice: string;
  sellingPrice: string;
}
