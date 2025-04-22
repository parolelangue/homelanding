'use client';

import { WIDTH_MEDIUM } from '@/@core/configs';
import { flattendHeadCategories } from '@/@core/utils/general';
import { useAppSelector } from '@/infra/store';
import { Stack, styled } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HeroIcons } from '../icons/heroIcons';

type Props = {
  slugNm: string;
};

const Breadcrumbs = ({ slugNm }: Props) => {
  const { t, i18n } = useTranslation('common');
  const pathname = usePathname();
  const splitPaths = pathname.split('/');
  const headCategories = useAppSelector((state) => state.home.headCategories);
  const activeTab = splitPaths[splitPaths.length - 1];

  const listPaths = [...(flattendHeadCategories(headCategories) || [])];

  const findNode = (path: string) => {
    return listPaths?.find((node) => node.path === path);
  };
  const genPath = (index: number) => splitPaths.slice(0, index + 1).join('/');

  return (
    <List direction={'row'} alignItems={'center'} gap={2}>
      {splitPaths.map((path, index) => {
        const node = findNode(path);
        const curPath = genPath(index);
        const label =
          i18n.language === 'kr'
            ? node?.label.ko
            : i18n.language === 'en'
              ? node?.label.en
              : node?.label.vi;

        if (index === 0) return; // ignore home path

        if (index === 1)
          // start generate breadcrumb from index 1
          return (
            <ListItem
              className={clsx({ active: activeTab === path })}
              key={Math.random()}
              href={curPath}
            >
              {label}
            </ListItem>
          );
        if (slugNm && index === splitPaths.length - 1)
          //  check slug name for article page
          return (
            <React.Fragment key={index}>
              <HeroIcons.ChevronRight size={20} />
              <ListItem className={clsx({ active: activeTab === path })} href={curPath}>
                {slugNm}
              </ListItem>
            </React.Fragment>
          );
        return (
          <React.Fragment key={index}>
            <HeroIcons.ChevronRight size={20} />
            <ListItem className={clsx({ active: activeTab === path })} href={curPath}>
              {label}
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
};

const List = styled(Stack)(({ theme }) => ({
  width: 'fit-content',
  padding: '0.5rem 0 1rem 0',
  margin: 0,
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const ListItem = styled(Link)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 400,
  color: theme.palette.text.neutral500,
  position: 'relative',
  transition: 'all .25s',
  '&:after': {
    content: `''`,
    width: '0%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    left: 'auto',
    right: 0,
    transition: 'all .25s',
  },
  '&.active': {
    color: theme.palette.text.mode,
    transition: 'all .25s',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    transition: 'all .25s',
    '&:after': {
      width: '100%',
      left: 0,
      right: 'auto',
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default Breadcrumbs;
