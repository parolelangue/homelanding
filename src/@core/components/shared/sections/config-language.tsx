import { Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// ** Third Party Import
import { WIDTH_MEDIUM } from '@/@core/configs';
import authConfig from '@/infra/configs/auth';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

type Props = {
  settings?: any;
  saveSettings?: any;
};

type LangTypes = 'kr' | 'en' | 'vi';

const labels = {
  vi: {
    title: 'VI',
  },
  kr: {
    title: 'KR',
  },
  en: {
    title: 'EN',
  },
};

const StackLang = styled(Stack)(({ theme }) => ({
  '.lang': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
    cursor: 'pointer',
    color: theme.palette.text.black700,
    transition: 'all 0.3s ease',
    '&.active': {
      color: theme.palette.common.white,
      transition: 'all 0.3s ease',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    '.lang': {
      lineHeight: '1rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    color: theme.palette.primary.main,
    '.lang': {
      lineHeight: '1rem',
    },
  },
}));

const ConfigLanguage = ({}: Props) => {
  const { t, i18n } = useTranslation('common');

  const cachedLang = localStorage.getItem(authConfig.i18nextLng);
  const currentLang = cachedLang || 'en';

  const [lang, setLang] = useState('');

  useEffect(() => {
    if (lang) return;
    i18n.changeLanguage(currentLang);
    setLang(currentLang);
    localStorage.setItem(authConfig.i18nextLng, currentLang);
  }, [currentLang, lang]);

  const handleLangItemClick = (lang: string) => () => {
    i18n.changeLanguage(lang);
    setLang(lang);
    localStorage.setItem(authConfig.i18nextLng, lang);
  };

  return (
    <StackLang direction="row" alignItems="center" gap={1}>
      {Object.keys(labels).map((key, index) =>
        Object.keys(labels).length - 1 !== index ? (
          <React.Fragment key={index}>
            <Typography
              onClick={handleLangItemClick(key.toLowerCase())}
              className={clsx('lang', { active: lang === key.toLowerCase() })}
            >
              {labels[key as LangTypes]?.title}
            </Typography>
            <Typography className={clsx('lang')}>/</Typography>
          </React.Fragment>
        ) : (
          <Typography
            onClick={handleLangItemClick(key.toLowerCase())}
            className={clsx('lang', { active: lang === key.toLowerCase() })}
            key={index}
          >
            {labels[key as LangTypes]?.title}
          </Typography>
        ),
      )}
    </StackLang>
  );
};

export default ConfigLanguage;
