'use client';
import { memo, useEffect, useRef, useState } from 'react';
//@ts-ignore
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useDevice } from '@/@core/hooks/useDevice';
import { IPromo } from '@/@core/types/home';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { Button, styled } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import clsx from 'clsx';
import Image from 'next/image';
import { HeroIcons } from '../icons/heroIcons';
import { homeService } from '@/app/services/home';

import Link from 'next/link';

const HeroSlider = styled(Splide)(({ theme }) => ({
  overflow: 'hidden',
  borderRadius: '0.625rem',
  padding: '0',

  // '&.default-slider': {
  //   '.splide__list': {
  //     transform: 'translateX(-2000px) !important',
  //   },
  // },

  '.splide__pagination': {
    display: 'inline-flex',
    width: 'fit-content',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '1rem',
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
        backgroundColor: hexToRGBA('#00A650', 0.3),
        transition: 'all .25s',
        '&.is-active': {
          width: '3.25rem',
          transform: 'scale(1) !important',
          backgroundColor: '#00A650',
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
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {
    marginTop: '0',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
    '.splide__pagination': {
      bottom: '0.25rem',
    },
  },
}));

const Wrap = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
  left: 0,
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(-100%)',
  zIndex: 2000,
  backgroundColor: hexToRGBA(theme.palette.common.black, 0.8),
  transtion: ' all 0.25s',
  '&.active': {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0)',
    transition: 'all 0.25s',
  },
  '&.hide': {
    opacity: 0,
    transform: 'translateY(-100%)',
    visibility: 'hidden',
    transtion: 'all 0.35s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const WrapSlide = styled('div')(({ theme }) => ({
  width: 1000,
  height: 444,
  borderRadius: '0.625rem',

  transition: 'all .25s',
  position: 'relative',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {
    width: '80vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '90vw',
    height: 270,
  },
  [theme.breakpoints.down('sm')]: {
    gap: '0.75rem',
    height: 200,
    width: '95vw',
  },
}));
const CloseBtn = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: 5,
  top: `-2.5rem`,
  right: '0',
  width: '2rem',
  maxWidth: '2rem',
  minWidth: '2rem',
  height: '2rem',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: hexToRGBA('#fff', 0.3),
  transition: 'all .25s',
  '&:hover': {
    backgroundColor: hexToRGBA('#fff', 0.5),
    transition: 'all .25s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    gap: '0.75rem',
    maxWidth: '2rem',
    maxHeight: '2rem',
  },
}));

const Banner = styled('div')(({ theme }) => ({
  minWidth: '100%',
  maxWidth: '100%',
  height: '100%',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type Props = {};

const Advertisement = ({}: Props) => {
  const device = useDevice();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<IPromo[]>([]);
  const [isView, setIsView] = useState<boolean>(false);

  const fetchData = async () => {
    const res = await homeService.getMainContent<{ data: { promos: IPromo[] } }>();
    setData(res?.[1]?.data?.promos || []);
  };

  const _onClosePromo = () => {
    if (wrapRef.current) {
      wrapRef.current?.classList.add('hide');
    }
  };

  useEffect(() => {
    fetchData();

    const timer2 = setTimeout(() => {
      const splideList = document.querySelector('.wrap-slide .hero-slider') as HTMLElement;
      splideList?.classList.remove('default-slider');
    }, 2000);

    return () => {
      clearTimeout(timer2);
    };
  }, []);

  if (!data?.length) return null;

  return (
    <Wrap ref={wrapRef} className={clsx({ active: true })}>
      <WrapSlide className="wrap-slide">
        <CloseBtn aria-label="Close Advertisement" name="close" onClick={_onClosePromo}>
          <HeroIcons.Close size={12} />
        </CloseBtn>
        <HeroSlider
          role="region"
          aria-label="ASAM Advertisement Slider"
          className="hero-slider default-slider"
          onMounted={(ev) => {}}
          onReady={(ev) => {
            console.log('Ready!');
          }}
          options={{
            type: 'loop',
            rewind: true,
            perPage: 1,
            arrows: false,
            autoplay: true,
            interval: 5000,
            pauseOnHover: false,
            waitForTransition: true,
            height: device.mobile ? '200px' : device.tablet ? '270px' : '444px',
          }}
        >
          {data?.map((x, index) => (
            <SplideSlide
              aria-label={'ASAM Advertisement'}
              role="listitem"
              className="slide"
              key={index}
            >
              <Banner>
                <Link onClick={_onClosePromo} href={x?.promoUrl || '#'}>
                  <Image
                    src={x?.fileInfo?.fileUrl || '/images/pages/banners/banner-adverts.png'}
                    alt="ASAM Advertisement"
                    fill
                    unoptimized
                    priority
                    loading="eager"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
                  />
                </Link>
              </Banner>
            </SplideSlide>
          ))}
        </HeroSlider>
      </WrapSlide>
    </Wrap>
  );
};

export default memo(Advertisement);
