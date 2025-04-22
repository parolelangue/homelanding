import { i18n } from 'i18next';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { IObjLang } from '../types/general';
import { formatCurrency } from './format';

const renderImage = (options: {
  i18n: i18n;
  isMobile: boolean;
  suffixPath: string;
  desktopKr?: string;
  desktopEn?: string;
  desktopJa?: string;
  mobileKr?: string;
  mobileEn?: string;
  mobileJa?: string;
}) => {
  const {
    i18n,
    isMobile,
    suffixPath,
    desktopEn,
    desktopJa,
    desktopKr,
    mobileEn,
    mobileJa,
    mobileKr,
  } = options;
  let img = suffixPath;
  if (isMobile) {
    if (i18n.language === 'en') {
      img += mobileEn;
    }
    if (i18n.language === 'kr') {
      img += mobileKr;
    }
    if (i18n.language === 'ja') {
      img += mobileJa || mobileKr;
    }
  } else {
    if (i18n.language === 'en') {
      img += desktopEn;
    }
    if (i18n.language === 'kr') {
      img += desktopKr;
    }
    if (i18n.language === 'ja') {
      img += desktopJa || desktopKr;
    }
  }
  return img;
};

const truncDateFromServer = (date?: string | null, format?: string) => {
  if (!date) return '';
  const day = date.slice(6, 8);
  const month = date.slice(4, 6);
  const year = date.slice(0, 4);
  return `${year}-${month}-${day}`;
};

const parseReadonlyURLSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  // Convert the ReadonlyURLSearchParams into an object
  const paramsObject = Object.fromEntries(searchParams.entries());
  return paramsObject;
};

const filteredParams = <T extends object = any>(params?: T) => {
  return params
    ? Object.fromEntries(
        Object.entries(params).filter(
          ([_, value]) => value !== undefined && value !== '' && value !== null,
        ),
      )
    : {};
};

const filteredParamsSerializer = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, values]) => {
    if (Array.isArray(values)) {
      values.forEach((value) => searchParams.append(key, value));
    } else {
      searchParams.append(key, values as string);
    }
  });
  return searchParams.toString();
};

const removeImageTagTemporary = (html: string) => {
  if (!html) return '';
  let result = html.replace(/<img[^>]*>/g, '');
  result = result.replace(/<\/?strong>/g, '');
  return result.replace(/style="[^"]*"/g, '');
};

const replaceHTMLDisplay = (html: string) => {
  if (!html) return '';
  let result = html
    ?.replaceAll('<p></p>', '<p>&nbsp;</p>')
    ?.replaceAll('background-color:rgb(255, 255, 255);', '')
    ?.replaceAll('background-color:rgb(255,255,255);', '')
    ?.replaceAll('background-color:white;', '')
    ?.replaceAll('color:black;', '')
    ?.replaceAll('&nbsp;', ' ')
    ?.replaceAll('text-align:justify;', '')
    ?.replaceAll('font-family:&quot;Times New Roman&quot;', '')
    ?.replaceAll('color:hsl(0,0%,0%);', '')
    ?.replaceAll('color:rgb(54,58,69);', '')
    ?.replaceAll('background-color:yellow;', 'background-color:yellow;color:black;');
  return result;
};

const displayNullish = (value: string | null | undefined | number) => (value ? value : '---');

const transferFileName = (fileUrl: string, backupNm?: string) => {
  if (!fileUrl) return backupNm || '';
  const regex = /[^/]+\.(pdf|docx?|txt|png|jpe?g|gif|bmp|tiff)$/;
  const match = fileUrl.match(regex);
  return match ? match[0] : null;
};

const genContentLang = (obj: IObjLang, lang: string) => {
  const result = lang === 'kr' ? obj?.['ko'] : obj?.[lang];
  return result ? result : obj?.['en'] || obj?.['vi'];
};

const covertToBillions = (number: number): string => {
  if (number < 1_000_000_000) return formatCurrency(number); // No conversion needed

  const billions = Math.floor(number / 1_000_000_000);
  return formatCurrency(billions);
};

export {
  renderImage,
  truncDateFromServer,
  parseReadonlyURLSearchParams,
  filteredParams,
  filteredParamsSerializer,
  removeImageTagTemporary,
  replaceHTMLDisplay,
  displayNullish,
  transferFileName,
  genContentLang,
  covertToBillions,
};
