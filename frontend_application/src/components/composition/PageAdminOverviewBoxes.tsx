import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";
import ArticleBanner from "../organism/ArticleBanner";

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
              paragraph="Example how to style an admin Overview Page"
              cssStyle="transparent"
            />

            <section id="container" className="container light">
              <div className="page-header">
                <h2>Management</h2>
              </div>
              <div className="flex-container">
                <div className="box box-three-in-row">
                  <a href="/adminlistsources">List Sources</a>
                </div>
                <div className="box box-three-in-row">Search/edit Source</div>
                <div className="box box-three-in-row">
                  <a href="/admineditarticle">Search/edit Article</a>
                </div>
                <div className="box box-three-in-row">Add new Source</div>
                <div className="box box-three-in-row">
                  <a href="/adminchecksource">Check Source</a>
                </div>
                <div className="box box-three-in-row">Check Articles</div>
                <div className="box box-three-in-row">Manage Types</div>
                <div className="box box-three-in-row">Manage Languages</div>
                <div className="box box-three-in-row">Manage Sources</div>
                <div className="box box-three-in-row">Manage Categories</div>
                <div className="box box-three-in-row">Manage Facettes</div>
                <div className="box box-three-in-row">Manage Users</div>
              </div>
              <div className="page-header">
                <h2>Statistics</h2>
              </div>
              <div className="flex-container">
                <div className="box box-three-in-row">Source Statistics</div>
                <div className="box box-three-in-row">Article Statistics</div>
                <div className="box box-three-in-row">Type Statistics</div>
                <div className="box box-three-in-row">Language Statistics</div>
                <div className="box box-three-in-row">Category Statistics</div>
                <div className="box box-three-in-row">Facette Statistics</div>
              </div>
            </section>
          </article>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminOverviewBoxes;
