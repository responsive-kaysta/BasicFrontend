import { Router } from "@reach/router";
import React from "react";
import { addPrefetchExcludes, Root, Routes } from "react-static";
import "../public/assets/css/fontawesome-all.css";
import "../public/assets/css/styles.css";
import Spinner from "./elements/spinner/spinner";
import Footer from "./page-includes/footer";
import Header from "./page-includes/header";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Header />
      <React.Suspense fallback={<Spinner loadingState={true} />}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <Footer />
    </Root>
  );
}

export default App;
