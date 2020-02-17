import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components";
import { ArticleBanner } from "../compositions";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types";
import { BoxPanelComposition } from "../custom-compositions/box-panel-composition";

var scroll = Scroll.animateScroll;

class Box extends React.Component {
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
            <BoxPanelComposition text="Box compositions - ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.purple}>
            <BoxPanelComposition text="Box compositions - ePageStyleTemplates.purple" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <BoxPanelComposition text="Box compositions - ePageStyleTemplates.transparent" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.gray}>
            <BoxPanelComposition text="Box compositions - ePageStyleTemplates.gray" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <BoxPanelComposition text="Box compositions - ePageStyleTemplates.green" />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Box;
