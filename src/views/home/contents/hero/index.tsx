'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Box, keyframes, styled, Typography } from '@mui/material';
//@ts-ignore
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { Splide } from '@splidejs/react-splide';
import { useTranslation } from 'next-i18next';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { useResources } from '@/@core/hooks/useResources';

const Wrap = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
    height: '100vh',
    width: '100%',
  },
}));
const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 120%)',
  zIndex: 2,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Intro = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '6.25rem',
  left: 0,
  zIndex: 3,
  '.title': {
    fontSize: '5rem',
    lineHeight: '6rem',
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    bottom: '12.5rem',
    '.title': {
      fontSize: '3rem',
      lineHeight: '4rem',
      fontWeight: 400,
      color: theme.palette.common.white,
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.title': {
      fontSize: '2.75rem',
      lineHeight: '3.25rem',
      fontWeight: 400,
      color: theme.palette.common.white,
    },
  },
}));

const translateY = keyframes`
  0%   { transform: translateY(-20px);   }
  100% { transform: translateY(0px) }
`;
const ScrollToView = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '6.25rem',
  right: '4rem',
  zIndex: 3,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0 0.5rem',
  cursor: 'pointer',
  '.arrow': {
    width: '1.25rem',
    height: '1.25rem',
    overflow: 'hidden',
    svg: {
      animation: `${translateY} 1.5s infinite`,
    },
  },
  '.label': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    bottom: '2rem',
    right: '2rem',
  },
}));

const HeroSlider = styled(Splide)(({ theme }) => ({
  padding: '0',
  '.splide__pagination': {
    display: 'inline-flex',
    width: 'fit-content',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '70px',
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
  '.slide': {
    '&.is-active': {
      '.card-img': {
        opacity: 1,
        transition: 'all 2s',
      },
      '.sub-title': {
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'all 1s',
      },
      '.title': {
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'all 1.25s',
      },
      '.description': {
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'all 1.5s',
      },
      '.btn-about': {
        transform: 'translateX(0)',
        opacity: 1,
        transition: 'all 1.75s',
      },
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    '.splide__pagination': {
      bottom: '120px',
    },
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '0',
    '.splide__pagination': {
      bottom: '1.5rem',
    },
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
    '.splide__pagination': {
      bottom: '1.5rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
    '.splide__pagination': {
      bottom: '1.75rem',
    },
  },
}));

type Props = {};

const HeroSection = ({}: Props) => {
  const { t } = useTranslation('common');
  const device = useDevice();
  const { navLinks } = useResources();

  const _onScrollNextSection = () => {
    const ele = document.getElementById(navLinks[0].path);
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Wrap>
      <Box
        component="video"
        autoPlay={true}
        loop
        muted
        playsInline
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={1}
        sx={{
          objectFit: 'cover',
        }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Overlay />
      <Intro>
        <MainWrapper isFullContainer>
          <Typography className="title" variant="h1">
            DATA DRIVEN
            <br /> AI TRANSFORMTAION
          </Typography>
        </MainWrapper>
      </Intro>
      <ScrollToView onClick={_onScrollNextSection}>
        <Typography className="label" variant="body1">
          {t('common.scrollToViewMore')}
        </Typography>
        <Box component={'div'} className="arrow">
          <HeroIcons.ArrowDown />
        </Box>
      </ScrollToView>
    </Wrap>
  );
};

export default HeroSection;
