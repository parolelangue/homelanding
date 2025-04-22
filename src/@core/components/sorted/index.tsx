import { WIDTH_MEDIUM } from '@/@core/configs';
import { Stack, styled } from '@mui/material';
import React from 'react';
import { HeroIcons } from '../icons/heroIcons';
import { ESortDirection } from '@/@core/types/general';
import clsx from 'clsx';

type Props = {
  value?: ESortDirection;
  onSortChange: (data: ESortDirection) => void;
};

const Sorted = ({ onSortChange, value }: Props) => {
  const _onSortChanged = (data: ESortDirection) => () => {
    onSortChange(value !== data ? data : ESortDirection.None);
  };
  return (
    <Wrap>
      <HeroIcons.ChevronUp
        onClick={_onSortChanged(ESortDirection.Asc)}
        className={clsx('arrow', { active: value === ESortDirection.Asc })}
        size={16}
      />
      <HeroIcons.ChevronDown
        onClick={_onSortChanged(ESortDirection.Desc)}
        className={clsx('arrow', { active: value === ESortDirection.Desc })}
        size={16}
      />
    </Wrap>
  );
};

const Wrap = styled(Stack)(({ theme }) => ({
  '.arrow': {
    cursor: 'pointer',
    '&.active': {
      color: theme.palette.primary.main,
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default Sorted;
