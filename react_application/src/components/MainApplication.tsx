
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Callback from "src/components/core/Callback";
import Footer from "src/components/page/Footer";
import Header from "src/components/page/Header";

const MainPage = React.lazy(() => import('src/components/template/MainPage'));

/*
    https://blog.logrocket.com/async-rendering-in-react-with-suspense-5d0eaac886c8

*/

class MainApplication extends React.Component<IViewState, IStoreState>  {

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "MainPageContext", storeContainer: this.props.viewContainer || [] };
  }

  public render() {
    return (
      <React.Suspense key={this.props.viewContext} fallback={<Callback />}>
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

              <Route path="/stuff/latestarticles" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContext="PageArticlesContext" />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <MainPage viewContainer={this.state.storeContainer} />
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
