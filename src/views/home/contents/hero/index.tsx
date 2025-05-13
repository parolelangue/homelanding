'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Box, keyframes, styled, Typography } from '@mui/material';
//@ts-ignore
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
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
    width: '100%',
    height: '90vh',
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
  [theme.breakpoints.down('sm')]: {
    height: '90vh',
  },
}));

const Intro = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '6.25rem',
  left: 0,
  zIndex: 3,
  '.title': {
    fontSize: '5rem',
    lineHeight: '6rem',
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    bottom: '12.5rem',
    '.title': {
      fontSize: '3rem',
      lineHeight: '4rem',
      fontWeight: 500,
      color: theme.palette.common.white,
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.title': {
      fontSize: '2.5rem',
      lineHeight: '3.25rem',
    },
  },
  [`@media (min-width: 320px) and (max-width: 375px)`]: {
    '.title': {
      fontSize: '2rem',
      lineHeight: '3.25rem',
    },
  },
}));

const translateY = keyframes`
  0%   { transform: translateY(-20px);   }
  100% { transform: translateY(0px) }
`;
const ScrollToView = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '4rem',
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
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    bottom: '2rem',
    right: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: '2rem',
    right: '2rem',
  },
}));

type Props = {};

const HeroSection = ({}: Props) => {
  const { t } = useTranslation('common');
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
        <source src="/videos/AI_Transformation_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Overlay />
      <Intro>
        <MainWrapper isFullContainer>
          <Box
            component={'h1'}
            className="title"
            dangerouslySetInnerHTML={{ __html: t('homePage.dataDrivenAITransformation') }}
          />
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
