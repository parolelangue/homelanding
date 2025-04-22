import { WIDTH_MEDIUM } from '@/@core/configs';
import { ETemplateDisplay } from '@/@core/types/general';
import { Stack, styled, SxProps } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type TTabItem = {
  label: string;
  key: string;
  href?: string;
  templateDisplay?: ETemplateDisplay;
  externalUrl?: string;
};
type Props = {
  list: TTabItem[];
  onChangedTab: (key: string) => void;
  activeTab?: string;
  tabListSxProps?: SxProps;
  isTabLink?: boolean;
};

const Tabs = ({ list, onChangedTab, activeTab, tabListSxProps, isTabLink = false }: Props) => {
  const onChangeTab = (tab: string) => () => onChangedTab(tab);

  const isExternalLink = (tab: TTabItem) => tab?.templateDisplay === ETemplateDisplay.Link;

  return (
    <TabList direction={'row'} alignItems={'center'} gap={4} sx={tabListSxProps}>
      {list.map((item, index) =>
        index < list.length - 1 ? (
          <React.Fragment key={index}>
            {isTabLink ? (
              <Link
                href={isExternalLink(item) ? item.externalUrl : item.href}
                target={isExternalLink(item) ? '_blank' : '_self'}
              >
                <p
                  onClick={onChangeTab(item.key)}
                  className={clsx('tab', { active: activeTab === item.key })}
                >
                  {item.label}
                </p>
              </Link>
            ) : (
              <p
                onClick={onChangeTab(item.key)}
                className={clsx('tab', { active: activeTab === item.key })}
              >
                {item.label}
              </p>
            )}
          </React.Fragment>
        ) : isTabLink ? (
          <Link
            key={index}
            href={isExternalLink(item) ? item.externalUrl : item.href}
            target={isExternalLink(item) ? '_blank' : '_self'}
          >
            <p
              onClick={onChangeTab(item.key)}
              className={clsx('tab', { active: activeTab === item.key })}
            >
              {item.label}
            </p>
          </Link>
        ) : (
          <p
            key={index}
            onClick={onChangeTab(item.key)}
            className={clsx('tab', { active: activeTab === item.key })}
          >
            {item.label}
          </p>
        ),
      )}
    </TabList>
  );
};

const TabList = styled(Stack)(({ theme }) => ({
  overflowY: 'hidden',
  '&::-webkit-scrollbar': {
    height: '0.325rem',
  },
  '.tab': {
    border: '1px solid ' + theme.palette.grey[200],
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
    cursor: 'pointer',
    color: theme.palette.grey[400],
    whiteSpace: 'nowrap',
    transition: 'all .25s',
    borderRadius: '0.325rem',
    padding: '0.5rem 1.75rem',
    '&.active': {
      color: theme.palette.grey[900] + ' !important',
      borderColor: theme.palette.grey[900],
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    '.dotted': {
      display: 'none',
    },
  },
}));

export default Tabs;
