import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components";
import {
  ArticleBanner,
  CallToAction,
  ListContainer,
  Spotlight
} from "../compositions";
import { PAGE_NAME } from "../constants";
import {
  HeaderElements,
  ListElement,
  ParagraphElement,
  Spacer,
  ToTopButton
} from "../elements";
import {
  eHeaderElementTypes,
  ePageStyleTemplates,
  ePictogram,
  eSpotlightOrientation,
  eTextStyles
} from "../page-types";

var scroll = Scroll.animateScroll;

class RegularLightPageStyle extends React.Component {
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
            header="Light Style"
            paragraph="Regular-Page, light styled Content"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <HeaderElements headerElementType={eHeaderElementTypes.headLine}>
              Headline
            </HeaderElements>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </ParagraphElement>
            <ParagraphElement>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </ParagraphElement>
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <Spotlight
              header="Spotlight Element"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
              pageStyle={ePageStyleTemplates.light}
              pictogram={ePictogram.analysis}
              orientation={eSpotlightOrientation.left}
            />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <HeaderElements headerElementType={eHeaderElementTypes.headLine}>
              Headline
            </HeaderElements>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </ParagraphElement>
            <ListContainer>
              <ListElement>Lorem ipsum dolor sit amet</ListElement>
              <ListElement>sed diam nonumy eirmod tempor</ListElement>
              <ListElement>
                invidunt ut labore et dolore magna aliquyam
              </ListElement>
              <ListElement>erat, sed diam voluptua</ListElement>
            </ListContainer>
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <CallToAction
              header="Call to Action"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ..."
              linkText="Text"
              linkUrl="#"
              specialText="Special"
              specialUrl="#"
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <Spacer />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default RegularLightPageStyle;
