import { WIDTH_MEDIUM } from '@/@core/configs';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { styled, SxProps } from '@mui/material';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { forwardRef, Ref, useEffect, useState } from 'react';
import { TbTriangleFilled } from 'react-icons/tb';

const defaultThumbPath = '/images/pages/articles/default-thumb.jpg';

type Props = {
  imgUrl: string;
  thumbStyles?: SxProps;
  alt: string;
  isSmall?: boolean;
} & Omit<ImageProps, 'src' | 'alt'>;

const Video = forwardRef(
  ({ imgUrl, thumbStyles, alt = '', isSmall, ...props }: Props, ref: Ref<unknown>) => {
    const [thumb, setThumb] = useState<string>(imgUrl || defaultThumbPath);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      setThumb(imgUrl || defaultThumbPath);
    }, [imgUrl]);

    return (
      <Wrap>
        <Thumbnail sx={thumbStyles}>
          <Image
            src={thumb}
            onError={(ev) => {
              setThumb(defaultThumbPath);
            }}
            onLoad={() => {
              setTimeout(() => {
                setLoading(false);
              }, 200);
            }}
            unoptimized
            alt={alt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
            {...props}
            className={clsx(props.className, { bluring: loading })}
          />
          <PlayButton className={clsx({ small: isSmall })}>
            <div className="wrap">
              <TbTriangleFilled className="icon" />
            </div>
          </PlayButton>
        </Thumbnail>
      </Wrap>
    );
  },
);

const PlayButton = styled('div')(({ theme }) => ({
  width: '5rem',
  height: '5rem',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  transition: 'all .25s',
  '&:hover': {
    '.wrap': {
      '.icon': {
        transform: 'rotate(210deg)',
        transition: 'all .35s',
      },
      '&:before': {
        transform: 'translate(-50%, -50%) scale(1.2)',
        transition: 'all .25s',
      },
      '&:after': {
        transform: 'translate(-50%, -50%) scale(1.05)',
        transition: 'all .25s',
      },
    },
  },
  '.wrap': {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      content: `''`,
      width: '5rem',
      height: '5rem',
      borderRadius: '50%',
      cursor: 'pointer',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.2),
      backdropFilter: 'blur(100px)',
      zIndex: 1,
      transition: 'all .25s',
    },
    '&:after': {
      content: `''`,
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.5),
      backdropFilter: 'blur(100px)',
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: 'all .35s',
    },
  },
  '.icon': {
    position: 'relative',
    zIndex: 2,
    width: '27px',
    height: '23px',
    color: theme.palette.common.white,
    transform: 'rotate(90deg)',
    transition: 'all .25s',
  },
  '&.small': {
    width: '3.5rem',
    height: '3.5rem',
    '.icon': {
      width: '22px',
      height: '18px',
    },
    '.wrap': {
      '&:before': {
        width: '3.5rem',
        height: '3.5rem',
      },
      '&:after': {
        width: '2.5rem',
        height: '2.5rem',
      },
    },
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));
const Thumbnail = styled('div')(({ theme }) => ({
  aspectRatio: '16/9',
  width: '100%',
  paddingBottom: '255px',
  overflow: 'hidden',
  height: 0,
  position: 'relative',
  borderRadius: '0.325rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    img: {
      transform: 'scale(1.05)',
      transition: 'all .25s',
    },
  },
  img: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all .25s',
    '&.bluring': {
      filter: 'blur(20px)',
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '220px',
  },
}));

const Wrap = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

Video.displayName = 'Video';

export default Video;
