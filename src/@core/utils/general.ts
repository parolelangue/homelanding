import { IHeadCategory } from '../types/home';

export const findNodeByKey = (data: IHeadCategory[], key: string, ancestor?: boolean) => {
  if (!data) return null;
  var result: IHeadCategory | null = null;
  data.forEach((item) => {
    if ((item?.ancestor === key && ancestor) || item?.ancestorPath === key) {
      result = item;
      return;
    } else {
      if (item.subs && !result) {
        result = findNodeByKey(item.subs, key);
        if (result) return;
      }
    }
  });
  return result;
};

export const flattendHeadCategories = (data: IHeadCategory[]) => {
  if (!data) return null;
  return data.flatMap((item) => [
    { label: item.titleInfo, path: item.ancestor }, // Top-level item
    ...item.subs.map((sub) => ({ label: sub.titleInfo, path: sub.ancestorPath })), // Nested items
  ]);
};

export const flattenSiteMapData = (
  data: IHeadCategory[],
  parentUrl: string = '',
): IHeadCategory[] => {
  const result: IHeadCategory[] = [];

  data?.forEach((item) => {
    const currentUrl = parentUrl
      ? `${parentUrl}/${item.ancestorPath || item.ancestor}`
      : item.ancestor;

    result.push({
      ...item,
      url: currentUrl,
    });

    if (item?.subs && item.subs?.length > 0) {
      result.push(...flattenSiteMapData(item.subs, currentUrl));
    }
  });

  return result;
};

export const replaceDomainURL = (url: string) =>
  url?.replace('http://smarteevina.ddns.net', 'http://42.115.115.130');
