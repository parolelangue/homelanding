import { WIDTH_MEDIUM } from '@/@core/configs';
import { ASAM_TRADING_LOGIN_URL } from '@/@core/constants/general';
import { EThemeMode } from '@/@core/types/general';
import { Box, Button, Stack, styled, useMediaQuery } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import LogoMain from '../../icons/LogoMain';
import { useResources } from '@/@core/hooks/useResources';
import clsx from 'clsx';

const StyleLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  svg: {
    path: {
      fill: theme.palette.common.white,
      transition: 'all .25s',
      '&.logo': {
        fill: theme.palette.primary.main,
      },
    },
  },
  '&.active': {
    svg: {
      path: {
        fill: theme.palette.common.black,
        transition: 'all .25s',
        '&.active': {
          fill: theme.palette.primary.main,
        },
        '&.logo': {
          fill: theme.palette.primary.main,
        },
      },
    },
  },
}));

const LeftStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

const RightStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 2rem',
  marginLeft: '1rem',
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'initial',

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '25px',
    padding: '0.46875rem 1.53rem',
  },
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const AppBarWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    '.menu-content': {
      marginRight: '0',
      width: 'auto',
    },
    '& .menu-content': {
      li: {
        paddingLeft: 40,
      },
      '> div:last-child': {
        li: {
          paddingRight: 0,
        },
      },
    },
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  },
  [`@media (max-width: 1270px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Navs = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ul: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    listStyleType: 'none',
    li: {
      padding: '0.5rem 1rem',
      a: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '1.5rem',
        color: theme.palette.common.white,
        position: 'relative',
        '&:after': {
          content: `''`,
          position: 'absolute',
          left: 'auto',
          right: '0',
          bottom: '-2px',
          width: '0%',
          height: '2px',
          backgroundColor: theme.palette.common.white,
          transition: 'all .25s',
        },
        '&:hover': {
          '&:after': {
            width: '100%',
            left: 0,
            right: 'auto',
            transition: 'all .25s',
          },
        },
      },
    },
  },
  '&.active': {
    ul: {
      li: {
        a: {
          color: theme.palette.grey[900],
          '&:after': {
            backgroundColor: theme.palette.common.black,
          },
        },
      },
    },
  },
  [theme.breakpoints.down('xl')]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [`@media (max-width: 1270px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type LAppBarProps = {
  children?: ReactNode;
  horizontalAppBarContent?: any;
  horizontalAppBarBranding?: any;
  domain?: any;
  isPolicy?: boolean;
  apiMainData?: any;
  saveSettings?: any;
  settings?: any;
  active: boolean;
  activeScroll?: boolean;
  toggleSidebar: VoidFunction;
};

const LAppBar = (props: LAppBarProps) => {
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding,
    children,
    saveSettings,
    settings,
    toggleSidebar,
    active,
    activeScroll,
  } = props;

  const { t } = useTranslation('common');
  const { navLinks } = useResources();

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('xl'));

  const onChangeDarkMode = (mode: EThemeMode) => () => {
    saveSettings({ ...settings, mode });
  };

  const _onScrollToSection = (id: string) => {
    const ele = document.getElementById(id);
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    (document.querySelector('html') as HTMLElement).style.overflow = '';
  }, [isDesktop]);

  return (
    <AppBarWrapper
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: !isDesktop ? [4, 4] : [0, 0],
      }}
    >
      <Stack direction="row" alignItems="center" gap={'2.5rem'}>
        {userHorizontalAppBarBranding ? (
          userHorizontalAppBarBranding(props)
        ) : (
          <LeftStack>
            <Link href="/" passHref title="ASAM">
              <StyleLogo className={clsx({ active: activeScroll })}>
                <LogoMain />
              </StyleLogo>
            </Link>
          </LeftStack>
        )}
        {children}
      </Stack>
      <Navs className={clsx({ active: activeScroll })}>
        <ul>
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link
                onClick={(e) => {
                  _onScrollToSection(nav.path);
                  e.preventDefault();
                }}
                href={nav.path}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </Navs>
      <RightStack>
        <Link href={ASAM_TRADING_LOGIN_URL} aria-label="ASAM trading" target="_blank" passHref>
          <ButtonStyle variant="contained">{t('button.getStarted')}</ButtonStyle>
        </Link>
      </RightStack>
    </AppBarWrapper>
  );
};

export default LAppBar;
