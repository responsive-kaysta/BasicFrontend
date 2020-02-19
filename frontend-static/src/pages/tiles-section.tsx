import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";
import { TilesComposition } from "../custom-compositions/tiles-composition";

var scroll = Scroll.animateScroll;

class TilesSection extends React.Component {
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
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <div className="page-header">
              <h2>Tiles -> ePageStyleTemplates.light</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.light}>
            <TilesComposition pageStyle={ePageStyleTemplates.light} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <div className="page-header">
              <h2>Tiles -> ePageStyleTemplates.green</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.green}>
            <TilesComposition pageStyle={ePageStyleTemplates.green} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header">
              <h2>Tiles -> ePageStyleTemplates.transparent</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.transparent}>
            <TilesComposition pageStyle={ePageStyleTemplates.transparent} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.purple}>
            <div className="page-header">
              <h2>Tiles -> ePageStyleTemplates.purple</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.purple}>
            <TilesComposition pageStyle={ePageStyleTemplates.purple} />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.gray}>
            <div className="page-header">
              <h2>Tiles -> ePageStyleTemplates.gray</h2>
            </div>
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.gray}>
            <TilesComposition pageStyle={ePageStyleTemplates.gray} />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default TilesSection;
