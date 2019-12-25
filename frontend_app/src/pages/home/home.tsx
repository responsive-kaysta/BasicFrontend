import * as React from "react";
import API from "../../application/axios.api";
import ArchiveContentList from "../../components/archive-content-list/archive-content-list";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import iHomeState from "./spec/iHomeState";

class Home extends React.Component<any, iHomeState> {
  constructor(props: any, state: iHomeState) {
    super(props, state);
    this.state = {
      loadingState: false,
      language: "0",
      loadingUrl: "selectViewArchiveContentToListAsync",
      storeContainer: []
    };

    this.languageChange = this.languageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.postMethod();
  }

  languageChange(e: any) {
    this.setState({ language: e.target.value });
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    await this.postMethod();
  }

  async postMethod() {
    this.setState({ loadingState: true });

    const data = new FormData();
    data.append("language", this.state.language);
    data.append("limit", "50");

    await API({
      method: "post",
      url: this.state.loadingUrl,
      data: data,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      const jsonData = res.data;
      this.setState({ storeContainer: jsonData });
      this.setState({ loadingState: false });
    });
  }

  public render() {
    return (
      <>
        <Header />

        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <ArticleBanner
            header="MasterArchive (beta)"
            paragraph="News | Information | Archiv | Suche"
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header flex-container">
              <span className="abstract">Die letzten Neuigkeiten</span>
              <form onSubmit={this.handleSubmit}>
                <select
                  onChange={this.languageChange}
                  defaultValue="0"
                  defaultChecked
                >
                  <option value="0">...</option>
                  <option value="1">Deutsch</option>
                  <option value="2">English</option>
                </select>
                <input type="submit" value="Post" className="small" />
              </form>
            </div>

            <ArchiveContentList
              dataContainer={this.state.storeContainer}
              pageKey="Home"
              pageStyle={ePageStyleTemplates.transparent}
            />
            {!this.state.loadingState && <ToTopButton />}
            <Spinner loadingState={this.state.loadingState} />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </>
    );
  }
}

export default Home;
