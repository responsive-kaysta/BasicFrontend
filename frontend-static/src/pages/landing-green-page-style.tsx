import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components";
import {
  EyeCatcher,
  ListContainer,
  PageBanner,
  Spotlight,
  CallToAction
} from "../compositions";
import { PAGE_NAME } from "../constants";
import {
  HeaderElements,
  ListElement,
  ParagraphElement,
  ToTopButton,
  Spacer
} from "../elements";
import {
  eHeaderElementTypes,
  ePageStyleTemplates,
  ePictogram,
  eSpotlightOrientation,
  eTextStyles
} from "../page-types";

var scroll = Scroll.animateScroll;

class GreenPageStyle extends React.Component {
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
          header="Green Style"
          paragraph="Landing-Page with a Banner and green styled Content"
          pageStyle={ePageStyleTemplates.transparent}
          scrollTo="one"
        />
        <ArticleContainer>
          <EyeCatcher
            header="Eye Catcher"
            paragraph="To loosen up the structure and tell something"
            pageStyle={ePageStyleTemplates.purple}
            elementId="one"
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
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

          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <Spotlight
              header="Spotlight Element"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
              pageStyle={ePageStyleTemplates.green}
              pictogram={ePictogram.analysis}
              orientation={eSpotlightOrientation.left}
            />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
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

          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <CallToAction
              header="Call to Action"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ..."
              linkText="Green"
              linkUrl="/landing-green-page-style"
              specialText="Transparent"
              specialUrl="/landing-transparent-page-style"
              pageStyle={ePageStyleTemplates.green}
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

export default GreenPageStyle;
