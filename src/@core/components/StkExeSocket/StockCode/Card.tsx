import { WIDTH_MEDIUM } from '@/@core/configs';
import { IStockCode } from '@/@core/types/stockExchange';
import { eventEmitter } from '@/@core/utils/helpers';
import { Stack, styled, Typography, useTheme } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { TbTriangleFilled } from 'react-icons/tb';
import clsx from 'clsx';
import { formatCurrency } from '@/@core/utils/format';
import { covertToBillions } from '@/@core/utils/transform';
type Props = {
  data: IStockCode;
};

const Card = ({ data }: Props) => {
  const { t } = useTranslation('common');
  // const [data, setData] = useState<IStockCode | null>(null);
  const theme = useTheme();
  // useEffect(() => {
  //   eventEmitter.addListener(`emit_code_${code}`, (data: string) => {
  //     const parseData: IStockCode = data && JSON.parse(data);
  //     setData(parseData);
  //   });
  // }, []);

  return (
    <Wrap gap={1} className={+data?.ratioChange >= 0 ? 'UP' : 'DOWN'}>
      <Stack direction="row" gap={1} alignItems={'center'} flexWrap={'nowrap'}>
        <Typography className="code" variant="h6">
          {data?.indexName}
        </Typography>
        <Tag className="tag">{data?.indexVal}</Tag>
        <Ratio direction="row" gap={1} alignItems={'center'}>
          <TbTriangleFilled
            size={12}
            color={+data?.ratioChange >= 0 ? theme.palette.primary.main : theme.palette.error.main}
            style={{
              marginRight: '0.2rem',
              ...(+data?.ratioChange >= 0
                ? {
                    transform: 'rotate(0)',
                  }
                : {
                    transform: 'rotate(180deg)',
                  }),
            }}
          />
          <Typography className="ratio">{data?.valChange} |</Typography>
          <Typography className="percent">{data?.ratioChange}%</Typography>
        </Ratio>
      </Stack>
      <Stack direction="row" gap={1} alignItems={'center'}>
        <Typography className="trust-val">{formatCurrency(+data?.totalVolume)}</Typography>
        <Typography className="shared">{t('common.shares')}</Typography>|{' '}
        <Typography className="capital">{covertToBillions(+data?.totalAmount)}</Typography>
        <Typography className="currency">{t('common.billions')}</Typography>
        {/* |<Typography className="capital">{formatCurrency(+data?.totalVolume)}</Typography>
        <Typography className="currency">{data?.currency}</Typography> */}
      </Stack>
      {/* <Stack direction="row" gap={1} alignItems={'center'}>
        <Typography className="capital">{covertToBillions(+data?.totalAmount)}</Typography>
        <Typography className="currency">{t('common.billions')}</Typography>
      </Stack> */}
    </Wrap>
  );
};

const Wrap = styled(Stack)(({ theme }) => ({
  backgroundColor: 'transparent',
  '.code': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    color: theme.palette.text.neutral950,
  },
  '.ratio, .percent': {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
  },
  '.trust-val, .capital': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 400,
    color: theme.palette.text.neutral950,
  },
  '.currency, .shared': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    color: theme.palette.warning.main,
  },
  '&.UP': {
    '.ratio, .percent': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
      color: theme.palette.primary.main,
    },
  },
  '&.DOWN': {
    '.tag': {
      backgroundColor: theme.palette.error.main,
    },
    '.ratio, .percent': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
      color: theme.palette.error.main,
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
  },
}));
const Tag = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '0.25rem 0.325rem',
  borderRadius: '0.25rem',
  color: theme.palette.common.white,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
  },
}));
const Ratio = styled(Stack)(({ theme }) => ({
  padding: '0.25rem 0.325rem',
  borderRadius: '0.25rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
  },
}));

export default memo(Card);
