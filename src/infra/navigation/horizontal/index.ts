const Navigation = () => {
  return [
    {
      icon: null,
      title: 'aboutAsam',
      children: [
        {
          title: 'asamSecuritiesCo',
          icon: null,
          path: '/about/asamSecuritiesCo',
        },
        {
          title: 'asamAssetManagement',
          icon: null,
          path: '/about/asamAssetManagement',
        },
      ],
    },
    {
      icon: null,
      title: 'services',
      children: [
        {
          title: 'brokerageService',
          icon: null,
          path: '/services/brokerageService',
        },
        {
          title: 'investmentBanking',
          icon: null,
          path: '/services/investmentBanking',
        },
      ],
    },
    {
      icon: null,
      title: 'support',
      children: [
        {
          title: 'userGuide',
          icon: null,
          path: '/support/userGuide',
        },
        {
          title: 'contact',
          icon: null,
          path: '/support/contact',
        },
      ],
    },
    {
      icon: null,
      title: 'news',
      children: [
        {
          title: 'informationDisclosure',
          icon: null,
          path: '/news/informationDisclosure',
        },
        {
          title: 'asamEvents',
          icon: null,
          path: '/news/asamEvents',
        },
        {
          title: 'certificateList',
          icon: null,
          path: '/news/certificateList',
        },
        {
          title: 'career',
          icon: null,
          path: '/news/career',
        },
      ],
    },
  ];
};

export default Navigation;
