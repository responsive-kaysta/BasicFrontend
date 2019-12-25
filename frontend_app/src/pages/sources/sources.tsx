import * as React from "react";
import API from "../../application/axios.api";
import ArchiveSourceList from "../../components/archive-source-list/archive-source-list";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import iSourcesState from "./spec/iSourcesState";

class Sources extends React.Component<any, iSourcesState> {
  constructor(props: any, state: iSourcesState) {
    super(props, state);
    this.state = {
      loadingState: false,
      language: "0",
      loadingUrl: "selectArchiveSourceCountArticles",
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

          <Spotlight
            header="Erfasste News-Quellen"
            paragraph="Information | Recherche | Archiv"
            pictogram={eSpotlightPictogram.develop}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <ArchiveSourceList
              dataContainer={this.state.storeContainer}
              pageKey="Home"
              pageStyle={ePageStyleTemplates.light}
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

export default Sources;
