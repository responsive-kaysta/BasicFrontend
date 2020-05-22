import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME, PAGE_TOPIC } from "../constants";
import {
  ArticleContainer,
  PageStyleTemplates,
  ArticleBanner,
  Spotlight,
  Pictograms,
  SpotlightOrientation,
  ColorContainer,
} from "responsive-it-common";

var scroll = Scroll.animateScroll;

class FourZeroFour extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>404 - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer pageStyle={PageStyleTemplates.transparent}>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_TOPIC}
            pageStyle={PageStyleTemplates.transparent}
          />

          <Spotlight
            header="404 - Not found!"
            paragraph=""
            pictogram={Pictograms.team}
            pageStyle={PageStyleTemplates.light}
            orientation={SpotlightOrientation.left}
          />

          <ColorContainer style={PageStyleTemplates.light} padded>
            <div>Not found!</div>
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}
export default FourZeroFour;
