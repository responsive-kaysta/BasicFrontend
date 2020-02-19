import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";
import { ContainerComposition } from "../custom-compositions/container-composition";
import { ToTopButton } from "../elements/";

var scroll = Scroll.animateScroll;

class Container extends React.Component {
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
            <ContainerComposition text="Container - padded, ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.transparent}>
            <ContainerComposition text="Container - ePageStyleTemplates.transparent" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.purple}>
            <ContainerComposition text="Container - padded, ePageStyleTemplates.purple" />
          </ColorContainer>
          <ColorContainer pageStyle={ePageStyleTemplates.gray}>
            <ContainerComposition text="Container - ePageStyleTemplates.gray" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <ContainerComposition text="Container - padded, ePageStyleTemplates.green" />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Container;
