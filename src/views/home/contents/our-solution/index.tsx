'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
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
import SolutionCard from './SolutionCard';
import { ITechnology } from '@/@core/types/technology';
import { ISolution } from '@/@core/types/solution';
import LogoShort from '@/@core/components/icons/LogoShort';

const OurSolutionSection = () => {
  const { t } = useTranslation('common');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<SplideCore | null>(null);
  const device = useDevice();
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.news.eventNews);

  const dummyData = Array.from({ length: 3 }).map((_, index) => ({
    id: index + 1 + '',
    title:
      'Defense Reformation Defense Reformation, Defense Reformation,  Defense Reformation,Defense Reformation Defense Reformatio ' +
      (index + 1),
    desc: 'A Smart Factory uses connected devices, AI, and automation to optimize production, reduce waste, and enhance operational efficiency.',
    thumbnail: '/images/pages/home/our-solution/solution-img-1.png',
    path: '/tech/' + (index + 1),
  })) as ISolution[];

  const getAllInfosData = async () => {
    // const eventId = '4c5b6a7e8f9d1e2c3b4a5d6e7f8c9b0a';
    // const inforClosureId = '8f74fe97f1b85c3d03ff097ece0cb2e3';
    // await Promise.allSettled([
    //   dispatch(
    //     newsActions.getNewsByOrder({ params: { pageSize: 12, cateId: eventId }, key: 'eventNews' }),
    //   ),
    //   dispatch(
    //     newsActions.getNewsByOrder({
    //       params: { pageSize: 12, cateId: inforClosureId },
    //       key: 'inforClosureNews',
    //     }),
    //   ),
    // ]);
  };

  useEffect(() => {
    getAllInfosData();
  }, []);

  return (
    <Wrap>
      <Head>
        <MainWrapper>
          <Stack
            alignItems={'flex-start'}
            sx={{ marginBottom: { xs: '1rem', sm: '1rem', md: '3.5rem' } }}
          >
            <Stack direction="row" alignItems="center" gap="0 0.5rem">
              <LogoShort />
              <Typography className="sub-title">{t('homePage.solutions')}</Typography>
            </Stack>
            <SectionTitle
              dangerouslySetInnerHTML={{ __html: t('homePage.ourSolution') }}
              sx={{
                textTransform: 'initial !important',
              }}
            />
          </Stack>
        </MainWrapper>
        <MainWrapper>
          <Grid container columnSpacing={{ xs: 4, md: 10 }}>
            {dummyData?.map((x, index) => (
              <Grid item key={index} xs={12} md={4}>
                <SolutionCard data={x} />
              </Grid>
            ))}
          </Grid>
        </MainWrapper>
      </Head>
    </Wrap>
  );
};

const Head = styled(Stack)(({ theme }) => ({
  '.sub-title': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
    color: theme.palette.grey[900],
    textTransform: 'uppercase',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    '.sub-title': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
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

export default OurSolutionSection;
