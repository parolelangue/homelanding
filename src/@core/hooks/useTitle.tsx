'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useTitle = () => {
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    document.title = t('common.aprotech');
  }, [i18n.language, t]);
  return {};
};
