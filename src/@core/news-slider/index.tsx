import { WIDTH_MEDIUM } from '@/@core/configs';
import { Button, Stack, styled } from '@mui/material';
import clsx from 'clsx';
import { useMemo, useRef, useState } from 'react';
//@ts-ignore
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import NewCard from '@/@core/components/new-card';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import { SectionTitle } from '@/@core/styles/common';
import { useAppSelector } from '@/infra/store';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import type SplideCore from '@splidejs/splide';

type Props = {
  title: string;
  direction?: 'vertical' | 'horizontal';
  smallCard?: boolean;
};

const NewsSlider = ({ title, direction = 'horizontal', smallCard = false }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<SplideCore | null>(null);
  const device = useDevice();

  const eventNewsData = useAppSelector((state) => state.news.eventNews);

  const indexSlide = useMemo(
    () => ({
      first: activeSlide === 0,
      last: activeSlide === slideRef.current?.splides?.length - slideRef.current?.options?.perPage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeSlide, eventNewsData, slideRef.current],
  );

  const data = useMemo(
    () => eventNewsData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(eventNewsData)],
  );

  const _onNavigation = (type: 'prev' | 'next') => () => {
    if (
      !slideRef.current ||
      (indexSlide.first && type === 'prev') ||
      (indexSlide.last && type === 'next')
    )
      return;
    slideRef.current.go(type === 'prev' ? '<' : '>');
  };

  const prefixPath = '/event-news/asam-events';

  return (
    <Container>
      <Head>
        <SectionTitle
          className={clsx({ small: smallCard })}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {direction === 'horizontal' && (
          <>
            <MainWrapper
              sxProps={{
                '.splide__track': {},
              }}
            >
              <Slider
                ref={slideRef}
                className={clsx('hero-slider', {
                  small: smallCard,
                })}
                options={{
                  type: 'slide',
                  perPage: device.mobile ? 1 : device.tablet || device.desktop ? 2 : 3,
                  perMove: 1,
                  arrows: false,
                  pagination: false,
                  gap: '1rem',
                  trimSpace: true,
                }}
                onMoved={(ev) => {
                  setActiveSlide(ev.index);
                }}
              >
                {data?.map((x, index) => (
                  <SplideSlide className="slide" key={index}>
                    <NewCard smallCard={smallCard} prefixPath={prefixPath} data={x} />
                  </SplideSlide>
                ))}
              </Slider>
            </MainWrapper>
            <MainWrapper>
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
            </MainWrapper>
          </>
        )}
        {direction === 'vertical' && (
          <Stack gap={2}>
            {eventNewsData?.map((x, index) => (
              <NewCard prefixPath={prefixPath} data={x} key={index} />
            ))}
          </Stack>
        )}
      </Head>
    </Container>
  );
};

const Navigation = styled(Stack)(({ theme }) => ({
  gap: '0 2rem',
  '.line': {
    content: `''`,
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.text.neutral300,
    display: 'block',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Arrow = styled(Button)(({ theme }) => ({
  width: '3.5rem',
  minWidth: '3.5rem',
  height: '3.5rem',
  borderRadius: '50%',
  borderColor: 'transparent',
  transition: 'all .25s',
  '.icon': {
    minWidth: '1.25rem',
    color: theme.palette.text.black600,
  },
  '&.active, &:hover': {
    borderColor: theme.palette.primary.main,
    '.icon': {
      color: theme.palette.primary.main,
    },
    transition: 'all .25s',
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    maxHeight: '2.5rem',
    padding: 0,
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    maxHeight: '2.5rem',
    padding: 0,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    padding: 0,
    maxHeight: '2.5rem',
  },
}));

const Slider = styled(Splide)(({ theme }) => ({
  padding: '2.5rem 0',
  '&.small': {
    padding: '2rem 0',
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

const Container = styled('section')(({ theme }) => ({
  padding: '85px 0',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default NewsSlider;
