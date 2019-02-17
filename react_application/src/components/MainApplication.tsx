
import * as React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./ViewParts/Footer"
import Header from "./ViewParts/Header"

import Contact from "./Views/contact/Contact";
import Home from "./Views/home/Home";
import Stuff from "./Views/stuff/Stuff";

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
