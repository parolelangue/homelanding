import { WIDTH_MEDIUM } from '@/@core/configs';
import { ASAM_TRADING_LOGIN_URL } from '@/@core/constants/general';
import { cssUtils } from '@/@core/theme/palette';
import { EThemeMode } from '@/@core/types/general';
import { Box, Button, Stack, styled, useMediaQuery } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import LogoMain from '../../icons/LogoMain';

const StyleLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
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

const ButtonHamburger = styled(Box)(({ theme }) => ({
  padding: '0.5rem 1.25rem',
  borderRadius: '0.325rem',
  // background: hexToRGBA(theme.palette.common.white, 0.16),
  [theme.breakpoints.down('xl')]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [`@media (max-width: 1270px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const Hamburger = styled(Box)(({ theme }) => ({
  width: '2.4rem',
  height: '1.5rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  cursor: 'pointer',
  span: {
    width: '2.4rem',
    height: '2px',
    backgroundColor: theme.palette.common.white,
    display: 'inline-block',
    borderRadius: '2rem',
    transition: 'all .2s ' + cssUtils.customCubic,
    position: 'absolute',
    '&.first': {
      right: 0,
      marginLeft: 'auto',
      top: '0.25rem',
    },
    '&.middle': {
      top: '50%',
      transform: 'translate(0,-50%)',
    },
    '&.last': {
      bottom: '0.25rem',
      width: '1.2rem',
      transform: 'translate(50%,0)',
      left: 0,
      marginRight: 'auto',
    },
  },
  '&.active': {
    '.middle': {
      transform: 'translate(-100%,-50%)',
      opacity: 0,
      transition: 'all .2s ' + cssUtils.customCubic,
    },
    '.first': {
      width: '1.5rem',
      transform: 'rotate(45deg) translateY(-50%)',
      top: '50%',
      right: '8px',
      transition: 'all .2s ' + cssUtils.customCubic,
    },
    '.last': {
      width: '1.5rem',
      top: '50%',
      left: '7px',
      transform: 'rotate(-45deg) translateY(-50%)',
      transition: 'all .2s ' + cssUtils.customCubic,
    },
  },
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
  } = props;

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('xl'));

  const onChangeDarkMode = (mode: EThemeMode) => () => {
    saveSettings({ ...settings, mode });
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
      <ButtonHamburger>
        <Hamburger onClick={toggleSidebar} className={active ? 'active' : ''} component={'div'}>
          <span className="first"></span>
          <span className="middle"></span>
          <span className="last"></span>
        </Hamburger>
      </ButtonHamburger>
      <Stack direction="row" alignItems="center" gap={'2.5rem'}>
        {userHorizontalAppBarBranding ? (
          userHorizontalAppBarBranding(props)
        ) : (
          <LeftStack>
            <Link href="/" passHref title="ASAM">
              <StyleLogo>
                <LogoMain />
              </StyleLogo>
            </Link>
          </LeftStack>
        )}
        {children}
      </Stack>
      <RightStack>
        <Link href={ASAM_TRADING_LOGIN_URL} aria-label="ASAM trading" target="_blank" passHref>
          <ButtonStyle variant="contained">{t('button.getStarted')}</ButtonStyle>
        </Link>
        {/* <Stack direction="row" alignItems="center" gap={'1.5rem'}>
          <ConfigLanguage />
        </Stack> */}
      </RightStack>
    </AppBarWrapper>
  );
};

export default LAppBar;
