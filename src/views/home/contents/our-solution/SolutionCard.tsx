import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { LINKS } from '@/@core/constants/general';
import { ISolution } from '@/@core/types/solution';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {
  data: ISolution;
};

const SolutionCard = ({ data }: Props) => {
  const { code, title, sysPath, icon } = data || {};
  const { t, i18n } = useTranslation('common');

  const Icon = icon;

  return (
    <Card className="solution-item">
      <Stack direction="row" alignItems="center" gap="0 1rem" mb="0.75rem">
        <Box className="box-icon" component="div">
          <Icon size={24} />
        </Box>
        <Typography className="code">{code}</Typography>
      </Stack>
      <Typography className="title">{title}</Typography>
      <Stack
        mt={{ xs: '1rem', md: '2rem' }}
        direction={{ xs: 'column', md: 'row' }}
        width={'100%'}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        gap={{ xs: '0.5rem 0', md: '0 0.5rem' }}
      >
        <Link href={LINKS.DOCS_SITE} target="_blank">
          <Button variant="outlined" className="btn-manu">
            {t('button.manual')}{' '}
          </Button>
        </Link>
        <Link href={sysPath} target="_blank">
          <Button className="btn-sys">
            {t('button.goToSystem')}
            <HeroIcons.ArrowRight size={22} />
          </Button>
        </Link>
      </Stack>
    </Card>
  );
};

const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  opacity: 0,
  // transform: 'scale(0.8)',
  transition: 'all .5s cubic-bezier(0, 0.7, 0.3, 0.9)',
  '.btn-manu': {
    border: `1px solid ${theme.palette.grey[200]}`,
    color: theme.palette.grey[900],
    '&:hover': {
      borderColor: theme.palette.grey[900],
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.common.white,
    },
  },
  button: {
    fontSize: '1rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    textTransform: 'initial',
    borderRadius: '0.325rem',
  },
  '.btn-sys': {
    backgroundColor: ` ${theme.palette.primary.main}`,
    color: theme.palette.common.white,
    gap: '0 0.5rem',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: ` ${theme.palette.primary.main}`,
    },
  },
  '.box-icon': {
    width: '3rem',
    height: '3rem',
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.grey[200]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.code': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 600,
    color: theme.palette.grey[900],
  },
  '.title': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.grey[600],
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  },
  [theme.breakpoints.down('md')]: {
    button: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      fontSize: '0.875rem',
      svg: {
        width: '1.125rem',
        height: '1.125rem',
      },
    },
  },
  [`@media (min-width: 768px) and (max-width: 860px)`]: {
    'button, a': {
      width: '100%',
    },
    button: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      fontSize: '0.875rem',
      svg: {
        width: '1.125rem',
        height: '1.125rem',
      },
    },
  },
  [theme.breakpoints.down('sm')]: {
    'button, a': {
      width: '100%',
    },
    button: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      fontSize: '0.875rem',
      svg: {
        width: '1.125rem',
        height: '1.125rem',
      },
    },
  },
  [`@media (min-width: 320px)`]: {},
}));

export default SolutionCard;
