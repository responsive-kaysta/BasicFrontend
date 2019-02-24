
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Footer from "src/components/page/Footer";
import Header from "src/components/page/Header";
import MainPage from "src/components/template/MainPage";

class MainApplication extends React.Component<IViewState, IStoreState>  {

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "MainPageContext", storeContainer: this.props.viewContainer || [] };
  }

  public render() {
    return (
        <BrowserRouter>
          <>
            <Header />
            <article id="main">

              <Route exact={true} path="/" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContext="PageHomeContext" />
              )} />

              <Route path="/stuff" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContext="PageStuffContext" />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContainer={this.state.storeContainer} />
              )} />

            </article>
            <Footer />
          </>
        </BrowserRouter>
    );
  }
}

export default MainApplication;
