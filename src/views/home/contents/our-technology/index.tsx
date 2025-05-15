'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Box, Stack, styled, Tab, Tabs, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
//@ts-ignore
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import { SectionTitle } from '@/@core/styles/common';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import type SplideCore from '@splidejs/splide';
import clsx from 'clsx';
import gsap from 'gsap';
import TechCard from './TechCard';

const OurTechnologySection = () => {
  const { t, i18n } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('llm');
  const slideRef = useRef<SplideCore | null>(null);
  const device = useDevice();
  const [_, setForUpdate] = useState<object>({});

  const technologiesData = [
    {
      // title: t('homePage.aLargeLanguageModelThatExcelsAtProcessing'),
      title: i18n.language === 'kr' ? '대규모 언어모델' : 'Large Language Model',
      category: 'LLM',
      code: 'llm',
      thumbnail: `/images/pages/home/our-technology/technology-img-1.jpg`,
    },
    {
      title: t('homePage.computerVisionRecognition'),
      category: t('homePage.visionAI'),
      code: 'visionAI',
      thumbnail: `/images/pages/home/our-technology/technology-img-2.jpg`,
    },
    {
      title: t('homePage.continueousModelDevelopment'),
      category: t('homePage.mlops'),
      code: 'mlops',
      thumbnail: `/images/pages/home/our-technology/technology-img-3.jpg`,
    },
    {
      title: t('homePage.roboticProcessAutomation'),
      category: t('homePage.rpa'),
      code: 'rpa',
      thumbnail: `/images/pages/home/our-technology/technology-img-4.jpg`,
    },
  ];

  useEffect(() => {
    setForUpdate({});
  }, [i18n.language]);

  const _onChangeTab = (_: unknown, v: string) => {
    setActTab(v);
    const index = technologiesData.findIndex(({ code }) => code === v);
    slideRef.current.go(index);
  };

  const _onDrag = (ev) => {
    const listSlide = ev.Components.Slides;
    listSlide.forEach(({ slide }) => {
      if (slide.className.includes('is-active'))
        return gsap.to(slide, {
          opacity: 1,
          scale: 0.88,
        });
      gsap.to(slide, {
        opacity: 0.5,
        scale: 0.88,
      });
    });
  };
  const _onDragged = (ev) => {
    const listSlide = ev.Components.Slides;
    listSlide.forEach(({ slide }) => {
      gsap.to(slide, {
        opacity: 1,
        scale: 1,
      });
    });
  };

  return (
    <Wrap id="technology">
      <Head>
        <MainWrapper>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'flex-end' }}
            justifyContent={'space-between'}
            sx={{ marginBottom: { xs: '1rem', sm: '1rem', md: '3.5rem' } }}
            gap={4}
          >
            <Stack
              alignItems={'flex-start'}
              sx={{ marginBottom: { xs: '1rem', sm: '0', md: '0' } }}
              maxWidth="850px"
            >
              <Stack direction="row" alignItems="center" gap="0 0.5rem" mb="0.5rem">
                <LogoShort />
                <Typography className="sub-title">{t('homePage.technology')}</Typography>
              </Stack>
              <SectionTitle
                dangerouslySetInnerHTML={{
                  __html: t('homePage.weFocusOnTheAIDiffusion'),
                }}
                sx={{
                  textTransform: 'initial !important',
                }}
              />
            </Stack>

            <TabStyle value={actTab} onChange={_onChangeTab}>
              {technologiesData.map((technology, index) => (
                <Tab key={index} value={technology.code} label={technology.category} />
              ))}
            </TabStyle>
          </Stack>
        </MainWrapper>
        <Box component="div" className="splide__track">
          <NewsSlider
            ref={slideRef}
            onDrag={_onDrag}
            onDragged={_onDragged}
            className="hero-slider"
            options={{
              type: 'loop',
              perPage: 1,
              padding: device.mobile ? '5%' : device.tablet ? '10%' : '20%',
              perMove: 1,
              arrows: false,
              pagination: false,
              lazyLoad: false, // 👈 ensure all slides render
              ...(device.mobile ? { gap: '1rem' } : { gap: '3rem' }),
            }}
            onMoved={(ev) => {
              // setActiveSlide(ev.index);
            }}
          >
            {technologiesData?.map((x, index) => (
              <SplideSlide className={clsx('slide', { first: index === 0 })} key={index}>
                <TechCard data={x} />
              </SplideSlide>
            ))}
          </NewsSlider>
        </Box>
        {/* <MainWrapper>
          <Navigation direction={'row'} alignItems={'center'}>
            <div className="line" />
            <Stack direction={'row'} alignItems={'center'} gap={4}>
              <Arrow
                className={clsx('left', { active: !indexSlide.first })}
                variant="outlined"
                onClick={_onNavigation('prev')}
              >
                <HeroIcons.ChevronLeft className="icon" size={20} />
              </Arrow>
              <Arrow
                className={clsx('right', { active: !indexSlide.last })}
                variant="outlined"
                onClick={_onNavigation('next')}
              >
                <HeroIcons.ChevronRight className="icon" size={20} />
              </Arrow>
            </Stack>
          </Navigation>
        </MainWrapper> */}
      </Head>
    </Wrap>
  );
};

// const Navigation = styled(Stack)(({ theme }) => ({
//   gap: '0 2rem',
//   '.line': {
//     content: `''`,
//     width: '100%',
//     height: '1px',
//     backgroundColor: theme.palette.text.neutral300,
//     display: 'block',
//   },
//   [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
//   [theme.breakpoints.down('lg')]: {},
//   [theme.breakpoints.down('md')]: {},
//   [theme.breakpoints.down('sm')]: {},
// }));

// const Arrow = styled(Button)(({ theme }) => ({
//   width: '3.5rem',
//   minWidth: '3.5rem',
//   height: '3.5rem',
//   borderRadius: '50%',
//   borderColor: 'transparent',
//   transition: 'all .25s',
//   '.icon': {
//     minWidth: '1.25rem',
//     color: theme.palette.text.black600,
//   },
//   '&.active, &:hover': {
//     borderColor: theme.palette.primary.main,
//     '.icon': {
//       color: theme.palette.primary.main,
//     },
//     transition: 'all .25s',
//   },

//   [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
//   [theme.breakpoints.down('lg')]: {
//     minWidth: '2.5rem',
//     maxWidth: '2.5rem',
//     padding: 0,
//   },
//   [theme.breakpoints.down('md')]: {
//     minWidth: '2.5rem',
//     maxWidth: '2.5rem',
//     padding: 0,
//   },
//   [theme.breakpoints.down('sm')]: {
//     minWidth: '2.5rem',
//     maxWidth: '2.5rem',
//     padding: 0,
//   },
// }));

const TabStyle = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-scroller': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.MuiTabs-indicator': {
    display: 'none',
  },
  '.MuiTabs-flexContainer': {
    gap: '0 0.5rem',
  },
  marginBottom: '0rem',
  button: {
    minWidth: '100px',
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: '0.325rem',
    color: theme.palette.grey[400],
    textTransform: 'initial',
    transition: 'all .25s',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      borderColor: theme.palette.grey[800],
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    button: {
      minWidth: '65px',
    },
  },
  [`@media (min-width: 320px) and (max-width: 767 px)`]: {
    button: {
      minWidth: '45px',
      padding: '0.5rem 0.75rem',
    },
    marginBottom: '1rem',
  },
}));

const NewsSlider = styled(Splide)(({ theme }) => ({
  '.splide__slide': {
    transition: 'all .45s cubic-bezier(0, 0.7, 0.3, 0.9)',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {
    marginTop: '0',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
  },
}));

const Head = styled(Stack)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Wrap = styled('section')(({ theme }) => ({
  padding: '100px 0',
  background: theme.palette.common.white,
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    padding: '50px 0',
  },
}));

export default OurTechnologySection;
