
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Footer from "src/components/page/Footer";
import Header from "src/components/page/Header";

const MainPage = React.lazy(() => import("src/components/template/MainPage"));

class MainApplication extends React.Component<IViewState, IStoreState>  {

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "SomeFancyKeyContext", storeContainer: this.props.viewContainer || [] };
  }

  public async componentWillMount() {

    // tslint:disable-next-line: no-console
    console.log("MainApplication: componentWillMount");
    return true;
  }

  public async componentDidMount() {

    // tslint:disable-next-line: no-console
    console.log("MainApplication: componentDidMount");
    return true;
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
                <MainPage viewContext="PageHome" />
              )} />

              <Route path="/stuff" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContainer={this.state.storeContainer} />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContainer={this.state.storeContainer} />
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
