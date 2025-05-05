'use client';
import React, { useEffect, useState } from 'react';
import LogoMain from '../icons/LogoMain';
import { styled, useTheme } from '@mui/material';
import { WIDTH_MEDIUM } from '@/@core/configs';
import clsx from 'clsx';

const LoadingPage = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Wrap className={clsx('loading-page', { loaded: !loading })}>
      <LogoMain color={theme.palette.primary.main} />
    </Wrap>
  );
};

const Wrap = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.common.white,
  top: 0,
  left: 0,
  zIndex: 5000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  clipPath: 'inset(0 0 0 0)',
  transition: 'clip-path 0.6s cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  willChange: 'clip-path',
  '&.loaded': {
    clipPath: 'inset(0 0 100% 0)',
    transition: 'clip-path 1.2s cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  },
  svg: {
    overflow: 'hidden',
    path: {
      fill: theme.palette.common.black,
      '&.logo': {
        fill: '#2a30ff',
      },
    },
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default LoadingPage;
