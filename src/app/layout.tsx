import type { Metadata } from 'next';
import { alliance } from '@/@core/fonts';
import { Suspense } from 'react';
import Loading from './loading';
import Script from 'next/script';
import ZaloChat from '@/@core/components/zalo-chat';
import './global.css';

import Advertisement from '@/@core/components/advertisement';

export const metadata: Metadata = {
  title: 'ASAM',
  description:
    'ASAM khẳng định là một trong những công ty tài chính uy tín tại Việt Nam. Cam kết mang đến những dịch vụ tài chính chất lượng cao, minh bạch và chuyên nghiệp.',
  openGraph: {
    title: 'ASAM',
    description:
      'ASAM khẳng định là một trong những công ty tài chính uy tín tại Việt Nam. Cam kết mang đến những dịch vụ tài chính chất lượng cao, minh bạch và chuyên nghiệp.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon-48.png" />
        <link rel="shortcut icon" href="/favicon-48.png" />
        <link rel="manifest" href="/manifest.json" />
        <style>{`
            :root {
              --alliance-font: ${alliance.style.fontFamily};
            }
          `}</style>
        <meta property="fb:app_id" content="562841856678360"></meta>
      </head>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* <ZaloChat /> */}
        <Advertisement />

        <Script src="/js/zalo-sdk.js" async crossOrigin="anonymous" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GG_ANALYTICS_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GG_ANALYTICS_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
