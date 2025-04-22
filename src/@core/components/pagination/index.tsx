import { WIDTH_MEDIUM } from '@/@core/configs';
import { Pagination as PaginationBase, PaginationProps, styled, useTheme } from '@mui/material';
import React from 'react';

type Props = {} & PaginationProps;

const Pagination = ({ ...rest }: Props) => {
  const theme = useTheme();
  return <PaginationMain {...rest} />;
};

const PaginationMain = styled(PaginationBase)(({ theme }) => ({
  ' .Mui-selected': {
    backgroundColor: theme.palette.primary.main + ' !important',
    color: theme.palette.common.white,
  },
  '.MuiPaginationItem-ellipsis, .MuiPaginationItem-previousNext, .MuiPaginationItem-previousPrev': {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default Pagination;
