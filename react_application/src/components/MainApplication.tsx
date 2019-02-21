
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Footer from "src/components/viewParts/Footer";
import Header from "src/components/viewParts/Header";

const Contact = React.lazy(() => import("src/components/views/Contact"));
const Home = React.lazy(() => import("src/components/views/Home"));
const Stuff = React.lazy(() => import("src/components/views/Stuff"));

class MainApplication extends React.Component<IViewState, IStoreState>  {

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "SomeFancyKeyContext", storeContainer: this.props.viewContainer || [] };
  }

  public render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <article id="main">
            <React.Suspense fallback={<>Loading...</>}>

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

            </React.Suspense>
          </article>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default MainApplication;
