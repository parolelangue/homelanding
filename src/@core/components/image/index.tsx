'use client';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { EArticleType } from '@/@core/types/news';
import { styled, SxProps } from '@mui/material';
import clsx from 'clsx';
import ImageBase, { ImageProps } from 'next/image';
import { forwardRef, Ref, useEffect, useState } from 'react';

const defaultThumbPath = '/images/pages/articles/default-thumb.jpg';

type Props = {
  imgUrl: string;
  alt: string;
  thumbStyles?: SxProps;
} & Omit<ImageProps, 'src' | 'alt'>;

const Image = forwardRef(({ imgUrl, thumbStyles, alt, ...props }: Props, ref: Ref<unknown>) => {
  const defaultThumbPath = '/images/pages/articles/cert-thumb-default.jpg';

  const [thumb, setThumb] = useState<string>(imgUrl || defaultThumbPath);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setThumb(imgUrl || defaultThumbPath);
  }, [imgUrl]);

  return (
    <Wrap>
      <Thumbnail sx={thumbStyles}>
        <ImageBase
          src={thumb}
          onError={(ev) => {
            setThumb(defaultThumbPath);
          }}
          onLoad={() => {
            setTimeout(() => {
              setLoading(false);
            }, 200);
          }}
          alt={alt}
          fill
          unoptimized
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
          {...props}
          className={clsx(props.className, { bluring: loading })}
        />
      </Thumbnail>
    </Wrap>
  );
});

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
  transition: 'all .25s',

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

Image.displayName = 'Image';

export default Image;
