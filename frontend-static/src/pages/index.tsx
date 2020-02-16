import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";

var scroll = Scroll.animateScroll;

class Index extends React.Component {
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

          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div>Text, Heading</div>
            <div>Link, Button</div>
            <div>List, Icon</div>
            {/* */}
            <div>Container</div>
            <div>Page Header</div>
            <div>Box</div>
            <div>Panel</div>
            <div>Feature</div>
            <div>Article</div>
            <div>Tiles</div>
            {/* */}
            <div>Banner</div>
            <div>Jumbotron</div>
            <div>Spotlight</div>
            <div>Eye Catcher</div>
            <div>Table</div>
            <div>Call to Action</div>
            {/* */}
            <div>Gray</div>
            <div>Green</div>
            <div>Light</div>
            <div>Purple</div>
            <div>Transparent</div>
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Index;
