import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";
import ArticleBanner from "../organism/ArticleBanner";

class PageAdminIcons extends React.Component<IViewState, IStoreState> {
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
                <h2>Page Admin Icons</h2>
              </div>

              <div className="flex-row-wrapper row">
                {/*   */}
                <i className="fas fa-tools">
                  <a href="#">Management</a>
                </i>
                <hr />
                {/*   */}

                <i className="fas fa-user-cog">
                  <a href="#">Edit User Profile</a>
                </i>
                <i className="fas fa-user-shield">
                  <a href="#">User Profile</a>
                </i>
                <i className="fas fa-users-cog">
                  <a href="#">User Management</a>
                </i>
                <hr />
                {/*   */}

                <i className="fas fa-external-link-alt">
                  <a href="#">External Link</a>
                </i>
                <i className="fas fa-rss-square">
                  <a href="#">RSS Link</a>
                </i>
                <hr />
                {/*   */}

                <i className="far fa-clock">
                  <a href="#">Timestamp</a>
                </i>
                <i className="fas fa-history">
                  <a href="#">Modified Timestamp</a>
                </i>
                <hr />
                {/*   */}
              </div>
            </section>
          </article>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminIcons;
