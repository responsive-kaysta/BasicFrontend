
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

const Footer = React.lazy(() => import("./viewParts/Footer"));
const Header = React.lazy(() => import("./viewParts/Header"));
const Contact = React.lazy(() => import("./views/contact/Contact"));
const Home = React.lazy(() => import("./views/home/Home"));
const Stuff = React.lazy(() => import("./views/stuff/Stuff"));

class MainApplication extends React.Component<IViewState, IStoreState>  {

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "MainApplicationContext", storeContainer: this.props.viewContainer || [] };
  }

  public render() {

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <>          
            <Header />
            <article id="main">

              <Route exact={true} path="/" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <Home viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

              <Route path="/stuff" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <Stuff viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <Contact viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

            </article>
            <Footer />
          </>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}

export default MainApplication;
