import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { PageBanner, EyeCatcher } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";
import { ToTopButton, RegularLinkElement } from "../elements/";

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
        <PageBanner
          header={PAGE_NAME}
          paragraph={PAGE_MAIN_TOPIC}
          pageStyle={ePageStyleTemplates.transparent}
          scrollTo="one"
        />
        <ArticleContainer>
          <EyeCatcher
            header="Design-System"
            paragraph="Design-System nach Atomic Design Pattern aufgebaut"
            pageStyle={ePageStyleTemplates.green}
            elementId="one"
          />
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header">
              <h2>Atoms</h2>
            </div>
            <div>
              <RegularLinkElement text="Texts & Headings" link="text-heading" />
            </div>
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header">
              <h2>Molecules</h2>
            </div>
            <div>
              <RegularLinkElement text="Links & Buttons" link="link-button" />
            </div>
            <div>
              <RegularLinkElement text="Lists & Icons" link="list-icon" />
            </div>
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header">
              <h2>Organisms</h2>
            </div>
            <div>
              <RegularLinkElement text="Container" link="container" />
            </div>
            <div>
              <RegularLinkElement text="Box Panel" link="box-panel" />
            </div>
            <div>
              <RegularLinkElement text="Features" link="features" />
            </div>
            <div>
              <RegularLinkElement text="Tiles Section" link="tiles-section" />
            </div>
            <div>
              <RegularLinkElement text="Spotlights" link="spotlight" />
            </div>
            <div>
              <RegularLinkElement text="Eye Catcher" link="eye-catcher" />
            </div>
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <div className="page-header">
              <h2>Pages & Templates</h2>
            </div>
            <div>
              <RegularLinkElement
                text="Gray Page Style"
                link="/gray-page-style"
              />
            </div>
            <div>Green</div>
            <div>Light</div>
            <div>Purple</div>
            <div>Transparent</div>
          </ColorContainer>
          <ToTopButton />
        </ArticleContainer>
      </>
    );
  }
}

export default Index;
