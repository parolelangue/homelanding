'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Box, styled } from '@mui/material';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useCallback, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Flow = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const flows = Array.from({ length: 4 }, (_, index) => ({
    title: 'Process & Flow ' + (index + 1),
    desc: 'We are an AI-driven company focused on solving real-world problems through intelligent, scalable solutions that improve efficiency,',
    image: `/images/pages/home/our-solution/solution-img-1.png`,
  }));

  useGSAP(() => {
    const _onScrollRotate = () => {
      const scrollY = window.scrollY;
      const rotateX = scrollY / 5;
      const cube = document.querySelector('.cube') as HTMLDivElement;
      cube.style.transform = `perspective(1200px)  rotateX(${rotateX}deg)`;
    };

    window.addEventListener('scroll', _onScrollRotate);

    return () => {
      window.removeEventListener('scroll', _onScrollRotate);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} id="smooth-content">
      <div className="wrap">
        <div className="sticky">
          <div className="content">
            <div className="frame" ref={frameRef}>
              <div className="cube">
                {flows.map((flow, index) => (
                  <Card className={`frame-${index + 1}`} key={index} id={`frame-${index + 1}`}>
                    <div className="detail">
                      {/* <img src={flow.image} className="img" /> */}
                      <h5 className="title">{flow.title}</h5>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled('section')(({ theme }) => ({
  height: '200vh',
  position: 'relative',
  zIndex: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
  '.wrap': {
    height: '200vh',
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
    overflow: 'visible',
    width: '1px',
    willChange: 'transform',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.content': {
    height: 'auto',
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.frame': {
    height: 'min-content',
    overflow: 'visible',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.cube': {
    overflow: 'visible',
    position: 'relative',
    transformStyle: 'preserve-3d',
    aspectRatio: '1/1',
    willChange: 'transform',
    opacity: 1,
    width: '150px',
    height: '150px',

    '.frame-1': {
      aspectRatio: '1/1',
      width: '200px',
      height: '200px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      overflow: 'visible',
      backfaceVisibility: 'hidden',
      transform: 'translate(-50%, -50%) translateZ(100px)',
      opacity: 1,
      '.detail': {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        position: 'absolute',
        left: '50%',
        top: '50%',
        whiteSpace: 'pre',
        width: 'auto',
        height: 'auto',
        zIndex: 1,
      },
    },
    '.frame-2': {
      aspectRatio: '1/1',
      width: '200px',
      height: '200px',
      position: 'absolute',
      top: '-115px',
      left: '50%',
      overflow: 'visible',
      backfaceVisibility: 'hidden',
      transform: 'translateX(-50%) rotateX(90deg)',
      opacity: 1,
      '.detail': {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        position: 'absolute',
        left: '50%',
        top: '50%',
        whiteSpace: 'pre',
        width: 'auto',
        height: 'auto',
        zIndex: 1,
      },
    },
    '.frame-3': {
      //   aspectRatio: '1/1',
      width: '200px',
      height: '200px',
      position: 'absolute',
      top: 'calc(50.00000000000002% - 200px / 2)',
      left: 'calc(50.00000000000002% - 200px / 2)',
      overflow: 'visible',
      backfaceVisibility: 'hidden',
      transform: 'rotateX(180deg) translateZ(100px)',
      opacity: 1,
      '.detail': {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        position: 'absolute',
        left: '50%',
        top: '50%',
        whiteSpace: 'pre',
        width: 'auto',
        height: 'auto',
        zIndex: 1,
      },
    },
    '.frame-4': {
      width: '200px',
      height: '200px',
      position: 'absolute',
      bottom: '-115px',
      left: 'calc(50.00000000000002% - 200px / 2)',
      overflow: 'visible',
      backfaceVisibility: 'hidden',
      transform: 'rotateX(-90deg)',
      '.detail': {
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        position: 'absolute',
        left: '49%',
        top: '50%',
        whiteSpace: 'pre',
        width: 'auto',
        height: 'auto',
        zIndex: 1,
      },
    },
    '.title': {
      fontSize: '10rem',
      lineHeight: '200px',
      color: theme.palette.common.white,
      textTransform: 'uppercase',
      fontWeight: 700,
      whiteSpace: 'nowrap',
    },
    img: {
      width: '200px',
      height: '200px',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const Card = styled('div')(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default Flow;
