import {
  isAnalyticsSet,
  Spinner,
  ThemeDarkgray,
  ThemeTransparent,
  Topbar
} from 'basic-frontend-common';
import React from 'react';
import { Head, Root } from 'react-static'
import {
  BG_IMAGE,
  ICON,
  PAGE_AUTHOR,
  PAGE_DESCRIPTION,
  PAGE_KEYWORDS,
  PAGE_NAME,
  PAGE_TOPIC
} from './constants';
import './generated-tailwind.css';
import { FooterComponent, MenuItems } from './includes/site-parts';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  if (typeof window !== 'undefined' && BG_IMAGE) {
    document.body.style.backgroundImage = `linear-gradient(to bottom, #0b3536 0%, rgba(125, 185, 232, 0)), url(${BG_IMAGE})`;
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
  }
  return (
    <>
      {typeof window !== 'undefined' ? (
        <Root>
          <Head>
            {isAnalyticsSet() && (
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-4DXLE712B1"
              ></script>
            )}
            <meta charSet="UTF-8" />
            <link rel="icon" href={ICON} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href={ICON} />
            <meta name="page-topic" content={PAGE_TOPIC} />
            <meta name="robots" content="all" />
            <meta name="revisit-after" content="1 day" />
            <meta name="audience" content="all" />
            <meta http-equiv="expires" content="1 day" />
            <meta http-equiv="cache-control" content="no-cache" />
            <meta
              name="description"
              content={`${PAGE_NAME} ${PAGE_DESCRIPTION}`}
            />
            <meta name="keywords" content={PAGE_KEYWORDS} />
            <meta name="author" content={PAGE_AUTHOR} />

            {isAnalyticsSet() && (
              <meta
                name="msvalidate.01"
                content="1D150EFBAA80F83F5DB962EEEC207A71"
              />
            )}
            {isAnalyticsSet() && (
              <script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-4DXLE712B1');`}</script>
            )}
          </Head>
          <Topbar
            branding={PAGE_NAME}
            theme={ThemeDarkgray}
            menuItems={MenuItems()}
            footer={<FooterComponent theme={ThemeDarkgray} />}
            stickyHeader
          >
            <React.Suspense
              fallback={
                <Spinner theme={ThemeTransparent} backgroundImage={BG_IMAGE} />
              }
            >
              
            <BrowserRouter>
              <Routes>
               <Route path="*" />
              </Routes>
            </BrowserRouter>

            </React.Suspense>
          </Topbar>
        </Root>
      ) : null}
    </>
  );
}

export default App;
