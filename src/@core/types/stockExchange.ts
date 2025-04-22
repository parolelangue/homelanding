export interface IStockCode {
  id: string;
  code: string;
  mode: string;
  trustVal: number;
  capital: number;
  currency: string;

  createdBy: string
  createdAt: string
  createdName: string
  updatedBy: string
  updatedAt: string
  updatedName: string
  delIf: string
  rowFlag: string
  rowMsg: string
  rowCode: string
  no: string
  applyFromFormat: string
  applyToFormat: string
  hashTagName: string
  indexName: string
  indexVal: string
  valChange: string
  ratioChange: string
  totalVolume: string
  totalAmount: string
}

export interface SrvToCltEvents {
  ['notification']: (data: string) => void;
}

export interface CltToSrvEvents {}
