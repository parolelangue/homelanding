import { useTranslation } from 'react-i18next';

export const useResources = () => {
  const { t } = useTranslation('common');

  const navLinks = [
    {
      label: t('navLinks.whatWeDo'),
      path: 'flow',
    },
    {
      label: t('navLinks.technology'),
      path: 'whatWeDo',
    },
    {
      label: t('navLinks.services'),
      path: 'services',
    },
    {
      label: t('navLinks.solution'),
      path: 'solution',
    },
    {
      label: t('navLinks.organization'),
      path: 'organization',
    },
    {
      label: t('navLinks.contact'),
      path: 'contact',
    },
  ];
  return { navLinks };
};
