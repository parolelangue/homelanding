'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import Link from 'next/link';

const ContactSection = () => {
  const { t } = useTranslation('common');
  const device = useDevice();
  const path = '/customer-support/contact-us';
  return (
    <Container>
      <MainWrapper>
        <Card
          sx={{
            backgroundImage: device.mobile
              ? `url('/images/pages/banners/contact-banner-mobile.jpg')`
              : `url('/images/pages/banners/contact-banner.jpg')`,
          }}
          alignItems={{ sm: 'flex-start', md: 'flex-end' }}
          justifyContent={{ xs: 'flex-start', sm: 'flex-start', md: 'flex-end' }}
        >
          <Content>
            <h3 className="title ">{t('homePage.contactWithUs')}</h3>
            <Typography className="desc ">{t('homePage.pleaseShareEmailOfYou')}</Typography>
            <Link href={path}>
              <Contact>{t('button.contact')}</Contact>
            </Link>
          </Content>
        </Card>
      </MainWrapper>
    </Container>
  );
};

const Content = styled(Stack)(({ theme }) => ({
  position: 'relative',
  maxWidth: 450,
  zIndex: 3,
  '.title': {
    fontSize: '2.5rem',
    lineHeight: '2.5rem',
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  '.desc': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 400,
    color: theme.palette.common.white,
    margin: '0.5rem 0 1.25rem 0',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {
    '.title': {
      fontSize: '2rem',
      lineHeight: '2.25rem',
    },
    '.desc': {
      fontSize: '1rem',
      lineHeight: '1rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.title': {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    '.desc': {
      fontSize: '1rem',
      lineHeight: '1.24rem',
    },
  },
}));

const Contact = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  width: 'fit-content',
  minWidth: 100,
  transition: 'all .25s',
  '&:hover': {
    backgroundColor: hexToRGBA(theme.palette.common.black, 0.85),
    transition: 'all .25s',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Card = styled(Stack)(({ theme }) => ({
  borderRadius: '1rem',
  overflow: 'hidden',
  width: '100%',
  minHeight: 320,
  padding: '76px 80px',
  position: 'relative',
  '&:before': {
    content: `''`,
    width: '80%',
    height: '100%',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundOrigin: 'center',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 1,
  },

  '&:after': {
    content: `''`,
    width: '80%',
    height: '100%',
    top: 0,
    right: 0,
    position: 'absolute',
    zIndex: 2,
    transform: 'rotate(180deg)',
    background:
      'linear-gradient(275.87deg, rgba(76, 73, 62, 0) 35.25%, #8C856F 65.32%, #7D6E5C 95.35%)',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {
    padding: '76px 60px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '76px 60px',
    '&:after': {
      width: '100%',
      background:
        'linear-gradient(275.87deg, rgba(76, 73, 62, 0) -19.75%, #8C856F 74.32%, #7D6E5C 95.35%)',
    },
  },
  [theme.breakpoints.down('md')]: {
    minHeight: '540px !important',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: '46px 30px',
    minHeight: '540px !important',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
}));

const Container = styled('section')(({ theme }) => ({
  width: '100%',
  margin: '75px 0',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    margin: '2.5rem 0',
  },
}));

export default ContactSection;
