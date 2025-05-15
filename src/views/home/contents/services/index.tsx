'use client';
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { SectionTitle } from '@/@core/styles/common';
import { Grid, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('factory');

  const serviceData = useMemo(
    () => [
      {
        title: t('homePage.swTesting'),
        desc: t('homePage.swTestingDesc'),
        path: '',
        img: '/images/pages/home/services/service-img-1.png',
        colSpan: {
          xs: 12,
          md: 6,
          xl: 5,
        },
      },
      {
        title: t('homePage.serviceDesk'),
        desc: t('homePage.serviceDeskDesc'),
        path: '',
        img: '/images/pages/home/services/service-img-2.png',
        colSpan: {
          xs: 12,
          md: 6,
          xl: 7,
        },
      },
      {
        title: t('homePage.dataIntegration'),
        desc: t('homePage.dataIntegrationDesc'),
        path: '',
        img: '/images/pages/home/services/service-img-3.png',
        colSpan: {
          xs: 12,
          md: 6,
          xl: 7,
        },
      },
      {
        title: t('homePage.digitalContents'),
        desc: t('homePage.digitalContentsDesc'),
        path: '',
        img: '/images/pages/home/services/service-img-4.png',
        colSpan: {
          xs: 12,
          md: 6,
          xl: 5,
        },
      },
    ],
    [actTab, t],
  );

  return (
    <Wrap id="services">
      <MainWrapper>
        <Head>
          <Stack alignItems={'flex-start'} sx={{ marginBottom: { xs: '1rem', sm: '0', md: '0' } }}>
            <Stack direction="row" alignItems="center" gap="0 0.5rem" mb="0.5rem">
              <LogoShort />
              <Typography className="sub-title">{t('homePage.services')}</Typography>
            </Stack>
            <SectionTitle
              dangerouslySetInnerHTML={{
                __html: t('homePage.humanComputingServicesForDigitalTransformation'),
              }}
              sx={{
                textTransform: 'initial !important',
              }}
            />
          </Stack>
          <Grid item xs={12} md={7} lg={7} xl={9} mt={{ xs: '1.5rem', md: '2.5rem' }}>
            <Grid container columnSpacing={{ xs: 4, xl: 10 }} rowSpacing={{ xs: 6, xl: 10 }}>
              {serviceData?.map((x, index) => (
                <Grid item key={index} xs={x.colSpan.xs} md={x.colSpan.md} xl={x.colSpan.xl}>
                  <ServiceCard data={x} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Head>
      </MainWrapper>
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

export default ServicesSection;
