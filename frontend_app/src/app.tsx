import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Spinner from "./elements/spinner/spinner";
import About from "./pages/about/about";
import Home from "./pages/home/home";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={<Spinner />}>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
