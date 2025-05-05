import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { IService } from '@/@core/types/service';
import { ISolution } from '@/@core/types/solution';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {
  data: IService;
};

const ServiceCard = ({ data }: Props) => {
  const { title, desc, img, path } = data || {};
  const { t, i18n } = useTranslation('common');

  return (
    <Card>
      <BoxImage>
        <Link href="#" onClick={(e) => e.preventDefault()}>
          <img src={img} />
        </Link>
      </BoxImage>
      <Stack direction="column" gap="0.5rem 0" mt={{ xs: '1rem', md: '1.5rem' }}>
        <Link href="#" onClick={(e) => e.preventDefault()}>
          <Typography className="title">{title}</Typography>
        </Link>

        <Typography className="desc truncate-text">{desc}</Typography>
      </Stack>
    </Card>
  );
};

const BoxImage = styled('div')(({ theme }) => ({
  width: '100%',
  height: '300px',
  '&:hover': {
    img: {
      transform: 'rotate(1deg) scale(0.95)',
      transition: 'all .25s',
    },
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'all .25s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {
    height: '220px',
  },
  [theme.breakpoints.down('md')]: {
    height: '180px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '220px',
  },
}));

const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1rem',
  padding: '1.5rem',
  backgroundColor: theme.palette.grey[50],
  '.title': {
    fontSize: '2.5rem',
    lineHeight: '3rem',
    fontWeight: 600,
    color: theme.palette.grey[900],
    position: 'relative',
    width: 'fit-content',
    '&:after': {
      content: `''`,
      position: 'absolute',
      left: 'auto',
      right: '0',
      bottom: '-2px',
      width: '0%',
      height: '2px',
      backgroundColor: theme.palette.grey[900],
      transition: 'all .25s',
    },
    '&:hover': {
      '&:after': {
        width: '100%',
        left: 0,
        right: 'auto',
        transition: 'all .25s',
      },
    },
  },
  '.desc': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.grey[700],
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    '.title': {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
    '.desc': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.title': {
      fontSize: '1.75rem',
      lineHeight: '2rem',
    },
    '.desc': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
}));

export default ServiceCard;
