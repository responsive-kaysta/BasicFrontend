
import * as React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./viewParts/Footer";
import Header from "./viewParts/Header";

import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import Stuff from "./views/stuff/Stuff";

class MainApplication extends React.Component {
  public render() {
    return (
      <BrowserRouter>
          <>
          <Header />
          <article id="main">
            <Route exact={true} path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </article>
          <Footer />
          </>
      </BrowserRouter>
    );
  }
}

export default MainApplication;
