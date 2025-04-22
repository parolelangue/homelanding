import ButtonLink from '@/@core/components/button-link';
import Image from '@/@core/components/image';
import Video from '@/@core/components/video';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useDevice } from '@/@core/hooks/useDevice';
import { ISolution } from '@/@core/types/solution';
import { ITechnology } from '@/@core/types/technology';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties } from 'react';

const defaultThumbPath = '/images/pages/articles/default-thumb.jpg';
type Props = {
  data: ISolution;
};

const SolutionCard = ({ data }: Props) => {
  const { id, title, desc, thumbnail, path } = data || {};
  const { t, i18n } = useTranslation('common');
  const theme = useTheme();
  const pathname = usePathname();
  const device = useDevice();

  const renderTitle = () => {
    return title;
  };

  const smallThumbs: CSSProperties = {
    paddingBottom: device.mobile ? '250px' : device.tablet ? '350px' : '500px',
    borderRadius: '0.75rem',
    overflow: 'hidden',
  };

  const genContent = () => {
    return (
      <Box>
        {true ? (
          <Image imgUrl={thumbnail} alt={renderTitle()} thumbStyles={smallThumbs} />
        ) : (
          <Video imgUrl={thumbnail} alt={renderTitle()} thumbStyles={smallThumbs} />
        )}
        <Link href={path}>
          <Content>
            <Typography variant="body1" className="title truncate-text">
              {renderTitle()}
            </Typography>
            <Typography variant="body1" className="description truncate-text">
              {desc}
            </Typography>
          </Content>
        </Link>
      </Box>
    );
  };

  return <Card>{genContent()}</Card>;
};

const Content = styled(Stack)(({ theme }) => ({
  '.title': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 500,
    color: theme.palette.grey[900],
    margin: '1rem 0 0.5rem 0',
    minHeight: '96px',
  },
  '.description': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    minHeight: '84px',
    fontWeight: 400,
    color: theme.palette.grey[900],
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    '.title': {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      minHeight: '72px',
    },
    '.description': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      minHeight: '60px',
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

export default SolutionCard;
