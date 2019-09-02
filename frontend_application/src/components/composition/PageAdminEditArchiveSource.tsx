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

<section id="container" className="container light">
            <div className="page-header">
              <h2>Edit Archive-Source: 125</h2>
            </div>

            <div className="flex-column-wraper row">
              <a href="/adminoverviewboxes" className="link-h-padding">
                <i className="fas fa-arrow-circle-left" />
                &nbsp; Back
              </a>
              <a href="/adminoverviewboxes" className="link-h-padding">
                <i className="fas fa-check-circle" />
                &nbsp; Ckeck Sources
              </a>
            </div>

            <div id="react_0HLPDV03N7M10">
              <form>
                <input
                  id="sourceId"
                  name="sourceId"
                  value="75"
                  type="hidden"
                  readOnly
                />
                <input
                  id="sourceVersion"
                  name="sourceVersion"
                  value="3"
                  type="hidden"
                  readOnly
                />

                <div className="flex-row-wrapper row">
                  <label>Source Name</label>
                  <input
                    id="sourceName"
                    name="sourceName"
                    placeholder="Source Name"
                    value="Tages-Anzeiger Börse"
                    type="text"
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>Source Description Text</label>
                  <input
                    id="sourceDescription"
                    name="sourceDescription"
                    placeholder="Source Description"
                    value="Tages-Anzeiger Börse"
                    type="text"
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>Source Encoding</label>
                  <input
                    id="sourceEncoding"
                    name="sourceEncoding"
                    placeholder="Source Encoding"
                    value="UTF-8"
                    type="text"
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>
                    <a
                      href="https://www.tagesanzeiger.ch/stock_market/uebersicht/rss.html"
                      target="_blank"
                    >
                      <i className="fas fa-link" />
                      &nbsp;Source Link
                    </a>
                  </label>
                  <input
                    id="sourceLink"
                    name="sourceLink"
                    placeholder="Source Link"
                    value="https://www.tagesanzeiger.ch/stock_market/uebersicht/rss.html"
                    type="text"
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>Source Type</label>
                  <select>
                    <option value="1">
                      Realy Simple Syndication - Sehr Einfache Syndication
                    </option>
                    <option value="2">Web Link</option>
                    <option value="3">Atom XML</option>
                  </select>
                </div>

                <div className="flex-row-wrapper row">
                  <label>Source Language</label>
                  <select>
                    <option value="1">Deutsch</option>
                    <option value="2">English</option>
                  </select>
                </div>

                <div className="flex-container row">
                  <div className="flex-row-wrapper">
                    <label>Source is online</label>
                    <select>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  </div>

                  <div className="flex-row-wrapper">
                    <label>Source is archived</label>
                    <select>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  </div>

                  <div className="flex-row-wrapper">
                    <label>Source is deleted</label>
                    <select>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  </div>
                </div>

                <div>
                  <input value="Post" type="submit" />
                </div>
              </form>
            </div>
          </section>
          </article>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminEditArchiveSource;
