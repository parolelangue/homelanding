import HeroChart from '@/@core/components/icons/chartHero';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { IBanner } from '@/@core/types/home';
import { replaceDomainURL } from '@/@core/utils/general';
import { genContentLang } from '@/@core/utils/transform';
import { Box, Button, keyframes, Link, Stack, styled, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

type Props = {
  data: IBanner;
};

const HeroItem = ({ data }: Props) => {
  const { t, i18n } = useTranslation('common');
  const theme = useTheme();
  const { bnnrSubsTitlInfo, bnnrTitlInfo, bnnrMemoInfo, bnnrFileInfo, btnNameInfo, btnUrl } =
    data || {};

  const subTitle = genContentLang(bnnrSubsTitlInfo, i18n.language);
  const title = genContentLang(bnnrTitlInfo, i18n.language);
  const memo = genContentLang(bnnrMemoInfo, i18n.language);
  const img = bnnrFileInfo?.fileUrl;
  const validImg = img && img?.includes('http');
  const btnNm = genContentLang(btnNameInfo, i18n.language);

  return (
    <Wrap>
      <MainWrapper sxProps={{ height: '100%', position: 'relative' }}>
        <WrapContent
          direction={{ sm: 'column', md: 'column', lg: 'row' }}
          gap={4}
          alignItems={'center'}
        >
          <Content>
            <p className="sub-title">{subTitle}</p>
            <h1 className="title">{title}</h1>
            <p className="description">{memo}</p>
            {btnNm && (
              <Action direction="row" spacing={2}>
                <Link className="link start-link" aria-label={`ASAM ` + btnNm} href={btnUrl}>
                  <Button className="btn-about" variant="contained">
                    {btnNm}
                    <HeroIcons.ArrowRight size={20} color={theme.palette.common.white} />
                  </Button>
                </Link>
              </Action>
            )}
          </Content>
          <CardImages>
            {validImg && (
              <CardImage className="card-img">
                <Image
                  className={clsx('image')}
                  src={img}
                  unoptimized
                  alt="banner"
                  fill
                  priority
                  objectFit="contain"
                  sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                />
              </CardImage>
            )}
            <HeroChart />
          </CardImages>
        </WrapContent>
      </MainWrapper>
    </Wrap>
  );
};

const scale = keyframes`
    0% { transform: scaleY(1)}
    50% { transform: scaleY(1.5)}
    100% { transform: scaleY(1)}
`;

const CardImages = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.hero-chart': {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    path: {
      position: 'relative',
      animation: `${scale} var(--duration) linear infinite`,
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    height: 460,
    margin: 0,
    marginTop: 50,
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    height: 400,
    margin: 0,
    marginTop: 50,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 400,
    margin: 0,
    marginTop: 50,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 330,
    margin: 0,
    marginTop: 30,
  },
}));
const CardImage = styled('div')(({ theme }) => ({
  width: 660,
  height: 607,
  position: 'relative',
  opacity: 0,
  transitionDelay: '1.25s',
  transition: 'all 2s',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    aspectRatio: '1/1',
    width: 'auto',
    height: '100%',
  },
  [theme.breakpoints.down('lg')]: {
    aspectRatio: '1/1',
    width: 'auto',
    height: '100%',
  },
  [theme.breakpoints.down('md')]: {
    aspectRatio: '1/1',
    width: 'auto',
    height: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    aspectRatio: '1/1',
    width: 'auto',
    height: '100%',
  },
}));
const Content = styled(Stack)(({ theme }) => ({
  maxWidth: 740,
  position: 'relative',
  left: '0',
  transform: 'translateY(-15%)',
  '.sub-title': {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '2rem',
    color: theme.palette.text.green600,
    transform: 'translateX(1.5rem)',
    opacity: 0,
    transitionDelay: '0.25s',
    transition: 'all 1s',
  },
  '.title': {
    fontSize: '3.75rem',
    fontWeight: 800,
    lineHeight: '4.5rem',
    color: theme.palette.common.white,
    margin: '0.75rem 0 1.5rem',
    transform: 'translateX(2.5rem)',
    opacity: 0,
    transitionDelay: '0.5s',
    transition: 'all 1.25s',
  },
  '.description': {
    fontSize: '1.25rem',
    fontWeight: 300,
    lineHeight: '1.75rem',
    color: '#E6E6E9',
    transform: 'translateX(3.5rem)',
    opacity: 0,
    transitionDelay: '0.75s',
    transition: 'all 1.5s',
  },
  '.btn-about': {
    transform: 'translateX(4.5rem)',
    opacity: 0,
    transitionDelay: '1s',
    transition: 'all 1.75s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    maxWidth: '100%',
    transform: 'translateY(-15%)',
    '.sub-title': {
      fontSize: '1',
      fontWeight: 400,
      lineHeight: '1.5rem',
      color: theme.palette.text.green600,
    },
    '.title': {
      fontSize: '1.875rem',
      fontWeight: 800,
      lineHeight: '2.25rem',
      color: theme.palette.text.mode,
      margin: '0.75rem 0 1.5rem',
    },
    '.description': {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
      color: '#E6E6E9',
    },
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    transform: 'translateY(0)',
    '.sub-title': {
      fontSize: '1',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    '.title': {
      fontSize: '1.875rem',
      fontWeight: 800,
      lineHeight: '2.25rem',
      margin: '0.75rem 0 1.5rem',
    },
    '.description': {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    transform: 'translateY(0)',
    '.sub-title': {
      fontSize: '1',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    '.title': {
      fontSize: '1.875rem',
      fontWeight: 800,
      lineHeight: '2.25rem',
      margin: '0.75rem 0 1.5rem',
    },
    '.description': {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    transform: 'translateY(0)',
    '.sub-title': {
      fontSize: '1',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    '.title': {
      fontSize: '1.875rem',
      fontWeight: 800,
      lineHeight: '2rem',
      margin: '0.75rem 0 1.5rem',
    },
    '.description': {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  },
}));
const Wrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {
    paddingTop: '90px',
    height: '100vh',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: '90px',
    height: '100vh',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '90px',
    height: '100vh',
  },
}));
const WrapContent = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '100%',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const Action = styled(Stack)(({ theme }) => ({
  marginTop: '1.5rem',
  '.link': {
    button: {
      gap: '0 0.625rem',
    },
    '&.start-link': {
      button: {},
    },
    '&.about-link': {
      button: {
        color: theme.palette.text.positive950,
      },
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '1rem',
  },
}));

export default HeroItem;
