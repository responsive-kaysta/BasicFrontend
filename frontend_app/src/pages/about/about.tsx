import * as React from "react";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import ArticleContainer from "../../components/article-container/article-container";
import CallToAction from "../../compositions/call-to-action/call-to-action";
import PageHeader from "../../compositions/page-header/page-header";
import ColorContainer from "../../components/color-container/color-container";
import Spotlight from "../../compositions/spotlight/spotlight";
import {
  eSpotlightOrientation,
  eSpotlightPictogram
} from "../../compositions/spotlight/spec";

class About extends React.Component {
  public render() {
    return (
      <>
        <React.Suspense fallback={<Spinner />}>
          <Header />

          <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
            <ArticleBanner
              header="ArticleBanner Header"
              paragraph="ArticleBanner Paragraph"
              elementId="one"
              pageStyle={ePageStyleTemplates.transparent}
            />

            <EyeCatcher
              header="EyeCatcher Header"
              paragraph="EyeCatcher Paragrap"
              pageStyle={ePageStyleTemplates.purple}
            />
            <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
              <CallToAction
                header="CallToAction Header"
                paragraph="CallToAction Paragraph"
                linkText="CallToAction Link-Text"
                linkUrl="#"
                specialText="CallToAction Special-Text"
                specialUrl="#"
              />

              <PageHeader
                header="PageHeader Header"
                paragraph="PageHeader Paragraph"
                pageStyle={ePageStyleTemplates.light}
              />

              <Spotlight
                header="Spotlight Header"
                paragraph="Spotlight Paragraph"
                orientation={eSpotlightOrientation.right}
                pictogram={eSpotlightPictogram.analysis}
              />

              <Spotlight
                header="Spotlight Header"
                paragraph="Spotlight Paragraph"
                orientation={eSpotlightOrientation.left}
                pictogram={eSpotlightPictogram.upload}
              />

              <ToTopButton />
            </ColorContainer>
          </ArticleContainer>

          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default About;
