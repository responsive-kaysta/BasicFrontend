import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";

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

          <PageBanner
            header="Basic Frontend"
            paragraph="Administration Overview with Boxes"
            cssStyle="light"
          />

          <Footer />
        </React.Suspense>
      </>
    );
  }

  public async componentWillMount() {
    const element = document.getElementById("body");
    if (element != null) {
      element.setAttribute("class", "landing");
    }
  }
}

export default PageAdminOverviewBoxes;
