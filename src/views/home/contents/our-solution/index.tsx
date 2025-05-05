'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import LogoShort from '@/@core/components/icons/LogoShort';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { SectionTitle } from '@/@core/styles/common';
import { Divider, Grid, Stack, styled, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import SolutionCard from './SolutionCard';
import { useDevice } from '@/@core/hooks/useDevice';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(Flip);

const OurSolutionSection = () => {
  const { t } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('factory');
  const theme = useTheme();
  const device = useDevice();

  const solutionData = useMemo(() => {
    const solutions = [
      {
        code: 'MES',
        title: t('homePage.manufacturingExucutionSystem'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Manufactur,
      },
      {
        code: 'MRP',
        title: t('homePage.materialRequirementPlanning'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Storage,
      },
      {
        code: 'FWMS',
        title: t('homePage.factoryWarehouseManagement'),
        groupCd: ['factory', 'healthcare'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Warehouse,
      },
      {
        code: 'ILS',
        title: t('homePage.importLogisticSystem'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Import,
      },
      {
        code: 'ELS',
        title: t('homePage.exportLogisticSystem'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Export,
      },
      {
        code: 'IOBS',
        title: t('homePage.inOutBarcodeScanner'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Scan,
      },
      {
        code: 'SCR',
        title: t('homePage.streamCodeReader'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.StreamCode,
      },
      {
        code: 'PLI',
        title: t('homePage.productLabelInspector'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Lookup,
      },
      {
        code: 'SPC',
        title: t('homePage.strezamPartsClassofier'),
        groupCd: ['factory'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Box,
      },
      {
        code: 'HMA',
        title: t('homePage.materialRequirementPlanning'),
        groupCd: ['healthcare'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Truck,
      },
      {
        code: 'SCD',
        title: t('homePage.strezamPartsClassofier'),
        groupCd: ['healthcare'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Truck,
      },

      {
        code: 'SMS',
        title: t('homePage.shippingManagementSystem'),
        groupCd: ['logistic'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Truck,
      },
      {
        code: 'TMS',
        title: t('homePage.transportatManagementSystem'),
        groupCd: ['logistic'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Truck,
      },
      {
        code: 'FMS',
        title: t('homePage.forwardingManagementSystem'),
        groupCd: ['logistic'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Truck,
      },
      {
        code: 'LWMS',
        title: t('homePage.logisticWarehouseManagementSystem'),
        groupCd: ['logistic'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Truck,
      },
      {
        code: 'CMS',
        title: t('homePage.cargoMonitoringSystem'),
        groupCd: ['logistic'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Ship,
      },
      {
        code: 'CCMS',
        title: t('homePage.customsClearanceManagementSystem'),
        groupCd: ['logistic'],
        manuPath: '',
        sysPath: '',
        icon: HeroIcons.Security,
      },
    ];
    return solutions.filter((solution) => solution.groupCd.includes(actTab));
  }, [actTab, t]);

  const _onChangeTab = (_: unknown, v: string) => {
    setActTab(v);
  };

  useGSAP(() => {
    const solutionEles = document.querySelectorAll('.solution-item');
    gsap.fromTo(
      solutionEles,
      { opacity: 0, scale: 0.6, duration: 0.2, ease: 'power1.inOut' },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power1.inOut', stagger: 0.15 },
    );
  }, [JSON.stringify(solutionData)]);

  return (
    <Wrap id="solutions">
      <MainWrapper>
        <Head>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          >
            <Stack
              alignItems={'flex-start'}
              sx={{ marginBottom: { xs: '1rem', sm: '0', md: '0' } }}
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
            <TabStyle value={actTab} onChange={_onChangeTab}>
              <Tab value="factory" label={t('homePage.factory')} />
              <Tab value="logistic" label={t('homePage.logistic')} />
              <Tab value="healthcare" label={t('homePage.healthcare')} />
            </TabStyle>
          </Stack>
          <Divider
            className="divider"
            sx={{ my: device.mobile ? '1.5rem' : '3rem', borderColor: theme.palette.grey[200] }}
          />
          <Grid
            container
            columnSpacing={{ xs: 4, xl: 6 }}
            rowSpacing={{ xs: 6, md: 0 }}
            minHeight={{ md: '560px' }}
          >
            <Grid item xs={12} md={5} lg={5} xl={3}>
              <ImgWrapper>
                <img src="/images/pages/home/our-solution/solution-img-1.jpg" />
              </ImgWrapper>
            </Grid>
            <Grid item xs={12} md={7} lg={7} xl={9}>
              <Grid container columnSpacing={{ xs: 4, xl: 10 }} rowSpacing={{ xs: 6, xl: 10 }}>
                {solutionData?.map((x, index) => (
                  <Grid item key={index} xs={6} md={6} lg={6} xl={4}>
                    <SolutionCard data={x} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Head>
      </MainWrapper>
    </Wrap>
  );
};

const ImgWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '1rem',
  overflow: 'hidden',
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    objectFit: 'cover',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const TabStyle = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-scroller': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.MuiTabs-indicator': {
    display: 'none',
  },
  '.MuiTabs-flexContainer': {
    gap: '0 0.5rem',
  },
  button: {
    minWidth: '130px',
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: '0.325rem',
    color: theme.palette.grey[400],
    textTransform: 'initial',
    transition: 'all .25s',
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      borderColor: theme.palette.grey[800],
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

export default OurSolutionSection;
