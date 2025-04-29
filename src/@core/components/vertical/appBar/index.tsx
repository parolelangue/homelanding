import { cssUtils } from '@/@core/theme/palette';
import { Box, Stack, styled, useScrollTrigger, useTheme } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import LogoMain from '../../icons/LogoMain';
import ConfigLanguage from '../../shared/sections/config-language';

const TopBar = styled(Stack)(({ theme }) => ({
  width: '100%',
  backgroundColor: '',
  position: 'fixed',
  // height: 60,
  maxHeight: 60,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  top: 0,
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '0%',
    backgroundColor: theme.palette.common.white,
    // boxShadow: '10px 10px 40px rgba(0, 0, 0, 0.1)',
    transition: 'height 0.25s ease-in-out',
  },
  '&.active': {
    '&:after': {
      height: '100%',
      transition: 'height 0.25s ease-in-out',
    },
  },
  [theme.breakpoints.down('sm')]: {},
}));

const HamburgerButton = styled(Box)(({ theme }) => ({
  width: '1.5rem',
  height: '1.5rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  cursor: 'pointer',
  span: {
    width: '1.5rem',
    height: '3px',
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
      width: '1.25rem',
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
      right: 'unset',
      transition: 'all .2s ' + cssUtils.customCubic,
    },
    '.last': {
      width: '1.5rem',
      top: '50%',
      left: '1px',
      transform: 'rotate(-45deg) translateY(-50%)',
      transition: 'all .2s ' + cssUtils.customCubic,
    },
  },
}));

const Wrap = styled(Stack)(({ theme }) => ({
  padding: '0.5rem 1rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 3,
  width: '100%',
}));

const StyleLogo = styled('div')(({ theme }) => ({
  width: 180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  svg: {
    width: '100%',
    height: '100%',
  },
}));

type LayoutBarProps = {
  active: boolean;
  toggleSidebar: VoidFunction;
};

const LAppBar = ({ active, toggleSidebar }: LayoutBarProps) => {
  const scrollTrigger = useScrollTrigger({
    threshold: 72,
    disableHysteresis: true,
  });
  return (
    <TopBar className={clsx('AAAA', { active: scrollTrigger })}>
      <Wrap direction={'row'}>
        <Link href="/" passHref>
          <StyleLogo>
            <LogoMain />
          </StyleLogo>
        </Link>
        <Stack direction={'row'} gap={3} alignItems={'center'}>
          <ConfigLanguage />
          <HamburgerButton
            onClick={toggleSidebar}
            className={active ? 'active' : ''}
            component={'div'}
          >
            <span className="first"></span>
            <span className="middle"></span>
            <span className="last"></span>
          </HamburgerButton>
        </Stack>
      </Wrap>
    </TopBar>
  );
};
export default LAppBar;
