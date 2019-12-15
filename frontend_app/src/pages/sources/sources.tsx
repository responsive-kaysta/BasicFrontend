import * as React from "react";
import ArchiveSourceList from "../../components/archive-source-list/archive-source-list";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import {
  eSpotlightOrientation,
  eSpotlightPictogram
} from "../../compositions/spotlight/spec";
import Spotlight from "../../compositions/spotlight/spotlight";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Sources extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />

        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <ArticleBanner
            header="MasterArchive (beta)"
            paragraph="News | Information | Archiv | Suche"
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Erfasste (online) News-Quellen"
            paragraph="Information | Recherche | Archiv"
            pictogram={eSpotlightPictogram.website}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <ArchiveSourceList
              apiController="selectOnlineArchiveSources"
              pageKey="Home"
              pageStyle={ePageStyleTemplates.light}
            />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </React.Suspense>
    );
  }
}

export default Sources;
