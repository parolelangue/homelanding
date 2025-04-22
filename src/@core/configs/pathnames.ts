export const PATH_NAMES = {
  Home: '/',
  News: {
    Index: '/news',
    InformationDisclosure: '/news/information-disclosure',
    Events: '/news/events',
    Certification: '/news/certification',
    Careers: '/news/careers',
  },
  Supports: {
    Index: '/supports',
    Contact: '/supports/contact',
    UserManual: '/supports/user-manual',
    BondInvestment: '/supports/bond-investment',
  },
};

export const PATH_NAME_LABELS = {
  ['']: 'navLinks.home',
  [PATH_NAMES.Home]: 'navLinks.home',
  [PATH_NAMES.News.Index]: 'navLinks.news',
  [PATH_NAMES.News.InformationDisclosure]: 'navLinks.informationDisclosure',
  [PATH_NAMES.News.Events]: 'navLinks.asamEvents',
  [PATH_NAMES.News.Certification]: 'navLinks.certificateList',
  [PATH_NAMES.News.Careers]: 'navLinks.career',
  [PATH_NAMES.Supports.BondInvestment]: 'navLinks.bondInvestment',
  [PATH_NAMES.Supports.UserManual]: 'navLinks.userManual',
  [PATH_NAMES.Supports.Contact]: 'navLinks.contact',
};
