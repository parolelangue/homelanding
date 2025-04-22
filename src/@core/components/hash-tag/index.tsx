import { WIDTH_MEDIUM } from '@/@core/configs';
import { TOption } from '@/@core/types/general';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { Link, Stack, styled } from '@mui/material';
import React from 'react';

type Props = {
  list: TOption[];
};

const HashTag = ({ list }: Props) => {
  return (
    <TagList direction={'row'}>
      {list?.map((item, index) => <TagItem key={index}>#{item.label}</TagItem>)}
    </TagList>
  );
};

const TagList = styled(Stack)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.75rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    gap: '0.75rem',
  },
}));
const TagItem = styled('p')(({ theme }) => ({
  padding: '0.325rem 1rem',
  borderRadius: '1.25rem',
  color: theme.palette.text.black600,
  border: `1px solid ${theme.palette.text.black600}`,
  cursor: 'pointer',
  transition: 'all .25s',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.common.white, 0.2),
    transition: 'all .25s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default HashTag;
