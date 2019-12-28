import * as React from "react";
import Iframe from "react-iframe";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import Spacer from "../../elements/spacer/spacer";
import DivElement from "../../elements/text-elements/div-element";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import eTextStyles from "../../elements/text-elements/spec/eTextStyles";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Contact extends React.Component {
  public render() {
    return (
      <>
        <ArticleContainer>
          <ArticleBanner
            header="Kontakt"
            paragraph="Kommunikation und Kreativität - ein wunderbare Zusammenspiel"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Kommunikation"
            paragraph="Das wichtigste bei Kommunikation ist 'Zuhören'"
            pictogram={eSpotlightPictogram.connection_2}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <DivElement cssClass={eTextStyles.align_center} elementId="one">
              <ParagraphElement cssClass={eTextStyles.lead}>
                responsive IT
              </ParagraphElement>
            </DivElement>

            <DivElement cssClass={eTextStyles.align_center}>
              Kay Stuckenschmidt
            </DivElement>

            <DivElement cssClass={eTextStyles.align_center}>
              IT & Software Architecture, Engineering & Consulting
            </DivElement>

            <DivElement cssClass={eTextStyles.align_center}>
              Gossauerstrasse 17
            </DivElement>

            <DivElement cssClass={eTextStyles.align_center}>
              9100 Herisau
            </DivElement>

            <DivElement cssClass={eTextStyles.align_center}>
              Handelsregisternummer: CHE-460.558.934
            </DivElement>

            <Spacer />

            <div className="emailform">
              <Iframe
                url="https://www.emailmeform.com/builder/form/Z9WCJqEPuf51bUzT"
                width="640px"
                height="767px"
                id="emailmeform"
              />
            </div>

            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Contact;
