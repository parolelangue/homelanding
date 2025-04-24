import { useAppDispatch, useAppSelector } from '@/infra/store';
import { Box, Button, Stack, styled, Typography, useScrollTrigger, useTheme } from '@mui/material';
import clsx from 'clsx';
import { CSSProperties, useEffect, useRef, useState } from 'react';

import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { useDevice } from '@/@core/hooks/useDevice';
import { ELanguage, ETemplateDisplay } from '@/@core/types/general';
import { IHeadCategory } from '@/@core/types/home';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { homeActions } from '@/app/reducers/home';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { ASAM_TRADING_LOGIN_URL } from '@/@core/constants/general';

type Props = {
  open: boolean;
  toggleSidebar: VoidFunction;
};

const NavigationSidebar = ({ open, toggleSidebar }: Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const itemsRef = useRef<{ [id: number]: HTMLLIElement | null }>({});
  const device = useDevice();
  const { t, i18n } = useTranslation('common');
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const pathname = usePathname();
  const splitPaths = pathname.split('/');
  const headCategories = useAppSelector((state) => state.home.headCategories);

  const scrollTrigger = useScrollTrigger({
    threshold: 72,
    disableHysteresis: true,
  });

  const onToggleDropdown = (item: IHeadCategory) => () => {
    if (!device.mobile && !device.tablet) return;
    setExpandedId(item.id === expandedId ? null : item.id);
  };

  const scrollTriggerStyles = {
    '.item': {
      '.label': {
        color: theme.palette.common.white,
        transition: 'all .25s',
      },
      '.dropdown-icon': {
        color: theme.palette.common.white,
      },
    },
  };

  useEffect(() => {
    // dispatch(homeActions.getHeadCategories());
  }, []);

  const renderNavContent = () => (
    <Wrap sx={scrollTrigger || pathname !== '/' ? scrollTriggerStyles : {}}>
      <List className="list">
        {headCategories?.map((item: IHeadCategory, index) => {
          const { titleInfo, ancestor } = item;
          const title = i18n.language === ELanguage.KR ? titleInfo.ko : titleInfo?.[i18n.language];
          return (
            <ListItem
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={clsx('item', {
                active: splitPaths[1] === item.ancestor || expandedId === item.id,
              })}
              onClick={onToggleDropdown(item)}
              style={{ '--delay': `0.${index + 2 * 2}s` } as CSSProperties}
            >
              <Stack className="wrap" direction={'row'} gap={2.5} alignItems={'center'}>
                <Typography variant={'body1'} className={'label'}>
                  {title}
                </Typography>
                {!!item?.subs?.length && (
                  <HeroIcons.ChevronDown
                    size={20}
                    className="dropdown-icon"
                    color={theme.palette.common.white}
                  />
                )}
              </Stack>
              {!!item?.subs?.length && (
                <SubPanel
                  className={clsx('panel', {
                    active: expandedId === item.id && (device.tablet || device.mobile),
                  })}
                  style={{ '--h-panel': item?.subs?.length * 54 + 36 + 'px' } as CSSProperties}
                >
                  <div className="list">
                    {item.subs.map((nav, index) => {
                      const genPath = {
                        [ETemplateDisplay.DetailPageArticle]:
                          '/' +
                          ancestor +
                          '/' +
                          nav?.ancestorPath +
                          '/' +
                          nav?.ancestorPath +
                          '-' +
                          nav?.id +
                          '?articlePage=CATEGORY',
                        [ETemplateDisplay.Link]: nav?.url,
                      };
                      const defaultPath = '/' + ancestor + '/' + nav?.ancestorPath;

                      if (nav?.onlyFooterYn === 'Y') return null;
                      return (
                        <SubPanelItem
                          href={genPath?.[nav.templateDisplay] || defaultPath}
                          className={clsx({
                            active: splitPaths[2] === nav?.ancestorPath,
                          })}
                          key={index}
                          onClick={toggleSidebar}
                          target={nav?.templateDisplay === ETemplateDisplay.Link ? '_blank' : ''}
                        >
                          {i18n.language === 'kr'
                            ? nav?.titleInfo?.ko
                            : nav?.titleInfo?.[i18n.language]}{' '}
                        </SubPanelItem>
                      );
                    })}
                  </div>
                </SubPanel>
              )}
            </ListItem>
          );
        })}
      </List>
    </Wrap>
  );

  if (device.desktop || device.desktopLarge) return renderNavContent();

  return (
    <WrapContent
      component={'div'}
      className={clsx({ active: open, 'is-mobile': device.mobile || device.tablet })}
    >
      {renderNavContent()}
      <Link href={ASAM_TRADING_LOGIN_URL} passHref>
        <OpenAccount variant="contained">{t('button.openAccount')}</OpenAccount>
      </Link>
    </WrapContent>
  );
};

const SubPanel = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  opacity: 0,
  zIndex: 1000,
  visibility: 'hidden',
  transform: 'translateY(3rem)',
  minWidth: 350,
  borderRadius: '0.75rem',
  backdropFilter: 'blur(50px)',
  overflow: 'hidden',
  '.list': {
    padding: '0.75rem',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    position: 'relative',
    backdropFilter: 'blur(50px)',
    background: '#0808084D',
    gap: '0.25rem 0',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {},
}));
const SubPanelItem = styled(Link)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 400,
  color: theme.palette.text.mode,
  padding: '0.5rem 1rem',
  borderRadius: '0.75rem',
  transition: 'all .35s',
  '&:hover, &.active': {
    backgroundColor: hexToRGBA(theme.palette.common.white, 0.1),
    transition: 'all .35s',
  },
  [theme.breakpoints.down('sm')]: {},
}));

const Wrap = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {},
}));

const WrapContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 40px)',
  backgroundColor: theme.palette.background.default,
  position: 'fixed',
  zIndex: 2000,
  top: 40,
  padding: '1rem',
  borderTop: '1px solid rgba(97, 97, 97, 0.2)',
  borderRight: '1px solid rgba(97, 97, 97, 0.2)',
  left: '-100%',
  transition: 'all 0.45s cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  '&.active': {
    left: 0,
    transition: 'all 0.45s cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  },
  '&.is-mobile.active': {
    '.list': {
      li: {
        width: '100%',
        transitionDelay: '0.4s',
        transform: 'translateY(0rem)',
        opacity: '1',
        transition: 'all var(--delay)',
      },
    },
  },
  '&.is-mobile': {
    '.list': {
      flexDirection: 'column',
      li: {
        width: '100%',
        transform: 'translateY(3rem)',
        opacity: '0',
        transition: 'all var(--delay)',
        '&:hover': {
          '.dropdown-icon': {
            transform: 'rotate(0)',
            transition: 'all .25s',
          },
        },
        '.wrap': {
          width: '100%',
          justifyContent: 'space-between',
        },
        '&.active': {
          '.dropdown-icon': {
            transform: 'rotate(-180deg)',
            transition: 'all .25s',
          },
        },
      },
    },
    '.panel': {
      position: 'relative',
      opacity: 1,
      transform: 'translate(0)',
      visibility: 'visible',
      padding: '0.5rem',
      height: '0',
      transition: 'all .25s',
      '&.active': {
        height: 'var(--h-panel)',
        transition: 'all .25s',
      },
    },
  },
  [theme.breakpoints.down('sm')]: {},
}));

const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  [theme.breakpoints.down('sm')]: {},
}));
const ListItem = styled('li')(({ theme }) => ({
  '.wrap': {
    padding: '0.425rem 1rem',
    margin: '0.2rem 0',
    borderRadius: '0.75rem',
  },
  '.dropdown-icon': {
    transition: 'all .25s',
  },
  cursor: 'pointer',
  position: 'relative',
  transition: 'all .25s',
  '&.active': {
    '.wrap': {
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.1),
      transition: 'all .25s',
    },
  },
  '&:hover': {
    '.dropdown-icon': {
      transform: 'rotate(-180deg)',
      transition: 'all .25s',
    },
    '.wrap': {
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.1),
      transition: 'all .25s',
    },
    '.panel': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0rem)',
      transition: 'all .25s',
    },
  },
  '.label': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
    color: theme.palette.text.mode + ' !important',
  },
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
}));

const OpenAccount = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'initial',
  marginTop: '1rem',
  width: '100%',
  fontSize: '1rem',
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default NavigationSidebar;
