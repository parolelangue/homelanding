'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useDevice } from '@/@core/hooks/useDevice';
import { SectionTitle } from '@/@core/styles/common';
import { Button, Grid, Stack, styled, useTheme } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
//@ts-ignore
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

const AboutSection = () => {
  const { t } = useTranslation('common');
  const device = useDevice();
  const theme = useTheme();

  const introData = [
    {
      title: t('homePage.mission'),
      desc: t('homePage.missionDesc'),
      imgDesktop: '/images/pages/home/mission-img-desktop.jpg',
      imgMobile: '/images/pages/home/mission-img-mobile.jpg',
    },
    {
      title: t('homePage.asamAssetManagement'),
      desc: t('homePage.asamAssetManagementDesc'),
      imgDesktop: '/images/pages/home/asam-asset-img.jpg',
      imgMobile: '/images/pages/home/asam-asset-img.jpg',
    },
    {
      title: t('homePage.utilities'),
      desc: t('homePage.utilitiesDesc'),
      imgDesktop: '/images/pages/home/utilities-img.jpg',
      imgMobile: '/images/pages/home/utilities-img.jpg',
    },
  ];

  const aboutAsamURL = process.env.NEXT_PUBLIC_FRONT_URL + '/about-us/asam-about';

  const renderIntroItem = (item: (typeof introData)[0]) => {
    return (
      <IntroItem>
        <BoxImage>
          <Image
            alt={item.title}
            src={device.desktop || device.desktopLarge ? item.imgDesktop : item.imgMobile}
            layout="fill"
            fill
            objectFit="cover"
            unoptimized
          />
        </BoxImage>
        <BoxContent>
          <p className="title">{item.title}</p>
          <p className="desc">{item.desc}</p>
        </BoxContent>
      </IntroItem>
    );
  };
  return (
    <Container>
      <Head>
        <MainWrapper>
          <Grid container sx={{ marginBottom: { xs: '1.5rem', sm: '1.5rem', md: 0 } }}>
            <Grid item xs={12} md={6}>
              <SectionTitle
                dangerouslySetInnerHTML={{ __html: t('homePage.introductionAboutAsamSecurities') }}
                sx={{ flex: 1 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Desc>{t('homePage.introductionAboutAsamSecuritiesDesc')}</Desc>
              <Link href={aboutAsamURL} target="_blank">
                <Button variant="outlined">
                  {t('button.viewMore')}
                  <HeroIcons.ArrowTrendingUp
                    size={20}
                    color={theme.palette.primary.main}
                    style={{ marginLeft: '0.325rem' }}
                  />
                </Button>
              </Link>
            </Grid>
          </Grid>
          {device.desktop || device.desktopLarge || device.tablet ? (
            <IntroGrid container>
              {introData?.map((item, index) => {
                const smallCol = device.desktop ? 4 : device.desktopLarge ? 3 : 6;
                const bigCol = device.desktop ? 4 : device.desktopLarge ? 6 : 6;
                return (
                  <Grid item xs={12} sm={12} md={index === 0 ? bigCol : smallCol} key={index}>
                    {renderIntroItem(item)}
                  </Grid>
                );
              })}
            </IntroGrid>
          ) : (
            <IntroSlider
              className="hero-slider"
              options={{
                type: 'loop',
                rewind: true,
                width: '100%',
                perPage: 1,
                arrows: false,
                gap: '1rem',
                // autoplay: true,
                // interval: 10000,
                // pauseOnHover: false,
                height: '500px',
              }}
            >
              {introData?.map((x, index) => (
                <SplideSlide className="slide" key={index}>
                  {renderIntroItem(x)}
                </SplideSlide>
              ))}
            </IntroSlider>
          )}
        </MainWrapper>
      </Head>
    </Container>
  );
};

const IntroSlider = styled(Splide)(({ theme }) => ({
  padding: '0',
  '.splide__pagination': {
    display: 'inline-flex',
    width: 'fit-content',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '130px',
    borderRadius: '2rem',
    padding: '0',
    li: {
      margin: '0',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      button: {
        width: '0.5rem',
        height: '0.5rem',
        borderRadius: '2rem',
        opacity: 1,
        backgroundColor: hexToRGBA(theme.palette.primary.main, 0.3),
        transition: 'all .25s',
        '&.is-active': {
          width: '3.25rem',
          transform: 'scale(1) !important',
          backgroundColor: theme.palette.primary.main,
          transition: 'all .25s',
        },
      },
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {
    marginTop: '0',
    '.splide__pagination': {
      bottom: '2.5rem',
    },
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
    '.splide__pagination': {
      bottom: '-3.5rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '1rem',
    '.splide__pagination': {
      bottom: '-3.5rem',
    },
  },
}));

const Desc = styled('p')(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 400,
  color: theme.palette.text.mode,
  flex: 1,
  marginBottom: '1.5rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    margin: '1rem 0',
  },
}));

const IntroGrid = styled(Grid)(({ theme }) => ({
  marginTop: '1.5rem',
  gap: '0 1rem',
  flexWrap: 'nowrap',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}));

const IntroItem = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  height: '100%',
  '&:hover': {
    img: {
      transform: 'scale(1.05)',
      transition: 'all .45s',
    },
  },
  '&:after': {
    content: `''`,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '70%',
    background: 'linear-gradient(360deg, #080808 47.5%, rgba(8, 8, 8, 0) 100%)',
    zIndex: 1,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    '&:after': {
      height: '80%',
    },
  },
  [theme.breakpoints.down('lg')]: {
    '&:after': {
      height: '80%',
    },
  },
  [theme.breakpoints.down('md')]: {
    '&:after': {
      height: '85%',
    },
  },
  [theme.breakpoints.down('sm')]: {},
}));

const BoxImage = styled('div')(({ theme }) => ({
  width: 'auto',
  height: 428,
  borderRadius: '0.75rem',
  overflow: 'hidden',
  position: 'relative',
  img: {
    transition: 'all .45s',
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    height: 380,
  },
  [theme.breakpoints.down('lg')]: {
    height: 350,
  },
  [theme.breakpoints.down('md')]: {
    height: 428,
  },
  [theme.breakpoints.down('sm')]: {},
}));

const BoxContent = styled(Stack)(({ theme }) => ({
  position: 'relative',
  padding: '1.875rem 1.5rem',
  zIndex: 2,
  '.title': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 600,
    color: theme.palette.text.mode,
    marginBottom: '0.325rem',
  },
  '.desc': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 400,
    color: theme.palette.text.mode,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    '.title': {
      fontSize: '1.25rem',
      lineHeight: '2rem',
      fontWeight: 600,
      color: theme.palette.text.mode,
      marginBottom: '0.325rem',
    },
    '.desc': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
      color: theme.palette.text.mode,
    },
  },
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    '.title': {
      fontSize: '1.25rem',
      lineHeight: '2rem',
      fontWeight: 600,
      color: theme.palette.text.mode,
      marginBottom: '0.325rem',
    },
    '.desc': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
      color: theme.palette.text.mode,
    },
  },
}));

const Head = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Container = styled('section')(({ theme }) => ({
  padding: '85px 0',
  position: 'relative',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default AboutSection;
