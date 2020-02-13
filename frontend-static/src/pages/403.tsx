import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME, PAGE_TOPIC } from "../constants";
import { ArticleContainer, ColorContainer } from "../components/";
import {
  ePageStyleTemplates,
  ePictogram,
  eSpotlightOrientation
} from "../page-types/";
import { ArticleBanner, Spotlight } from "../compositions/";

var scroll = Scroll.animateScroll;

class FourZeroThree extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>403 - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_TOPIC}
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="403 - Access denied!"
            paragraph=""
            pictogram={ePictogram.team}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <div>Access denied!</div>
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}
export default FourZeroThree;
