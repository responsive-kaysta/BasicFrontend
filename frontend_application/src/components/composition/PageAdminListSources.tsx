import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import ArticleBanner from "../organism/ArticleBanner";
import Footer from "../page/Footer";
import Header from "../page/Header";

class PageAdminListSources extends React.Component<IViewState, IStoreState> {
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
              header="Admin List Sources"
              paragraph="Example how to style a list Sources Page"
              cssStyle="transparent"
            />

            <section id="container" className="container light">
              <div className="page-header">
                <h2>Alle erfassten Archive-Quellen</h2>
              </div>

              <div className="flex-column-wraper row">
                <a href="/adminoverviewboxes" className="link-h-padding">
                  <i className="fas fa-arrow-circle-left" />
                  &nbsp; Back
                </a>
              </div>

              <div>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>Source Id</td>
                        <td>Source Name</td>
                        <td>Source IsOnline</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>75</td>
                        <td>Tages-Anzeiger Börse</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/admineditsource">
                            <i className="far fa-check-circle"></i>
                          </a>
                        </td>
                        <td>
                          <a href="/adminchecksource">
                            <i className="fas fa-check-circle"></i>
                          </a>
                        </td>
                        <td>74</td>
                        <td>Tagesanzeiger - Front</td>
                        <td>true</td>
                      </tr>
                    </tbody>
                  </table>
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

export default PageAdminListSources;
