'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Grid, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
//@ts-ignore
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import { SectionTitle } from '@/@core/styles/common';
import { ISolution } from '@/@core/types/solution';
import { useAppDispatch, useAppSelector } from '@/infra/store';
import type SplideCore from '@splidejs/splide';

const OrganizationSection = () => {
  const { t } = useTranslation('common');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideRef = useRef<SplideCore | null>(null);
  const device = useDevice();
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.news.eventNews);

  return (
    <Wrap>
      <Head>
        <MainWrapper>
          <Stack
            alignItems={'center'}
            sx={{ marginBottom: { xs: '1rem', sm: '1rem', md: '3.5rem' } }}
          >
            <Stack direction="row" alignItems="center" gap="0 0.5rem">
              <LogoShort />
              <Typography className="sub-title">{t('homePage.organization')}</Typography>
            </Stack>
            <SectionTitle
              dangerouslySetInnerHTML={{ __html: t('homePage.techniciansAreWaitingForYouInHcmc') }}
              sx={{
                textTransform: 'initial !important',
                textAlign: 'center',
                mt: '1rem',
              }}
            />
          </Stack>
        </MainWrapper>
        <MainWrapper>aa</MainWrapper>
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

export default OrganizationSection;
