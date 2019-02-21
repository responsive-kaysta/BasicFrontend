
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Footer from "src/components/viewParts/Footer";
import Header from "src/components/viewParts/Header";

class MainApplication extends React.Component<IViewState, IStoreState>  {

  private Contact = React.lazy(() => import("src/components/views/Contact"));
  private Home = React.lazy(() => import("src/components/views/Home"));
  private Stuff = React.lazy(() => import("src/components/views/Stuff"));

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
                <this.Home viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

              <Route path="/stuff" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <this.Stuff viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <this.Contact viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
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
