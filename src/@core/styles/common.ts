import { styled } from '@mui/material';
import { WIDTH_MEDIUM } from '../configs';

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: '3rem',
  lineHeight: '3.5rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: theme.palette.common.black,
  span: {
    color: theme.palette.primary.main,
    // background: `-webkit-linear-gradient(0deg,${theme.palette.primary.main}, #b2fd8d)`,
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
  },
  '&.small': {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.5rem',
    lineHeight: '2.75rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
}));

export const SectionSubTitle = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 400,
  color: theme.palette.text.neutral100,
  margin: '1.5rem 0 2.5rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    margin: '1.5rem 0 2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    margin: '1.5rem 0 2.5rem',
  },
}));
