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
                <h2>(far) Icons</h2>
              </div>

              <div className="flex-row-wrapper row">
                <i className="far fa-clock">
                  <a href="/adminicons">far fa-clock</a>
                </i>
                <i className="far fa-trash-alt">
                  <a href="/adminicons">far fa-trash-alt</a>
                </i>
                <i className="far fa-check-circle">
                  <a href="/adminicons">far fa-check-circle</a>
                </i>
                <i className="far fa-trash-alt">
                  <a href="/adminicons">far fa-trash-alt</a>
                </i>
                <i className="far fa-object-group">
                  <a href="/adminicons">far fa-object-group</a>
                </i>
                <i className="far fa-object-ungroup">
                  <a href="/adminicons">far fa-object-ungroup</a>
                </i>
                <i className="far fa-edit">
                  <a href="/adminicons">far fa-edit</a>
                </i>
                <i className="far fa-file-alt">
                  <a href="/adminicons">far fa-file-alt</a>
                </i>
                <i className="far fa-plus-square">
                  <a href="/adminicons">far fa-plus-square</a>
                </i>
                <i className="far fa-share-square">
                  <a href="/adminicons">far fa-share-square</a>
                </i>
                <i className="far fa-times-circle">
                  <a href="/adminicons">far fa-times-circle</a>
                </i>
                {/* */}
                {/* */}
                {/* */}
                <div className="page-header">
                  <h2>(fas) Icons</h2>
                </div>
                {/* */}
                {/* */}
                {/* */}
                <i className="fas fa-tools">
                  <a href="/adminicons">fas fa-tools</a>
                </i>
                <i className="fas fa-user-cog">
                  <a href="/adminicons">fas fa-user-cog</a>
                </i>
                <i className="fas fa-user-shield">
                  <a href="/adminicons">fas fa-user-shield</a>
                </i>
                <i className="fas fa-users-cog">
                  <a href="/adminicons">fas fa-users-cog</a>
                </i>
                <i className="fas fa-rss-square">
                  <a href="/adminicons">fas fa-rss-square</a>
                </i>
                <i className="fas fa-rss">
                  <a href="/adminicons">fas fa-rss</a>
                </i>
                <i className="fas fa-history">
                  <a href="/adminicons">fas fa-history</a>
                </i>
                <i className="fas fa-link">
                  <a href="/adminicons">fas fa-link</a>
                </i>
                <i className="fas fa-redo-alt">
                  <a href="/adminicons">fas fa-redo-alt</a>
                </i>
                <i className="fas fa-sync">
                  <a href="/adminicons">fas fa-sync</a>
                </i>
                <i className="fas fa-check-circle">
                  <a href="/adminicons">fas fa-check-circle</a>
                </i>
                <i className="fas fa-home">
                  <a href="/adminicons">fas fa-home</a>
                </i>
                <i className="fas fa-plus-square">
                  <a href="/adminicons">fas fa-plus-square</a>
                </i>
                <i className="fas fa-search">
                  <a href="/adminicons">fas fa-search</a>
                </i>
                <i className="fas fa-share-square">
                  <a href="/adminicons">fas fa-share-square</a>
                </i>
                <i className="fas fa-times-circle">
                  <a href="/adminicons">fas fa-times-circle</a>
                </i>
                <i className="fas fa-adjust">
                  <a href="/adminicons">fas fa-adjust</a>
                </i>
                <i className="fas fa-archive">
                  <a href="/adminicons">fas fa-archive</a>
                </i>
                <i className="fas fa-ban">
                  <a href="/adminicons">fas fa-ban</a>
                </i>
                <i className="fas fa-bomb">
                  <a href="/adminicons">fas fa-bomb</a>
                </i>
                <i className="fas fa-bolt">
                  <a href="/adminicons">fas fa-bolt</a>
                </i>
                <i className="fas fa-brain">
                  <a href="/adminicons">fas fa-brain</a>
                </i>
                <i className="fas fa-bug">
                  <a href="/adminicons">fas fa-bug</a>
                </i>
                <i className="fas fa-bullseye">
                  <a href="/adminicons">fas fa-bullseye</a>
                </i>
                <i className="fas fa-burn">
                  <a href="/adminicons">fas fa-burn</a>
                </i>
                <i className="fas fa-calculator">
                  <a href="/adminicons">fas fa-calculator</a>
                </i>
                <i className="fas fa-certificate">
                  <a href="/adminicons">fas fa-certificate</a>
                </i>
                <i className="fas fa-chart-pie">
                  <a href="/adminicons">fas fa-chart-pie</a>
                </i>
                <i className="fas fa-check-circle">
                  <a href="/adminicons">fas fa-check-circle</a>
                </i>
                <i className="fas fa-circle">
                  <a href="/adminicons">fas fa-circle</a>
                </i>
                <i className="fas fa-circle-notch">
                  <a href="/adminicons">fas fa-circle-notch</a>
                </i>
                <i className="fas fa-clock">
                  <a href="/adminicons">fas fa-clock</a>
                </i>
                <i className="fas fa-cogs">
                  <a href="/adminicons">fas fa-cogs</a>
                </i>
                <i className="fas fa-cog">
                  <a href="/adminicons">fas fa-cog</a>
                </i>
                <i className="fas fa-copyright">
                  <a href="/adminicons">fas fa-copyright</a>
                </i>
                <i className="fas fa-edit">
                  <a href="/adminicons">fas fa-edit</a>
                </i>
                <i className="fas fa-external-link-alt">
                  <a href="/adminicons">fas fa-external-link-alt</a>
                </i>
                <i className="fas fa-fire">
                  <a href="/adminicons">fas fa-fire</a>
                </i>
                <i className="fas fa-highlighter">
                  <a href="/adminicons">fas fa-highlighter</a>
                </i>
                <i className="fas fa-hourglass-half">
                  <a href="/adminicons">fas fa-hourglass-half</a>
                </i>
                <i className="fas fa-toilet-paper">
                  <a href="/adminicons">fas fa-toilet-paper</a>
                </i>
                <i className="fas fa-toilet">
                  <a href="/adminicons">fas fa-toilet</a>
                </i>
                <i className="fas fa-tags">
                  <a href="/adminicons">fas fa-tags</a>
                </i>
                <i className="fas fa-tag">
                  <a href="/adminicons">fas fa-tag</a>
                </i>
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
