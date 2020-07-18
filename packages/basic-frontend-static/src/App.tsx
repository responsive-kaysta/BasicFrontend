import { Router } from "@reach/router";
import Dynamic from "containers/Dynamic";
import React from "react";
import { addPrefetchExcludes, Head, Root, Routes } from "react-static";
import {
  PAGE_AUTHOR,
  PAGE_DESCRIPTION,
  PAGE_KEYWORDS,
  PAGE_NAME,
  PAGE_TOPIC,
} from "./constants";
import "./generated-tailwind.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="page-topic" content={PAGE_TOPIC} />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 day" />
        <meta name="audience" content="all" />
        <meta http-equiv="expires" content="1 day" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta name="msvalidate.01" content="1D150EFBAA80F83F5DB962EEEC207A71" />
        <meta
          name="google-site-verification"
          content="BssuUU-ydAdC_X5jgGXcGxJuiuDXgum3LFW2vfUxMeM"
        />
        <meta name="description" content={`${PAGE_NAME} ${PAGE_DESCRIPTION}`} />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <meta name="author" content={PAGE_AUTHOR} />
      </Head>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
