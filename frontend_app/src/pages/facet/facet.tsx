import * as React from "react";
import API from "../../application/axios.api";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import FacetSearchList from "../../components/facet-search-list/facet-search-list";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import iFacetState from "./spec/iFacetState";

class Facet extends React.Component<any, iFacetState> {
  constructor(props: any, state: iFacetState) {
    super(props, state);
    this.state = {
      loadingState: false,
      language: "0",
      searchTerm: "",
      loadingUrl: "multipleFieldsFacetedSearch",
      storeContainer: []
    };

    this.languageChange = this.languageChange.bind(this);
    this.searchTermChange = this.searchTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  languageChange(e: any) {
    this.setState({ language: e.target.value });
  }

  searchTermChange(e: any) {
    this.setState({ searchTerm: e.target.value });
  }

  async handleSubmit(e: any) {
    e.preventDefault();

    if (this.state.searchTerm.length > 2 && this.state.searchTerm.length < 32) {
      this.setState({ loadingState: true });

      const data = new FormData();
      data.append("searchTerm", this.state.searchTerm);
      data.append("language", this.state.language);

      await API({
        method: "post",
        url: this.state.loadingUrl,
        data: data,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res => {
        const jsonData = res.data;
        this.setState({ storeContainer: [] });
        this.setState({ storeContainer: jsonData });
        this.setState({ loadingState: false });
      });
    }
  }

  public render() {
    return (
      <>
        <Header />

        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <ArticleBanner
            header="MasterArchive (beta)"
            paragraph="News | Information | Archiv | Suche"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Facet"
            paragraph="Faceted Search - Facettierte Suche"
            pictogram={eSpotlightPictogram.network}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <div className="flex-container">
              <input type="text" onChange={this.searchTermChange} />
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
            {this.state.storeContainer &&
              this.state.storeContainer.length > 0 && (
                <FacetSearchList
                  pageKey="facet"
                  dataContainer={this.state.storeContainer}
                />
              )}

            {!this.state.loadingState &&
              this.state.storeContainer.length > 25 && <ToTopButton />}
            <Spinner loadingState={this.state.loadingState} />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </>
    );
  }
}

export default Facet;
