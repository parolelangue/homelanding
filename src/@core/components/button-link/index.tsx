import { Box, styled, SxProps } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import React, { CSSProperties, ReactNode } from 'react';
import { HeroIcons } from '../icons/heroIcons';

type Props = {
  name: string;
  link: string;
  suffixIcon?: ReactNode;
  color?: string;
  sxProps?: SxProps;
  direction?: 'LTR' | 'RTL'; // left to right | right to left
  size?: number;
};

const ButtonLink: React.FC<Props> = ({
  name,
  link,
  suffixIcon,
  color,
  sxProps,
  direction = 'LTR',
  size,
}) => {
  return (
    <BoxLink
      className={clsx('link', { 'to-left': direction === 'RTL' })}
      href={link}
      style={
        {
          '--clr': color,
        } as CSSProperties
      }
      sx={sxProps}
    >
      {direction === 'LTR' ? (
        <>
          {name}
          <BoxIcon
            className="box-icon"
            sx={{
              width: size,
              height: size,
            }}
          >
            <HeroIcons.ArrowRight className="show" size={size || 16} />
            <HeroIcons.ArrowRight className="hide" size={size || 16} />
          </BoxIcon>
        </>
      ) : (
        <>
          <BoxIcon className={clsx('box-icon to-left')}>
            <HeroIcons.ArrowRight className="show" size={size || 16} />
            <HeroIcons.ArrowRight className="hide" size={size || 16} />
          </BoxIcon>
          {name}
        </>
      )}
    </BoxLink>
  );
};

const BoxLink = styled(Link)(({ theme }) => {
  return {
    display: 'inline-flex',
    width: 'fit-content',
    alignItems: 'center',
    gap: '10px',
    color: 'var(--clr)',
    '.box-icon': {
      svg: {
        color: 'var(--clr) !important',
      },
    },
    '&:hover': {
      '.show': {
        transform: 'rotate(-45deg) translateX(130%) scale(0)',
        transition: 'all .15s',
      },
      '.hide': {
        transform: 'rotate(-45deg) translateX(0%) scale(1)',
        transition: 'all .15s',
      },
    },
    '&.to-left': {
      '&:hover': {
        '.show': {
          transform: 'rotate(-135deg) translateX(130%) scale(0)',
          transition: 'all .15s',
        },
        '.hide': {
          transform: 'rotate(-135deg) translateX(0%) scale(1)',
          transition: 'all .15s',
        },
      },
    },
  };
});
const BoxIcon = styled(Box)(({ theme }) => {
  return {
    width: '1rem',
    height: '1rem',
    position: 'relative',
    overflow: 'hidden',
    bottom: '2px',
    svg: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      transform: 'rotate(-45deg) translateX(-2px) scale(1)',
      top: '0',
      left: 0,
      transition: 'all .15s',
    },
    '.hide': {
      transform: 'rotate(-45deg) translateX(-130%) scale(0)',
    },
    '&.to-left': {
      svg: {
        transform: 'rotate(-135deg) translateX(-2px) scale(1)',
      },
      '.hide': {
        transform: 'rotate(-135deg) translateX(-130%) scale(0)',
      },
    },
  };
});

export default ButtonLink;
