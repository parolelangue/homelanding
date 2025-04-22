'use client';
import { keyframes } from '@emotion/react';
import React from 'react';
import LogoMain from '../icons/LogoMain';
import { styled, useTheme } from '@mui/material';
import { WIDTH_MEDIUM } from '@/@core/configs';

const LoadingPage = () => {
  const theme = useTheme();
  return (
    <Wrap className="loading-page">
      <LogoMain color={theme.palette.primary.main} w={92} h={72} />
    </Wrap>
  );
};

const scale = keyframes`
    0% { transform: translateY(1rem); opacity:0;}
    100% { transform: translateY(0) opacity:1} 
`;

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
  svg: {
    overflow: 'hidden',
    path: {
      position: 'relative',
      animation: `${scale} var(--delay) linear `,
    },
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default LoadingPage;
