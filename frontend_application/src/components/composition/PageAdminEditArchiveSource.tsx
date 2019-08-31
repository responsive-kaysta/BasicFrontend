import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../page/Footer";
import Header from "../page/Header";
import ArticleBanner from "../organism/ArticleBanner";

const PageBanner = React.lazy(() => import("../organism/PageBanner"));

class PageAdminEditArchiveSource extends React.Component<
  IViewState,
  IStoreState
> {
  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext, storeContainer: [] };
  }

  public render() {
    return (
      <>
        <React.Suspense key={this.props.viewContext} fallback="Loading">
          <Header />
          <article id="main">
            <ArticleBanner
              header="Edit Archive-Source: 125"
              paragraph="Example how to style the Edit Source Page"
              cssStyle="transparent"
            />
          </article>
          <section id="container" className="container light">
            <div className="page-header">
              <h2>Edit Archive-Source: 125</h2>
            </div>
            <div>
              <a href="/adminlistsources">
                <i className="fas fa-arrow-circle-left" />
                &nbsp; Back
              </a>
            </div>
          </section>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminEditArchiveSource;
