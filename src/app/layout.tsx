import type { Metadata } from 'next';
import { alliance } from '@/@core/fonts';
import { Suspense } from 'react';
import Loading from './loading';
import './global.css';
import LoadingPage from '@/@core/components/loading-page';

export const metadata: Metadata = {
  title: 'Aprotech Inc.',
  description: 'Great idea & Creative Technology',
  openGraph: {
    title: 'Aprotech Inc.',
    description: 'Great idea & Creative Technology',
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
        {/* <link rel="apple-touch-icon" sizes="48x48" href="/favicon-48.png" />
        <link rel="shortcut icon" href="/favicon-48.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="fb:app_id" content="562841856678360"></meta>
        <meta property="og:title" content="Aprotech Inc." />
        <meta property="og:description" content="Great idea & Creative Technology." />
        <meta property="og:image" content="/favicon-48.png" /> */}

        <link rel="shortcut icon" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/aprotech-avatar-512.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aprotech.kr/" />
        <meta property="og:title" content="Aprotech Inc." />
        <meta property="og:description" content="Great Idea & Creative Technology" />
        <meta property="og:image" content="/aprotech-og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
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
