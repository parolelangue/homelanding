'use client';
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { SectionTitle } from '@/@core/styles/common';
import { useGSAP } from '@gsap/react';
import { Stack, styled, Tab, Tabs, Typography } from '@mui/material';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const OrganizationSection = () => {
  const { t } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('techstacks');

  const _onChangeTab = (_: unknown, v: string) => {
    setActTab(v);
  };

  useGSAP(() => {
    const img = document.querySelector('.img-wrap');
    gsap.fromTo(
      img,
      { opacity: 0.7, scale: 0.9, duration: 0.6, ease: 'power1.inOut' },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power1.inOut', stagger: 0.2 },
    );
  }, [actTab]);

  return (
    <Wrap id="organization">
      <Head>
        <MainWrapper>
          <Stack
            alignItems={'center'}
            sx={{ marginBottom: { xs: '1rem', sm: '1rem', md: '3.5rem' } }}
          >
            <Stack direction="row" alignItems="center" gap="0 0.5rem" mb="0.5rem">
              <LogoShort />
              <Typography className="sub-title">{t('homePage.organization')}</Typography>
            </Stack>
            <SectionTitle
              dangerouslySetInnerHTML={{
                __html: t('homePage.weProvideITServicesWideTechStack'),
              }}
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
          <ImgWraper className="img-wrap">
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
  minHeight: '750px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    width: '100%',
    height: 'auto',
    transform: 'scale(0.9)',
    opacity: 0,
    borderRadius: '1.25rem',
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
  [theme.breakpoints.down('sm')]: {
    height: '250px',
    minHeight: '250px',
    img: {
      height: '100%',
      objectFit: 'cover',
    },
  },
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
  // background: theme.palette.common.white,
  background: `linear-gradient(181deg, #FFF 0.48%, rgba(255, 255, 255, 0.00) 69.19%), linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 38.82%), url('/images/pages/home/organization/blur-organization.png') lightgray 50% / cover no-repeat`,
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    padding: '80px 0',
  },
}));

export default OrganizationSection;
