import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import ArticleBanner from "../organism/ArticleBanner";
import Footer from "../page/Footer";
import Header from "../page/Header";

class PageAdminEditArchiveArticle extends React.Component<
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
              header="Edit Archive-Article: 125"
              paragraph="Example how to style the Edit Article Page"
              cssStyle="transparent"
            />
          </article>
          <section id="container" className="container light">
            <div className="page-header">
              <h2>Edit Archive-Article: 125</h2>
            </div>

            <div className="flex-column-wraper row">
              <a href="/adminoverviewboxes" className="link-h-padding">
                <i className="fas fa-arrow-circle-left" />
                &nbsp; Back
              </a>
              <a href="/adminoverviewboxes" className="link-h-padding">
                <i className="fas fa-check-circle" />
                &nbsp; Ckeck Articles
              </a>
            </div>

            <div id="react_0HLPDV03N7M10">
              <form>
                <input
                  id="articleId"
                  name="articleId"
                  value="75"
                  type="hidden"
                  readOnly
                />
                <input
                  id="articleVersion"
                  name="articleVersion"
                  value="3"
                  type="hidden"
                  readOnly
                />

                <div className="flex-row-wrapper row">
                  <label>Article Title</label>
                  <input
                    id="articleTitle"
                    name="articleTitle"
                    placeholder="Article Title"
                    value="Der Ständerat berät sich über die Abschaffung der Heiratsstrafe"
                    type="text"
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>Article Text</label>
                  <textarea
                    id="articleText"
                    name="articleText"
                    placeholder="Article Text"
                    value="Um ein Haar wäre die Abschaffung der Heiratsstrafe schon vor der Parlamentsberatung gescheitert. Nun wird im Ständerat um die Details gefeilscht."
                    cols={36}
                    rows={5}
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>
                    <a href="https://www.nzz.ch/schweiz/heiratsstrafe-bleibt-heiss-umstritten-ld.1505419">
                      <i className="fas fa-link" />
                      &nbsp;NZZ News Schweiz
                    </a>
                  </label>
                  <input
                    id="articleLink"
                    name="articleLink"
                    placeholder="Article Link"
                    value="https://www.nzz.ch/schweiz/heiratsstrafe-bleibt-heiss-umstritten-ld.1505419"
                    type="text"
                    readOnly
                  />
                </div>

                <div className="flex-row-wrapper row">
                  <label>Article Type</label>
                  <select>
                    <option value="1">
                      Realy Simple Syndication - Sehr Einfache Syndication
                    </option>
                    <option value="2">Web Link</option>
                    <option value="3">Atom XML</option>
                  </select>
                </div>

                <div className="flex-row-wrapper row">
                  <label>Article Language</label>
                  <select>
                    <option value="1">Deutsch</option>
                    <option value="2">English</option>
                  </select>
                </div>

                <div className="flex-container row">
                  <div className="flex-row-wrapper row">
                    <label className="italic">Origin Date and Time</label>
                    <p>30/08/2019 15:23:56</p>
                  </div>

                  <div className="flex-row-wrapper">
                    <label className="italic">Created Date and Time</label>
                    <p>30/08/2019 15:23:56</p>
                  </div>

                  <div className="flex-row-wrapper">
                    <label className="italic">Modified Date and Time</label>
                    <p>30/08/2019 15:23:56</p>
                  </div>
                </div>

                <div className="flex-container row">
                  <div className="flex-row-wrapper">
                    <label>Article is archived</label>
                    <select>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  </div>

                  <div className="flex-row-wrapper">
                    <label>Article is deleted</label>
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

          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageAdminEditArchiveArticle;
