import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
      </BrowserRouter>
    );
  }
}

export default App;
