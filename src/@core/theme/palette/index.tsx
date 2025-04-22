const DefaultPalette = (mode: any, skin: any, themeColor: any) => {
  // ** Vars
  const lightColor = '58, 53, 65';
  const darkColor = '231, 227, 252';
  const mainColor = mode === 'light' ? lightColor : darkColor;

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#C6A7FE';
    } else if (themeColor === 'secondary') {
      return '#9C9FA4';
    } else if (themeColor === 'success') {
      return '#93DD5C';
    } else if (themeColor === 'error') {
      return '#FF8C90';
    } else if (themeColor === 'warning') {
      return '#FFCF5C';
    } else {
      return '#6ACDFF';
    }
  };

  const defaultBgColor = () => {
    if (mode === 'light') {
      return '#FFF';
    } else if (mode === 'dark') {
      return '#141414';
    } else if (mode === 'light') {
      return '#FFFFFF';
    } else return '#FFF';
  };

  // -------------- CARD TEXT ---------- //
  const cardBgColor = () => {
    return mode === 'light' ? '#fff' : '#0b0b0b';
  };
  const cardBorderColor = () => {
    return mode === 'light' ? '#e8e8e8' : '#262626';
  };
  const cardTextTitleColor = () => {
    return mode === 'light' ? '#1A2035' : '#FAFAFA';
  };
  // -------------- CARD TEXT ---------- //

  const textColor = () => {
    const cls = {
      light: '#031109',
      dark: '#fff',
    };
    return cls[mode];
  };

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#28243D',
      lightBg: '#F4F5FA',
      primaryGradient: primaryGradient(),
      bodyBg: mode === 'light' ? '#F4F5FA' : '#28243D',
      tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759',
    },
    common: {
      black: '#000',
      white: '#FFF',
      brand: '#00E5AB',
      domain: '#0066FF',
      caption: '#404040',
      close: '#737373',
      trOdd: '#F8FBFF',
      bgGray: '#EAEBEC',
      cardBorder: cardBorderColor(),
    },
    mode: mode,
    primary: {
      lighter: '#E8F5E9',
      light: '#97B4FF',
      main: '#2A30FF',
      dark: '#1D21B6',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#9C9FA4',
      main: '#8A8D93',
      dark: '#777B82',
      contrastText: '#FFF',
    },
    success: {
      light: '#6AD01F',
      main: '#56CA00',
      dark: '#4CB200',
      contrastText: '#FFF',
    },
    error: {
      light: '#FF6166',
      main: '#F5222D',
      dark: '#E04347',
      contrastText: '#FFF',
    },
    warning: {
      light: '#FFCA64',
      main: '#FFBF0F',
      dark: '#E09E00',
      contrastText: '#FFF',
    },
    info: {
      light: '#32BAFF',
      main: '#16B1FF',
      dark: '#139CE0',
      contrastText: '#FFF',
    },
    second_gray: {
      light: '#32BAFF',
      main: '#C8CBCA',
      dark: '#139CE0',
      contrastText: '#FFF',
    },
    third_button: {
      light: '#32BAFF',
      main: '#16B1FF',
      dark: '#139CE0',
      contrastText: '#FFF',
    },
    black: {},
    gray: {
      900: '#1E293B',
    },
    grey: {
      50: '#F6F6F6',
      100: '#eeeeee',
      200: '#E2E2E2',
      300: '#ebf1ed',
      400: '#AFAFAF',
      500: '#9E9E9E',
      600: '#BFBFBF',
      700: '#616161',
      800: '#1F1F1F',
      900: '#141414',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030',
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      third: `#263238`,
      disabled: `rgba(${mainColor}, 0.38)`,
      label: '#402BB0',
      sLabel: '#737373',
      tLabel: '#404040',
      link: '#263238',
      copy: '#6A6A6A',
      neutral900: '#1A2035',
      neutral950: '#F7F8F8',
      neutral700: '#BFC1C7',
      neutral800: '#33394C',
      neutral400: '#ADB0B7',
      neutral300: '#404557',
      neutral500: '#8C8F9A',
      neutral100: '#E6E6E9',
      green600: '#2EB553',
      positive950: '#031109',
      black800: '#595959',
      black600: '#bcbcbc',
      black700: '#8C8C8C',
      black400: '#E8E8E8',
      black500: '#D9D9D9',
      black900: '#262626',
      cardTitle: cardTextTitleColor(),
      mode: textColor(),
      blue: '#0b8df0',
      gray100: '#F8FAFC',
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#312D4B',
      default: defaultBgColor(),
      header: '#004DBF',
      bgSection: '#F5F7FA',
      bgHeader: '#E6F0FF',
      bgSecondary: '#FBFBFB',
      bgThree: '#00E5AB',
      bgFour: '#3B82F6',
      bgFive: '#CCFAEE',
      card: cardBgColor(),
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
      link: '#0066FF',
    },
  };
};

export const colors = {};

export const cssUtils = {
  cubic: 'cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  customCubic: 'cubic-bezier(.27,.19,.37,.9)',
};

export default DefaultPalette;
