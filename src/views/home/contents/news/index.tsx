'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Button, Stack, styled } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';
//@ts-ignore
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import NewCard from '@/@core/components/new-card';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import Tabs from '@/@core/components/tabs';
import { useDevice } from '@/@core/hooks/useDevice';
import { SectionTitle } from '@/@core/styles/common';
import { useAppDispatch, useAppSelector } from '@/infra/store';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import type SplideCore from '@splidejs/splide';
import { newsActions } from '@/app/reducers/news';

const NewSection = () => {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState<'informationDisclosure' | 'events'>('events');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<SplideCore | null>(null);
  const device = useDevice();
  const dispatch = useAppDispatch();

  const eventNewsData = useAppSelector((state) => state.news.eventNews);
  const inforClosureData = useAppSelector((state) => state.news.inforClosureNews);

  const indexSlide = useMemo(
    () => ({
      first: activeSlide === 0,
      last: activeSlide === slideRef.current?.splides?.length - slideRef.current?.options?.perPage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeSlide, eventNewsData, inforClosureData, slideRef.current],
  );

  const data = useMemo(
    () => (activeTab === 'events' ? eventNewsData : inforClosureData),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTab, JSON.stringify(eventNewsData), JSON.stringify(inforClosureData)],
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

  const tabs = [
    {
      label: t('newsPage.events'),
      key: 'events',
    },
    {
      label: t('newsPage.informationDisclosure'),
      key: 'informationDisclosure',
    },
  ];
  const prefixPath =
    activeTab === 'events' ? '/event-news/asam-events/' : '/event-news/information-disclosure/';

  const getAllInfosData = async () => {
    const eventId = '4c5b6a7e8f9d1e2c3b4a5d6e7f8c9b0a';
    const inforClosureId = '8f74fe97f1b85c3d03ff097ece0cb2e3';
    await Promise.allSettled([
      dispatch(
        newsActions.getNewsByOrder({ params: { pageSize: 12, cateId: eventId }, key: 'eventNews' }),
      ),
      dispatch(
        newsActions.getNewsByOrder({
          params: { pageSize: 12, cateId: inforClosureId },
          key: 'inforClosureNews',
        }),
      ),
    ]);
  };

  useEffect(() => {
    getAllInfosData();
  }, []);

  return (
    <Container>
      <Head>
        <MainWrapper>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{ marginBottom: { xs: '1rem', sm: '1rem', md: '3.5rem' } }}
            gap={4}
          >
            <SectionTitle dangerouslySetInnerHTML={{ __html: t('homePage.updateDateNew') }} />
          </Stack>

          <Tabs
            list={tabs}
            activeTab={activeTab}
            onChangedTab={(key) => setActiveTab(key as typeof activeTab)}
            tabListSxProps={{
              paddingBottom: '1rem',
              borderBottom: `1px solid #595959`,
            }}
          />
        </MainWrapper>
        <MainWrapper
          sxProps={{
            '.splide__track': {},
          }}
        >
          <NewsSlider
            ref={slideRef}
            className="hero-slider"
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
                <NewCard prefixPath={prefixPath} data={x} />
              </SplideSlide>
            ))}
          </NewsSlider>
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
    padding: 0,
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    padding: 0,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '2.5rem',
    maxWidth: '2.5rem',
    padding: 0,
  },
}));

const NewsSlider = styled(Splide)(({ theme }) => ({
  padding: '2.5rem 0',
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

export default NewSection;
