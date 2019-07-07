import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Spinner from "../../components/core/Spinner";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";

const PageBanner = React.lazy(() =>
  import("../../components/organism/PageBanner")
);
const EyeCatcher = React.lazy(() =>
  import("../../components/organism/EyeCatcher")
);
const SomeLoremContent = React.lazy(() =>
  import("../../components/organism/SectionSomeLoremContent")
);

// credits: https://wiki.ubuntuusers.de/Apache/Virtual_Hosts/

class PageHome extends React.Component<IViewState, IStoreState> {
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
            paragraph="finest - reactive &amp; responsive - frontend"
            cssStyle="light"
          />

          <article id="main">
            <EyeCatcher
              header="Umbraco, reactjs, css"
              paragraph="Die Kombination – Umbraco & reactjs & css"
              cssStyle="green"
              elId="one"
            />

            <SomeLoremContent header="Lorem Content 1" cssStyle="light" />

            <EyeCatcher
              header="Eye-Catcher"
              paragraph="a fancy eye-catcher"
              cssStyle="purple"
              elId="two"
            />

            <SomeLoremContent header="Lorem Content 2" cssStyle="light" />
          </article>

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

export default PageHome;
