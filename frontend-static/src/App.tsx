import { Router } from "@reach/router";
import React from "react";
import { addPrefetchExcludes, Root, Routes } from "react-static";
import "../public/assets/css/fontawesome-all.css";
import "../public/assets/css/styles.css";
import Header from "./page-includes/header";
import Footer from "./page-includes/footer";
import Index from "./pages/index";
import About from "./pages/about";
import Impressum from "./pages/impressum";
import Technic from "./pages/technic";
import Contact from "./pages/contact";
import Spinner from "./elements/spinner/spinner";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Header />
      <React.Suspense fallback={<Spinner loadingState={true} />}>
        <Router>
          <Routes path="*" />
          <Routes path="/" render={() => <Index key="index" />} />
          <Routes path="/about" render={() => <About key="about" />} />
          <Routes
            path="/impressum"
            render={() => <Impressum key="impressum" />}
          />
          <Routes path="/technic" render={() => <Technic key="technic" />} />
          <Routes path="/contact" render={() => <Contact key="contact" />} />
        </Router>
      </React.Suspense>
      <Footer />
    </Root>
  );
}

export default App;
