import { Router } from '@reach/router';
import { Spinner, ThemeTransparent } from 'basic-frontend-common';
import React from 'react';
import { Head, Root, Routes } from 'react-static';
import {
  BG_IMAGE,
  ICON,
  PAGE_AUTHOR,
  PAGE_DESCRIPTION,
  PAGE_KEYWORDS,
  PAGE_NAME,
  PAGE_TOPIC,
} from './constants';
import './generated-tailwind.css';

function App() {
  return (
    <Root>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4DXLE712B1"
        ></script>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href={ICON} />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="page-topic" content={PAGE_TOPIC} />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 day" />
        <meta name="audience" content="all" />
        <meta http-equiv="expires" content="1 day" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta name="msvalidate.01" content="1D150EFBAA80F83F5DB962EEEC207A71" />
        <meta name="description" content={`${PAGE_NAME} ${PAGE_DESCRIPTION}`} />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <meta name="author" content={PAGE_AUTHOR} />
        <script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-4DXLE712B1');`}</script>
      </Head>
      <React.Suspense
        fallback={
          <Spinner backgroundImage={BG_IMAGE} theme={ThemeTransparent} />
        }
      >
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
