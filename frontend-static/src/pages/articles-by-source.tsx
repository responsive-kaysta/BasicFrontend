import ArchiveContentList from "components/archive-content-list/archive-content-list";
import * as React from "react";
import * as Scroll from "react-scroll";
import ArticleContainer from "../components/article-container/article-container";
import ColorContainer from "../components/color-container/color-container";
import ArticleBanner from "../compositions/article-banner/article-banner";
import PageHeader from "../compositions/page-header/page-header";
import {
  eSpotlightOrientation,
  eSpotlightPictogram
} from "../compositions/spotlight/spec";
import Spotlight from "../compositions/spotlight/spotlight";
import ToTopButton from "../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../less";
import { iArticlesBySourceState } from "../page-types/iArticlesBySourceState";
import API from "../utils/axios.api";
import { getUrlParameter } from "../utils/url.helper";

var scroll = Scroll.animateScroll;

class ArticlesBySource extends React.Component<any, iArticlesBySourceState> {
  constructor(props: any, state: iArticlesBySourceState) {
    super(props, state);
    this.state = {
      loadingState: false,
      limit: 100,
      sourceId: 0,
      loadingUrl: "api/selectViewArchiveContentBySourceToList",
      storeContainer: []
    };
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    await this.getArticles();
  }

  async getArticles() {
    this.setState({ loadingState: true });

    const data = new FormData();
    data.append("sourceId", getUrlParameter("sourceId"));
    data.append("limit", this.state.limit.toString());
    console.log(getUrlParameter("sourceId"));
    await API({
      method: "post",
      url: `${this.state.loadingUrl}`,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      const jsonData = res.data;
      this.setState({ storeContainer: jsonData });
      this.setState({ loadingState: false });
    });
  }

  componentDidMount() {
    this.getArticles();
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <ArticleContainer>
          <ArticleBanner
            header="Über responsive IT"
            paragraph="Für uns ist die Kreativität des Ungeplanten von zentraler Bedeutung"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Gestern, Heute, Morgen"
            paragraph="Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an"
            pictogram={eSpotlightPictogram.ai_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="News nach Quelle"
              paragraph="Information | Recherche | Archiv"
              pageStyle={ePageStyleTemplates.light}
            />
            <ArchiveContentList
              dataContainer={this.state.storeContainer}
              pageKey="Home"
              pageStyle={ePageStyleTemplates.transparent}
            />
            {!this.state.loadingState && <ToTopButton />}
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default ArticlesBySource;
