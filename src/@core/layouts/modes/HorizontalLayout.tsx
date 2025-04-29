import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import themeConfig from '@/infra/configs/themeConfig';
import { AppBar, Box, Fab, styled, Toolbar, useMediaQuery, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import CustomizeStyle from '../../components/customizer';
import LAppBar from '../../components/horizontal/appBar';
import ScrollTop from '../../components/icons/ScrollTop';
import ScrollToTop from '../../components/scroll-to-top';
import Footer from '../../components/shared/footer';
import { WIDTH_MEDIUM } from '../../configs';
import NavigationSidebar from './NavigationSidebar';
import { useBoolean } from '@/@core/hooks/useBoolean';

const HorizontalLayoutWrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});
const MuiToolbarWrapper = styled('div')({
  zIndex: 2,
  width: '100%',
});

const MuiToolbar = styled(Toolbar)(({ theme }) => ({
  width: '100vw',
  padding: `0.625rem 0 !important`,
  minHeight: 'auto',
  backgroundColor: 'transparent',
  position: 'fixed',
  height: '72px',
  top: 0,
  left: 0,
  zIndex: 1000,
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '0%',
    // backdropFilter: 'blur(50px)',
    // backgroundColor: '#0808084D',
    backgroundColor: theme.palette.common.white,
    boxShadow: '10px 10px 40px rgba(0, 0, 0, 0.1)',
    transition: 'height 0.25s ease-in-out',
  },
  '&.active': {
    '&:after': {
      height: '100%',
      transition: 'height 0.25s ease-in-out',
    },
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  transition: 'padding .25s ease-in-out',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {},
  [theme.breakpoints.up('md')]: {
    marginBottom: '0',
  },
}));

const BtnScrollTop = styled(Fab)(({ theme }) => ({
  width: '3.5rem',
  height: '3.5rem',
  boxShadow: '0px 4px 16px 5px rgba(0, 54, 135, 0.1)',
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type HorizontalLayoutProps = {
  children?: ReactNode;
  hidden?: any;
  settings?: any;
  scrollToTop?: any;
  saveSettings?: any;
  horizontalNavMenuContent?: any;
  horizontalNavItems?: any;
  horizontalAppBarContent?: any;
};

const HorizontalLayout = (props: HorizontalLayoutProps) => {
  const {
    hidden,
    children,
    settings,
    scrollToTop,
    saveSettings,
    horizontalNavMenuContent: userHorizontalNavMenuContent,
  } = props;

  const pathname = usePathname();

  const scrollTrigger = useScrollTrigger({
    threshold: 72,
    disableHysteresis: true,
  });

  const { skin, appBar, navHidden, appBarBlur, contentWidth } = settings;
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const [openSidebar, { off: offSidebar, toggle: toggleSidebar }] = useBoolean();

  const activeScrollBar = scrollTrigger || pathname !== '/';

  return (
    <HorizontalLayoutWrapper className="layout-wrapper">
      <AppBar
        color="default"
        elevation={skin === 'bordered' ? 0 : 3}
        className="layout-navbar-and-nav-container"
        position={appBar === 'fixed' ? 'sticky' : 'static'}
        sx={{
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          backgroundColor: (theme) => theme.palette.background.paper,
          // ...(skin === 'bordered' && {
          //   borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          // }),
          transition:
            'border-bottom 0.2s ease-in-out, backdrop-filter .25s ease-in-out, box-shadow .25s ease-in-out',
          // ...(appBar === 'fixed'
          //   ? appBarBlur && {
          //       backdropFilter: 'blur(8px)',
          //       backgroundColor: (theme) => hexToRGBA(theme.palette.background.paper, 0.85),
          //     }
          //   : {}),
          // boxShadow: '0px 6px 12px 0px #BBBBBB4D',
          display: isMobile ? 'none' : 'flex',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        {navHidden ? null : (
          <Box className="layout-horizontal-nav" sx={{ width: '100%' }}>
            <MuiToolbar
              className={clsx('horizontal-nav-content-container', {
                active: activeScrollBar,
              })}
              sx={{
                mx: 'auto',
                ...(contentWidth === 'boxed' && {
                  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
                    maxWidth: 'none !important',
                  },
                }),
              }}
            >
              <MuiToolbarWrapper>
                <MainWrapper isFullContainer>
                  <LAppBar
                    active={openSidebar}
                    activeScroll={activeScrollBar}
                    toggleSidebar={toggleSidebar}
                    {...props}
                  >
                    {(userHorizontalNavMenuContent && userHorizontalNavMenuContent(props)) || (
                      <NavigationSidebar open toggleSidebar={() => {}} />
                    )}
                  </LAppBar>
                </MainWrapper>
              </MuiToolbarWrapper>
            </MuiToolbar>
          </Box>
        )}
      </AppBar>

      <ContentWrapper
        className="layout-page-content"
        sx={{
          ...(contentWidth === 'boxed' && {
            mx: 'auto',
            px: [0, 0],
          }),
        }}
      >
        {children}
      </ContentWrapper>

      <Footer />

      {themeConfig.disableCustomizer || hidden ? null : <CustomizeStyle />}
      <ScrollToTop className="mui-fixed">
        <BtnScrollTop color="primary" size="small" aria-label="scroll back to top">
          <ScrollTop />
        </BtnScrollTop>
      </ScrollToTop>
    </HorizontalLayoutWrapper>
  );
};

export default HorizontalLayout;
