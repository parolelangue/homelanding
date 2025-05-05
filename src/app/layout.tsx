import type { Metadata } from 'next';
import { alliance } from '@/@core/fonts';
import { Suspense } from 'react';
import Loading from './loading';
import './global.css';
import LoadingPage from '@/@core/components/loading-page';

export const metadata: Metadata = {
  title: 'Aprotech',
  description: 'Aprotech.',
  openGraph: {
    title: 'Aprotech',
    description: 'ASAM .',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={
        {
          '--alliance-font': alliance.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <head>
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon-48.png" />
        <link rel="shortcut icon" href="/favicon-48.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="fb:app_id" content="562841856678360"></meta>
      </head>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* <ZaloChat /> */}
        {/* <Advertisement /> */}
        <LoadingPage />
        {/* <Script src="/js/zalo-sdk.js" async crossOrigin="anonymous" /> */}
        {/* <script
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
        /> */}
      </body>
    </html>
  );
}
