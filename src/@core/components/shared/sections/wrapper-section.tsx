import { Box, styled, SxProps, useMediaQuery } from '@mui/material';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { ReactNode } from 'react';
import clsx from 'clsx';

const StyleWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  margin: 'auto',
  width: 'calc(100vw - 202px)',
  padding: '0 1rem',
  position: 'relative',
  transition: 'padding .25s ease-in-out',

  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    width: 'calc(100vw - 202px)',
    padding: '0 1rem',
  },
  [theme.breakpoints.down('lg')]: {
    width: 'calc(100vw - 104px)',
    padding: '0 0.5rem',
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(100vw - 104px)',
    padding: '0 0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0 1rem',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    padding: '0 1rem',
  },
}));

type WrapperProps = {
  children: ReactNode;
  nameClass?: string;
  sxProps?: SxProps;
};

const WrapperSection = ({ children, nameClass, sxProps }: WrapperProps) => {
  return (
    <StyleWrapper
      sx={{
        ...sxProps,
      }}
      className={clsx('wrapper-section', nameClass)}
    >
      {children}
    </StyleWrapper>
  );
};

export default WrapperSection;
