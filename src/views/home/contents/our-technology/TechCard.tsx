import Image from '@/@core/components/image';
import Video from '@/@core/components/video';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useDevice } from '@/@core/hooks/useDevice';
import { ITechnology } from '@/@core/types/technology';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { CSSProperties } from 'react';

type Props = {
  data: ITechnology;
};

const TechCard = ({ data }: Props) => {
  const { title, category, thumbnail } = data || {};
  const { t, i18n } = useTranslation('common');
  const device = useDevice();

  const smallThumbs: CSSProperties = {
    paddingBottom: device.mobile
      ? '500px !important'
      : device.tablet
        ? '500px !important'
        : '756px',
  };

  const genContent = () => {
    return (
      <Box
        sx={{
          cursor: 'grab',
        }}
      >
        <Image imgUrl={thumbnail} alt={title} thumbStyles={smallThumbs} />
        <Content>
          <Typography variant="body1" className="sub-title truncate-text">
            {category}
          </Typography>
          <Stack direction="row" alignItems="flex-end">
            <Typography variant="body1" className="title truncate-text">
              {title}
            </Typography>
          </Stack>
        </Content>
      </Box>
    );
  };

  return <Card>{genContent()}</Card>;
};

const Content = styled(Stack)(({ theme }) => ({
  padding: '2rem 1.5rem',
  borderRadius: '0.5rem',
  position: 'absolute',
  top: '2rem',
  left: '2rem',
  maxWidth: '700px',
  background: hexToRGBA(theme.palette.common.black, 0.24),
  backdropFilter: 'blur(50px)',
  '.title': {
    width: 'fit-content',
    fontSize: '2.5rem',
    lineHeight: '3rem',
    fontWeight: 500,
    color: theme.palette.common.white,
    marginTop: '1rem',
    display: 'inline-flex',
    alignItems: 'flex-end',
    gap: '0 0.25rem',
  },
  '.sub-title': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 400,
    color: theme.palette.grey[100],
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 1rem',
    bottom: '0.5rem',
    right: '0.5rem',
    left: 'unset',
    top: 'unset',
    maxWidth: '270px',
    '.box-icon': {
      width: '1rem',
      height: '1rem',
    },
    '.title': {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      marginTop: '0.5rem',
    },
    '.sub-title': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
}));

const Card = styled('div')(({ theme }) => ({
  borderRadius: '0.5rem',
  position: 'relative',
  width: '100%',
  height: '100%',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default TechCard;
