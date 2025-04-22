import { Fab, styled } from '@mui/material';
import { ReactNode } from 'react';

import Footer from '../../components/shared/footer';
import LAppBar from '../../components/vertical/appBar';
import { useBoolean } from '@/@core/hooks/useBoolean';
import NavigationSidebar from './NavigationSidebar';
import ScrollToTop from '@/@core/components/scroll-to-top';
import ScrollTop from '@/@core/components/icons/ScrollTop';

const VerticalLayoutWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {},
}));

const BtnScrollTop = styled(Fab)(({ theme }) => ({
  width: '3.5rem',
  height: '3.5rem',
  boxShadow: '0px 4px 16px 5px rgba(0, 54, 135, 0.1)',
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  height: '100%',
  transition: 'padding .25s ease-in-out',
  padding: '1.5rem !important',
  [theme.breakpoints.down('lg')]: {
    padding: '0 !important',
  },
  [theme.breakpoints.down('sm')]: {},
}));

type LayoutProps = {
  children: ReactNode;
};

const VerticalLayout = (props: LayoutProps) => {
  const { children } = props;

  const [openSidebar, { off: offSidebar, toggle: toggleSidebar }] = useBoolean();

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        <LAppBar active={openSidebar} toggleSidebar={toggleSidebar} />
        <NavigationSidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        <ContentWrapper className="layout-page-content">{children}</ContentWrapper>
        <Footer />
        <ScrollToTop className="mui-fixed">
          <BtnScrollTop color="primary" size="small" aria-label="scroll back to top">
            <ScrollTop />
          </BtnScrollTop>
        </ScrollToTop>
      </VerticalLayoutWrapper>
    </>
  );
};

export default VerticalLayout;
