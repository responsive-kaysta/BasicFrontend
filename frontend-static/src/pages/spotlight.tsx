import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { SpotlightComposition } from "../custom-compositions/spotlight-composition";
import { ToTopButton } from "../elements/";
import { ePageStyleTemplates } from "../page-types/";

var scroll = Scroll.animateScroll;

class Spotlight extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }
  public render() {
    return (
      <>
        <Head>
          <title>Startseite - {PAGE_NAME}</title>
        </Head>

        <ArticleContainer>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_MAIN_TOPIC}
            pageStyle={ePageStyleTemplates.transparent}
          />
          <ColorContainer padded pageStyle={ePageStyleTemplates.purple}>
            <div className="page-header">
              <h2>Spotlight -> ePageStyleTemplates.purple</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.purple}>
            <SpotlightComposition pageStyle={ePageStyleTemplates.purple} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <div className="page-header">
              <h2>Spotlight -> ePageStyleTemplates.green</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.green}>
            <SpotlightComposition pageStyle={ePageStyleTemplates.green} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header">
              <h2>Spotlight -> ePageStyleTemplates.transparent</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.transparent}>
            <SpotlightComposition pageStyle={ePageStyleTemplates.transparent} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.gray}>
            <div className="page-header">
              <h2>Spotlight -> ePageStyleTemplates.gray</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.gray}>
            <SpotlightComposition pageStyle={ePageStyleTemplates.gray} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <div className="page-header">
              <h2>Spotlight -> ePageStyleTemplates.light</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.light}>
            <SpotlightComposition pageStyle={ePageStyleTemplates.light} />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Spotlight;
