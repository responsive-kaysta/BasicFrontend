import * as React from "react";
import ArchiveContentList from "../../components/archive-content-list/archive-content-list";
import ArticleContainer from "../../components/article-container/article-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import PageBanner from "../../compositions/page-banner/page-banner";
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

class Home extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />

        <PageBanner
          header="Header"
          paragraph="Paragraph"
          scrollTo="one"
          pageStyle={ePageStyleTemplates.transparent}
        />

        <EyeCatcher
          header="EyeCatcher Header"
          paragraph="EyeCatcher Paragrap"
          pageStyle={ePageStyleTemplates.purple}
        />

        <ArticleContainer pageStyle={ePageStyleTemplates.purple}>
          <ArchiveContentList
            apiController="lastestArchiveContent"
            pageKey="Home"
            pageStyle={ePageStyleTemplates.green}
          />

          <ArticleBanner
            header="ArticleBanner Header"
            paragraph="ArticleBanner Paragraph"
            elementId="one"
            pageStyle={ePageStyleTemplates.purple}
          />

          <Spotlight
            header="Spotlight Header"
            paragraph="Spotlight Paragraph"
            pageStyle={ePageStyleTemplates.green}
            orientation={eSpotlightOrientation.left}
            pictogram={eSpotlightPictogram.ai_4}
          />

          <ToTopButton />
        </ArticleContainer>

        <Spotlight
          header="Spotlight Header"
          paragraph="Spotlight Paragraph"
          pageStyle={ePageStyleTemplates.light}
          orientation={eSpotlightOrientation.right}
          pictogram={eSpotlightPictogram.analysis}
        />
        <Spotlight
          header="Spotlight Header"
          paragraph="Spotlight Paragraph"
          pageStyle={ePageStyleTemplates.light}
          orientation={eSpotlightOrientation.left}
          pictogram={eSpotlightPictogram.hosting}
        />
        <Spotlight
          header="Spotlight Header"
          paragraph="Spotlight Paragraph"
          pageStyle={ePageStyleTemplates.light}
          orientation={eSpotlightOrientation.right}
          pictogram={eSpotlightPictogram.settings_gears}
        />
        <Footer />
      </React.Suspense>
    );
  }
}

export default Home;
