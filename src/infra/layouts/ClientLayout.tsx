import { useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

const MasterLayout = dynamic(() => import('@/@core/layouts/MaterLayout'), { ssr: false });

import ZaloChat from '@/@core/components/zalo-chat';
import { useSettings } from '@/@core/hooks/useSettings';
import dynamic from 'next/dist/shared/lib/dynamic';

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <MasterLayout hidden={hidden} settings={settings} saveSettings={saveSettings}>
      {children}
      {/* <ZaloChat /> */}
    </MasterLayout>
  );
};

export default ClientLayout;
