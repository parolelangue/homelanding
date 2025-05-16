'use client';
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useDevice } from '@/@core/hooks/useDevice';
import { useGetZoom } from '@/@core/hooks/useGetZoom';
import { SectionTitle } from '@/@core/styles/common';
import { useGSAP } from '@gsap/react';
import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import React, { useMemo, useRef } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Flow = () => {
  const { t } = useTranslation('common');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const device = useDevice();
  const zoom = useGetZoom();

  const flowsData = useMemo(
    () => [
      {
        title: t('homePage.decisionAutomation'),
        desc: t('homePage.decisionAutomationDesc'),
        image: '/images/pages/home/flow/flow-img-1.jpg',
      },
      {
        title: t('homePage.processAndFlow'),
        desc: t('homePage.processAndFlowDesc'),
        image: '/images/pages/home/flow/flow-img-2.jpg',
      },
      {
        title: t('homePage.linkedData'),
        desc: t('homePage.linkedDataDesc'),
        image: '/images/pages/home/flow/flow-img-3.jpg',
      },
      {
        title: t('homePage.dataLake'),
        desc: t('homePage.dataLakeDesc'),
        image: '/images/pages/home/flow/flow-img-4.jpg',
      },
    ],
    [t],
  );

  useGSAP(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card: HTMLDivElement, idx: number) => {
      const index = idx;
      const itemSecondOffset = idx === 1 ? 5 : 0;
      const defaultW = device.tablet ? window.innerWidth || window.outerWidth : window.outerWidth;

      // ------ Check small width screen ----- //
      const genW = () => {
        if (344 <= defaultW && defaultW <= 365) return 48;
        if (800 <= defaultW && defaultW <= 860) return 35;
        if (1200 <= defaultW) return 55;
        return 45;
      };
      const genPercentOffset = () => {
        if (530 <= defaultW && defaultW <= 799) return 70;
        if (device.mobile) return 60;
        return 62;
      };

      const top = genW() + index * (genPercentOffset() + itemSecondOffset);
      const cardHeight = card.getBoundingClientRect().height || 800;
      const offsetTop = cardHeight - 150;

      gsap.fromTo(
        card,
        {
          opacity: 1,
          top: `${top}%`,
          ease: 'power1.out',
        },
        {
          opacity: 1,
          top: `${top - index * genPercentOffset()}%`,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: `top top+=${offsetTop + index * -100}`,
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        cards[index - 1],
        {
          scale: 1,
          opacity: 1,
          ease: 'power1.out',
        },
        {
          scale: 0.8,
          opacity: 0.6,
          transformOrigin: 'center center',
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: device.mobile ? 'top+=5% center' : 'top+=35% center',
            // end: device.mobile ? 'top-=5% center' : 'top-=35% center',
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [window.innerWidth, zoom]);

  return (
    <Section ref={sectionRef} id="flow">
      <MainWrapper>
        <div className="section-wrap">
          <div className="wrap">
            <div className="sticky">
              <MainWrapper sxProps={{ position: 'relative', height: { xs: '80%', md: 'auto' } }}>
                <Stack
                  alignItems={'flex-start'}
                  className="head"
                  sx={{
                    paddingTop: { xs: '10px', xl: '120px' },
                    position: 'absolute',
                    left: 0,
                    top: { xs: '-20px', md: '100px', lg: '75px', xl: '0' },
                  }}
                >
                  <Stack direction="row" alignItems="center" gap="0 0.5rem" mb="0.5rem">
                    <LogoShort />
                    <Typography className="sub-title">{t('homePage.whatAreWeDoing')}</Typography>
                  </Stack>
                  <SectionTitle
                    dangerouslySetInnerHTML={{
                      __html: t('homePage.weSolveYourProblemsBasedOnData'),
                    }}
                    sx={{
                      textTransform: 'initial !important',
                    }}
                  />
                </Stack>
                <div className="content">
                  {flowsData.map((flow, index) => (
                    <Card
                      className={`card frame-${index + 1}`}
                      style={{ '--frame-index': `${index * 25}%` } as React.CSSProperties}
                      key={index}
                      id={`frame-${index + 1}`}
                      sx={{
                        ...((zoom === 150 || zoom === 100) &&
                        (device.desktop || device.desktopLarge) &&
                        window.innerWidth < 1920
                          ? { height: '500px !important' }
                          : {}),
                      }}
                    >
                      <Grid container height="100%" gap={{ xs: '0.5rem', md: '0' }}>
                        <Grid item xs={12} md={3} lg={3} paddingRight="1rem">
                          <Typography className="sub-title">0{index + 1}</Typography>
                          <Typography className="title">{flow.title}</Typography>
                          <Typography className="desc">{flow.desc}</Typography>
                        </Grid>
                        <Grid item xs={12} md={9} lg={9} height="100%">
                          <Box component={'div'} className="box-img">
                            <img src={flow.image} />
                          </Box>
                        </Grid>
                      </Grid>
                    </Card>
                  ))}
                </div>
              </MainWrapper>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Section>
  );
};

const Section = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  '.section-wrap': {
    height: '450vh',
    position: 'relative',
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  '.wrap': {
    width: '100%',
    height: '450vh',
    position: 'absolute',
    top: 0,
    zIndex: 4,
    overflow: 'visible',
  },
  '.sticky': {
    height: '100vh',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    overflow: 'hidden',
    width: '100%',
    willChange: 'transform',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.content': {
    height: '100vh',
    position: 'sticky',
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  // Animation rotate
  // '.content': {
  //   height: 'auto',
  //   position: 'relative',
  //   width: '100%',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // '.frame': {
  //   height: 'min-content',
  //   overflow: 'visible',
  //   position: 'relative',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // '.cube': {
  //   overflow: 'visible',
  //   position: 'relative',
  //   transformStyle: 'preserve-3d',
  //   aspectRatio: '1/1',
  //   willChange: 'transform',
  //   opacity: 1,
  //   width: '150px',
  //   height: '150px',

  //   '.frame-1': {
  //     aspectRatio: '1/1',
  //     width: '200px',
  //     height: '200px',
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     overflow: 'visible',
  //     backfaceVisibility: 'hidden',
  //     transform: 'translate(-50%, -50%) translateZ(100px)',
  //     opacity: 1,
  //     '.detail': {
  //       transform: 'translate(-50%, -50%)',
  //       opacity: 1,
  //       position: 'absolute',
  //       left: '50%',
  //       top: '50%',
  //       whiteSpace: 'pre',
  //       width: 'auto',
  //       height: 'auto',
  //       zIndex: 1,
  //     },
  //   },
  //   '.frame-2': {
  //     aspectRatio: '1/1',
  //     width: '200px',
  //     height: '200px',
  //     position: 'absolute',
  //     top: '-115px',
  //     left: '50%',
  //     overflow: 'visible',
  //     backfaceVisibility: 'hidden',
  //     transform: 'translateX(-50%) rotateX(90deg)',
  //     opacity: 1,
  //     '.detail': {
  //       transform: 'translate(-50%, -50%)',
  //       opacity: 1,
  //       position: 'absolute',
  //       left: '50%',
  //       top: '50%',
  //       whiteSpace: 'pre',
  //       width: 'auto',
  //       height: 'auto',
  //       zIndex: 1,
  //     },
  //   },
  //   '.frame-3': {
  //     //   aspectRatio: '1/1',
  //     width: '200px',
  //     height: '200px',
  //     position: 'absolute',
  //     top: 'calc(50.00000000000002% - 200px / 2)',
  //     left: 'calc(50.00000000000002% - 200px / 2)',
  //     overflow: 'visible',
  //     backfaceVisibility: 'hidden',
  //     transform: 'rotateX(180deg) translateZ(100px)',
  //     opacity: 1,
  //     '.detail': {
  //       transform: 'translate(-50%, -50%)',
  //       opacity: 1,
  //       position: 'absolute',
  //       left: '50%',
  //       top: '50%',
  //       whiteSpace: 'pre',
  //       width: 'auto',
  //       height: 'auto',
  //       zIndex: 1,
  //     },
  //   },
  //   '.frame-4': {
  //     width: '200px',
  //     height: '200px',
  //     position: 'absolute',
  //     bottom: '-115px',
  //     left: 'calc(50.00000000000002% - 200px / 2)',
  //     overflow: 'visible',
  //     backfaceVisibility: 'hidden',
  //     transform: 'rotateX(-90deg)',
  //     '.detail': {
  //       transform: 'translate(-50%, -50%)',
  //       opacity: 1,
  //       position: 'absolute',
  //       left: '49%',
  //       top: '50%',
  //       whiteSpace: 'pre',
  //       width: 'auto',
  //       height: 'auto',
  //       zIndex: 1,
  //     },
  //   },
  //   '.title': {
  //     fontSize: '10rem',
  //     lineHeight: '200px',
  //     color: theme.palette.common.white,
  //     textTransform: 'uppercase',
  //     fontWeight: 700,
  //     whiteSpace: 'nowrap',
  //   },
  //   img: {
  //     width: '200px',
  //     height: '200px',
  //   },
  // },
  [`@media (min-width: 2200px) and (max-width: 2560px)`]: {
    '.head': {
      top: '70px',
    },
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    '.section-wrap': {
      height: '450vh',
    },
    '.wrap': {
      height: '450vh',
      '.content': {
        height: '100vh',
        marginTop: '3rem',
      },
    },
    '.head': {},
  },
  // [`@media (min-width: 320px)`]: {
  //   '.head': {
  //     top: '100px',
  //   },
  // },
}));
const Card = styled('div')(({ theme }) => ({
  width: '80vw',
  maxWidth: '100%',
  height: '720px',
  padding: '1.5rem 2.5rem',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  position: 'absolute',
  left: '50%',
  transform: ' translateX(-50%) translateY(-50%)',
  boxShadow: '0px 2px 30px 0px rgba(50, 50, 50, 0.08)',
  backgroundColor: theme.palette.common.white,
  transition: 'all .45s cubic-bezier(0, 0.7, 0.3, 0.9)',
  '.sub-title': {
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
    lineHeight: '2rem',
    fontWeight: 500,
    marginTop: '1.5rem',
  },
  '.title': {
    fontSize: '2rem',
    color: theme.palette.grey[900],
    lineHeight: '2.5rem',
    fontWeight: 600,
    margin: '1.5rem 0 0.5rem 0',
  },
  '.desc': {
    fontSize: '1rem',
    color: theme.palette.grey[900],
    lineHeight: '1.5rem',
    fontWeight: 400,
  },
  '.box-img': {
    width: '100%',
    height: '100%',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    position: 'relative',
    // '&:after': {
    //   content: `''`,
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: hexToRGBA('#000', 0.4),
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%,-50%)',
    //   zIndex: 2,
    // },
    img: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  [`@media (min-width: 2200px) and (max-width: 2560px)`]: {
    width: '90vw',
    height: '720px',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 2199px)`]: {
    width: '90vw',
    height: '640px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '90vw',
    height: '540px',
  },
  [theme.breakpoints.down('md')]: {
    width: '90vw',
    height: '540px',
  },
  [`@media (min-width: 768px) and (max-width: 919px)`]: {
    width: '90vw',
    height: '640px',
    '.sub-title': {
      marginTop: '0rem',
    },
    '.box-img': {
      height: 'auto',
    },
    '.desc': {
      marginBottom: '0.5rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '90vw',
    height: 'fit-content',
    minHeight: '55vh',
    padding: '1rem',
    '.sub-title': {
      marginTop: '0rem',
    },
    '.title': {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      margin: '0.5rem 0',
    },
    '.desc': {
      marginBottom: '0.5rem',
    },
  },
}));

export default Flow;
