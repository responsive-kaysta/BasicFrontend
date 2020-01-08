import ArchiveSourceList from "components/archive-source-list/archive-source-list";
import * as React from "react";
import * as Scroll from "react-scroll";
import ArticleContainer from "../components/article-container/article-container";
import ColorContainer from "../components/color-container/color-container";
import ArticleBanner from "../compositions/article-banner/article-banner";
import PageHeader from "../compositions/page-header/page-header";
import { eSpotlightOrientation } from "../compositions/spotlight/spec";
import Spotlight from "../compositions/spotlight/spotlight";
import ToTopButton from "../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../less";
import { ePictogram, iSourcesState } from "../page-types";
import API from "../utils/axios.api";

var scroll = Scroll.animateScroll;

class Sources extends React.Component<any, iSourcesState> {
  constructor(props: any, state: iSourcesState) {
    super(props, state);
    this.state = {
      loadingState: false,
      loadingUrl: "api/selectViewArchiveSources",
      storeContainer: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    await this.getSources();
  }

  async getSources() {
    this.setState({ loadingState: true });

    await API({
      method: "post",
      url: this.state.loadingUrl,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      const jsonData = res.data;
      this.setState({ storeContainer: jsonData });
      this.setState({ loadingState: false });
    });
  }

  componentDidMount() {
    this.getSources();
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
            pictogram={ePictogram.ai_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Erfasste News-Quellen"
              paragraph="Information | Recherche | Archiv"
              pageStyle={ePageStyleTemplates.light}
            />
            <ArchiveSourceList
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

export default Sources;
