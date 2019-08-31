import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Spinner from "../../components/core/Spinner";
import PageAdminOverviewBoxes from "../composition/PageAdminOverviewBoxes";

const PageHome = React.lazy(() =>
  import("../../components/composition/PageHome")
);
const PageStuff = React.lazy(() =>
  import("../../components/composition/PageStuff")
);
const PageArticles = React.lazy(() =>
  import("../../components/composition/PageArticles")
);
const PageContact = React.lazy(() =>
  import("../../components/composition/PageContact")
);

class MainPage extends React.Component<IViewState, IStoreState> {
  private component: any | undefined;

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = {
      storeContext: this.props.viewContext,
      storeContainer: this.props.viewContainer
    };
  }

  public async componentWillMount() {
    if (this.state.storeContext === "PageHomeContext") {
      this.component = <PageHome viewContext={this.state.storeContext} />;
    } else if (this.state.storeContext === "PageStuffContext") {
      this.component = <PageStuff viewContext={this.state.storeContext} />;
    } else if (this.state.storeContext === "PageArticlesContext") {
      this.component = <PageArticles viewContext={this.state.storeContext} />;
    } else if (this.state.storeContext === "PageContactContext") {
      this.component = <PageContact viewContext={this.state.storeContext} />;
    } else if (this.state.storeContext === "PageAdminOverviewBoxesContext") {
      this.component = (
        <PageAdminOverviewBoxes viewContext={this.state.storeContext} />
      );
    }

    return true;
  }

  public render() {
    return (
      <>
        <React.Suspense fallback={<Spinner />}>{this.component}</React.Suspense>
      </>
    );
  }
}

export default MainPage;
