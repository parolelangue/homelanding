import type { NextComponentType, NextPageContext, NextLayoutComponentType } from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode;
    setConfig?: any;
    authGuard?: any;
    guestGuard?: any;
    acl?: any;
  };
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    bgGray: string;
    gray: string;
    cardBorder: string;
  }

  interface TypeBackground {
    card: string;
  }

  interface TypeText {
    link: string;
    gray: string;
    neutral900: string;
    neutral700: string;
    neutral800: string;
    neutral400: string;
    neutral00: string;
    green600: string;
    positive950: string;
    black800: string;
    black600: string;
    black700: string;
    black400: string;
    neutral500: string;
    black500: string;
    black900: string;
    cardTitle: string;
    mode: string;
    neutral950: string;
    neutral300: string;
    neutral100: string;
    gray100: string;
    blue: string;
  }
}

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }

  interface FB {
    init: () => void;
  }
}
