'use client';

import { SettingsConsumer, SettingsProvider } from '@/@core/context/settingsContext';
import ThemeComponent from '@/@core/theme/ThemeComponent';

// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/splide/css';

// or other themes
import 'react-datepicker/dist/react-datepicker.css';

// or only core styles
import '@splidejs/react-splide/css/core';

import '@/infra/configs/i18n';
import ClientLayout from '@/infra/layouts/ClientLayout';
export default function Template(props: any) {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ThemeComponent settings={settings}>
            <ClientLayout>{props.children}</ClientLayout>
            {/* <ReactHotToast>
              <Toaster
                position={settings.toastPosition as ToastPosition}
                toastOptions={{
                  className: 'react-hot-toast',
                }}
              />
            </ReactHotToast> */}
          </ThemeComponent>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
}
