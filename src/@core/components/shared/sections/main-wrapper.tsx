'use client';
import { Box, styled, SxProps, useMediaQuery } from '@mui/material';
import { WIDTH_MEDIUM, WIDTH_BIG_LARGE } from '@/@core/configs';
import { ReactNode } from 'react';

const StyleWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  transition: 'padding .25s ease-in-out',
  paddingLeft: '1rem !important',
  paddingRight: '1rem !important',
  paddingBottom: '0',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1440px)`]: {
    paddingLeft: '3.5rem !important',
    paddingRight: '3.5rem !important',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '0',
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '0 !important',
  },
}));

type WrapperProps = {
  children: ReactNode;
  bg: string;
  maxWidth: any;
  nameClass?: string;
  sxProps?: SxProps;
  isFullContainer?: boolean;
};

const MainWrapper = ({
  children,
  bg,
  maxWidth = WIDTH_BIG_LARGE,
  nameClass,
  sxProps,
  isFullContainer,
}: WrapperProps) => {
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('xlc'));

  const genMaxWidth = isFullContainer ? '100%' : maxWidth;
  const genPaddingX = () => {
    if (!isDesktop) return [4, 4];
    return isFullContainer ? '3.75rem !important' : [0, 0];
  };

  return (
    <StyleWrapper
      sx={{
        mx: 'auto',
        px: genPaddingX(),
        backgroundColor: bg,
        ...sxProps,
        '@media (min-width:1440px)': { maxWidth: genMaxWidth },
        '@media (min-width:1200px)': { maxWidth: '100%' },
      }}
      className={nameClass}
    >
      {children}
    </StyleWrapper>
  );
};

MainWrapper.defaultProps = {
  maxWidth: WIDTH_BIG_LARGE,
  bg: '#fff',
};

export default MainWrapper;
