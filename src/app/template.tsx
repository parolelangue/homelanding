'use client';

import { SettingsConsumer, SettingsProvider } from '@/@core/context/settingsContext';
import ReactHotToast from '@/@core/style-libs/react-hot-toast';
import ThemeComponent from '@/@core/theme/ThemeComponent';
import { createEmotionCache } from '@/@core/utils/create-emotion-cache';
import { store } from '@/infra/store';
import { Toaster, ToastPosition } from 'react-hot-toast';
import { Provider } from 'react-redux';

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
  const cache = createEmotionCache();

  return (
    <Provider store={store}>
      {/* <CacheProvider value={cache}> */}
      {/* <AuthProvider> */}
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => (
            <ThemeComponent settings={settings}>
              <ClientLayout>{props.children}</ClientLayout>
              <ReactHotToast>
                <Toaster
                  position={settings.toastPosition as ToastPosition}
                  toastOptions={{
                    className: 'react-hot-toast',
                  }}
                />
              </ReactHotToast>
            </ThemeComponent>
          )}
        </SettingsConsumer>
      </SettingsProvider>
      {/* </AuthProvider> */}
      {/* </CacheProvider> */}
    </Provider>
  );
}
