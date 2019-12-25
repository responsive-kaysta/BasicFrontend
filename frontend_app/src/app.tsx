import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/about/about";
import Facet from "./pages/facet/facet";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import Sources from "./pages/sources/sources";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={() => <Home />} />
        <Route path="/sources" render={() => <Sources />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/facet" render={() => <Facet />} />
        <Route path="/about" render={() => <About />} />
      </BrowserRouter>
    );
  }
}

export default App;
