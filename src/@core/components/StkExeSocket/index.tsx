'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { Button, Grid, Stack, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockCode from './StockCode';
import { IStockCode } from '@/@core/types/stockExchange';
import { useTranslation } from 'next-i18next';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import MainWrapper from '../shared/sections/main-wrapper';
import Link from 'next/link';
import { homeService } from '@/app/services/home';

type Props = {
  data: IStockCode[];
};

const StockExchangeSocket = ({ data }: Props) => {
  const { t } = useTranslation('common');
  const [indexs, setIndexs] = useState<IStockCode[]>([]);

  const getIndexs = async () => {
    const res = await homeService.getIndexs<{ data: IStockCode[] }>();
    const data = res?.[1]?.data || [];
    setIndexs(data);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getIndexs();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const list = !!indexs?.length ? indexs : data;

  return (
    <Container>
      <MainWrapper>
        <Stack
          direction={{ sm: 'column', md: 'column', lg: 'row' }}
          gap={6}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <StockExchange className="custome-scrollbar" container spacing={2}>
            {list?.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <StockCode data={item} />
              </Grid>
            ))}
          </StockExchange>
          <Link href={'#'} target="_blank">
            <ViewStockExchange variant="outlined">{t('button.stockExchange')}</ViewStockExchange>
          </Link>
        </Stack>
      </MainWrapper>
    </Container>
  );
};

const ViewStockExchange = styled(Button)(({ theme }) => ({
  height: '44px',
  border: '1px solid #E8E8E8',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.neutral900,
  whiteSpace: 'nowrap',
  padding: '0.40625rem 0.8rem',
  maxWidth: 150,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.neutral900,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
  },
}));

const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: hexToRGBA(theme.palette.text.black900, 0.5),
  backdropFilter: 'blur(100px)',
  padding: '1rem 0',
  zIndex: 100,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {
    marginTop: '0',
    position: 'relative',
    backgroundColor: hexToRGBA(theme.palette.common.white, 1),
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
    position: 'relative',
    backgroundColor: hexToRGBA(theme.palette.common.white, 1),
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
    position: 'relative',
    backgroundColor: hexToRGBA(theme.palette.common.white, 1),
    display: 'none',
  },
}));

const StockExchange = styled(Grid)(({ theme }) => ({
  width: '100%',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    height: '0.25rem',
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export default StockExchangeSocket;
