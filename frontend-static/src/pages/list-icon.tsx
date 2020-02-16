import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";
import { ListIconComposition } from "../custom-compositions/list-icon-composition";

var scroll = Scroll.animateScroll;

class ListIcon extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }
  public render() {
    return (
      <>
        <Head>
          <title>Lists & Icons - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_MAIN_TOPIC}
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <ListIconComposition text="Lists and Icons -> ePageStyleTemplates.light" />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default ListIcon;
