'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Stack, styled, Tab, Tabs, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
//@ts-ignore
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import { SectionTitle } from '@/@core/styles/common';
import { useAppDispatch, useAppSelector } from '@/infra/store';

const OrganizationSection = () => {
  const { t } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('techstacks');
  const device = useDevice();
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.news.eventNews);

  const _onChangeTab = (_: unknown, v: string) => {
    setActTab(v);
  };

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
        <MainWrapper>
          <TabStyle value={actTab} onChange={_onChangeTab} centered>
            <Tab value="techstacks" label={t('homePage.techstacks')} />
            <Tab value="teams" label={t('homePage.teams')} />
          </TabStyle>
          <ImgWraper>
            {actTab === 'techstacks' && (
              <img
                className="active"
                src="/images/pages/home/organization/organization-img-2.jpg"
              />
            )}
            {actTab === 'teams' && (
              <img
                className="active"
                src="/images/pages/home/organization/organization-img-1.jpg"
              />
            )}
          </ImgWraper>
        </MainWrapper>
      </Head>
    </Wrap>
  );
};

const TabStyle = styled(Tabs)(({ theme }) => ({
  marginBottom: '2rem',
  '.MuiTabs-scroller': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.MuiTabs-indicator': {
    display: 'none',
  },
  '.MuiTabs-centered': {
    padding: '0.25rem',
    display: 'inline-flex',
    backgroundColor: theme.palette.grey[100],
    margin: '0 auto',
    borderRadius: '1.5rem',
  },
  button: {
    minWidth: '130px',
    backgroundColor: theme.palette.grey[100],
    borderRadius: '1.25rem',
    color: theme.palette.grey[400],
    transition: 'all .25s',
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      backgroundColor: theme.palette.common.white,
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const ImgWraper = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    width: '100%',
    height: 'auto',
    transform: 'scale(0.9)',
    opacity: 0,
    transition: 'all .25s',
    '&.active': {
      transform: 'scale(1)',
      opacity: 1,
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

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
