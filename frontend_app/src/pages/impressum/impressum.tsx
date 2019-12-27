import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import CallToAction from "../../compositions/call-to-action/call-to-action";
import PageHeader from "../../compositions/page-header/page-header";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import Spacer from "../../elements/spacer/spacer";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import eTextStyles from "../../elements/text-elements/spec/eTextStyles";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Impressum extends React.Component {
  public render() {
    return (
      <>
        <Header />

        <ArticleContainer>
          <ArticleBanner
            header="Impressum"
            paragraph="Partnerschaft beginnt mit Kommunikation"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Kommunikation"
            paragraph="Darauf haben wir uns nicht nur im technischen Sinne spezialisiert"
            pictogram={eSpotlightPictogram.connection_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Die Gestaltung und Betreuung der Inhalte erfolgt durch"
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement cssClass={eTextStyles.lead}>
              responsive IT
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              IT & Software Architecture, Engineering & Consulting
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              Kay Stuckenschmidt
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              Gossauerstrasse 17
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              9100 Herisau, Switzerland
            </ParagraphElement>
            <ParagraphElement cssClass={eTextStyles.italic}>
              Handelsregisternummer: CHE-460.558.934
            </ParagraphElement>
            <Spacer />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </>
    );
  }
}

export default Impressum;
