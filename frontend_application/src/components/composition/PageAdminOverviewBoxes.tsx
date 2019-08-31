import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";
import ArticleBanner from "../organism/ArticleBanner";

const PageBanner = React.lazy(() =>
  import("../../components/organism/PageBanner")
);

class PageAdminOverviewBoxes extends React.Component<IViewState, IStoreState> {
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
              paragraph="Example how to style a admin Overview Page"
              cssStyle="transparent"
            />
          </article>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminOverviewBoxes;
