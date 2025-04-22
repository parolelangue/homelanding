'use client';
import { useEffect, useRef, ReactNode } from 'react';

import VerticalLayout from './modes/VerticalLayout';
import HorizontalLayout from './modes/HorizontalLayout';
import { useDispatch } from 'react-redux';
import { categoryActions } from '@/app/reducers/category';
import { EDictDataKey } from '../types/general';
import { useTranslation } from 'react-i18next';
import { useTitle } from '../hooks/useTitle';

type LayoutProps = {
  children: ReactNode;
  hidden?: any;
  settings?: any;
  saveSettings?: any;
  horizontalNavItems?: any;
  horizontalAppBarContent?: any;
  verticalNavItems?: any;
  verticalAppBarContent?: any;
  navVisible?: any;
};

const MasterLayout = (props: LayoutProps) => {
  const { hidden, children, settings, saveSettings } = props;

  useTitle();
  const isCollapsed = useRef<boolean>(settings.navCollapsed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' });
        isCollapsed.current = true;
      } else {
        saveSettings({ ...settings, layout: 'vertical' });
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({
          ...settings,
          navCollapsed: true,
          layout: settings.lastLayout,
        });
        isCollapsed.current = false;
      } else {
        saveSettings({ ...settings, layout: settings.lastLayout });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden]);

  useEffect(() => {
    dispatch(categoryActions.getContactInfo(EDictDataKey.HomePageContactInfo));
  }, []);

  if (settings.layout === 'horizontal') {
    return <HorizontalLayout {...props}>{children}</HorizontalLayout>;
  }

  return <VerticalLayout {...props}>{children}</VerticalLayout>;
};

export default MasterLayout;
