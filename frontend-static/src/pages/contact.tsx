import * as React from "react";
import Iframe from "react-iframe";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME } from "../constants";
import { ArticleContainer } from "../components/article-container/article-container";
import { ArticleBanner } from "../compositions/article-banner/article-banner";
import { ePageStyleTemplates } from "../less";
import { Spotlight } from "../compositions/spotlight/spotlight";
import { ePictogram, eSpotlightOrientation, eTextStyles } from "../page-types/";
import { ColorContainer } from "../components/color-container/color-container";
import { DivElement } from "../elements/text-elements/div-element";
import { ParagraphElement } from "../elements/text-elements/paragraph-element";
import { Spacer } from "../elements/spacer/spacer";
import { ToTopButton } from "../elements/to-top-button/to-top-button";

var scroll = Scroll.animateScroll;

class Contact extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>Kontakt - {PAGE_NAME}</title>
        </Head>

        <ArticleContainer>
          <ArticleBanner
            header="Kontakt"
            paragraph="Kommunikation und Kreativität - ein wunderbare Zusammenspiel"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Kommunikation"
            paragraph="Das wichtigste bei Kommunikation ist 'Zuhören'"
            pictogram={ePictogram.connection_2}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <DivElement textStyles={eTextStyles.align_center} elementId="one">
              <ParagraphElement textStyles={eTextStyles.lead}>
                responsive IT
              </ParagraphElement>
            </DivElement>

            <DivElement textStyles={eTextStyles.align_center}>
              Kay Stuckenschmidt
            </DivElement>

            <DivElement textStyles={eTextStyles.align_center}>
              IT & Software Architecture, Engineering & Consulting
            </DivElement>

            <DivElement textStyles={eTextStyles.align_center}>
              Gossauerstrasse 17
            </DivElement>

            <DivElement textStyles={eTextStyles.align_center}>
              9100 Herisau
            </DivElement>

            <DivElement textStyles={eTextStyles.align_center}>
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
