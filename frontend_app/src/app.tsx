import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Impressum from "./pages/impressum/impressum";
import Technic from "./pages/technic/technic";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/technic" render={() => <Technic />} />
        <Route path="/impressum" render={() => <Impressum />} />
      </BrowserRouter>
    );
  }
}

export default App;
