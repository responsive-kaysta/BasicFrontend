import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./compositions/page/footer";
import Header from "./compositions/page/header";
import About from "./views/about/about";
import Contact from "./views/contact/contact";
import Home from "./views/home/home";
import Impressum from "./views/impressum/impressum";
import Projects from "./views/projects/projects";
import Technic from "./views/technic/technic";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact={true} path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/technic" render={() => <Technic />} />
        <Route path="/impressum" render={() => <Impressum />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/contact" render={() => <Contact />} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
