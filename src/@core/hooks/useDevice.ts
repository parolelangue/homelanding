import { useMediaQuery } from '@mui/material';

export const useDevice = () => {
  const isMobile = useMediaQuery('(min-width:320px) and (max-width:767px)');
  const isTablet = useMediaQuery('(min-width:767px) and (max-width:1199px)');
  const isDesktop = useMediaQuery('(min-width:1200px) and (max-width: 1440px');
  const isDesktopLarge = useMediaQuery('(min-width:1441px)');

  return {
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
    desktopLarge: isDesktopLarge,
  };
};
