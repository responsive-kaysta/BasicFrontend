
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Footer from "src/components/page/Footer";
import Header from "src/components/page/Header";

class MainApplication extends React.Component<IViewState, IStoreState>  {

  private MainPage = React.lazy(() => import("src/components/template/MainPage"));

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "MainPageContext", storeContainer: this.props.viewContainer || [] };
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
      <React.Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <>
            <Header />
            <article id="main">

              <Route exact={true} path="/" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <this.MainPage viewContext="PageHomeContext" />
              )} />

              <Route path="/stuff" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <this.MainPage viewContext="PageStuffContext" />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <this.MainPage viewContainer={this.state.storeContainer} />
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
