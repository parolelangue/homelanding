'use client';

import { useAppSelector } from '@/infra/store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { findNodeByKey } from '../utils/general';
import { genContentLang } from '../utils/transform';
import { IHeadCategory } from '../types/home';
import { PATH_NAMES } from '../configs/pathnames';

export const useTitle = () => {
  const { t, i18n } = useTranslation('common');
  const pathname = usePathname();
  const headCategories = useAppSelector((state) => state.home.headCategories);
  const splitPath = pathname.split('/');
  const catePath = splitPath[1];
  const subPath = splitPath[splitPath.length - 1];
  const isCatePage = catePath === subPath;

  useEffect(() => {
    const node = findNodeByKey(headCategories, subPath, isCatePage) as IHeadCategory;
    const specialPaths = {
      [PATH_NAMES.Home]: t('common.asamHome'),
    };
    if (node) {
      const title = genContentLang(node?.titleInfo, i18n.language);
      document.title = title;
    } else if (specialPaths[pathname]) {
      document.title = specialPaths[pathname];
    }
  }, [i18n.language, pathname, JSON.stringify(headCategories), subPath, isCatePage, t]);
  return {};
};
