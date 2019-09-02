import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../page/Footer";
import Header from "../page/Header";
import ArticleBanner from "../organism/ArticleBanner";

const PageBanner = React.lazy(() => import("../organism/PageBanner"));

class PageAdminCheckArchiveSource extends React.Component<
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
              header="Admin Overview with Boxes"
              paragraph="Example how to style an admin Overview Page"
              cssStyle="transparent"
            />
            <section id="container" className="container light">
              <div className="page-header">
                <h2>Check Source - Id: 75 - Tages-Anzeiger Börse</h2>
              </div>

              <div className="flex-column-wraper row">
                <a href="/adminoverviewboxes" className="link-h-padding">
                  <i className="fas fa-arrow-circle-left" />
                  &nbsp; Back
                </a>
                <a href="/admineditsource" className="link-h-padding">
                  <i className="far fa-check-circle" />
                  &nbsp; Add a new Source
                </a>
              </div>

              <div className="flex-container">
                <div className="box box-three-in-row">
                  <a href="#">Source Details</a>
                </div>
                <div className="box box-three-in-row">
                  <a href="#">Check Source State</a>
                </div>
                <div className="box box-three-in-row">
                  <a href="#">Test Serializer</a>
                </div>
              </div>
            </section>
          </article>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminCheckArchiveSource;
