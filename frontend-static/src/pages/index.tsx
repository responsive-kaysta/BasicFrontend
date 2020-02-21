import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { EyeCatcher, PageBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { HeaderElements, ParagraphElement, ToTopButton } from "../elements/";
import {
  eHeaderElementTypes,
  ePageStyleTemplates,
  eTextStyles
} from "../page-types/";

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
            paragraph="UX | Responsive | React | Atomic"
            pageStyle={ePageStyleTemplates.green}
            elementId="one"
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <HeaderElements headerElementType={eHeaderElementTypes.headLine}>
              UX – User Experience
            </HeaderElements>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Der Begriff User Experience umschreibt alle Aspekte der Eindrücke
              eines Nutzers bei der Interaktion mit einem Produkt, Dienst, einer
              Umgebung oder Einrichtung.
            </ParagraphElement>
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <HeaderElements headerElementType={eHeaderElementTypes.headLine}>
              Responsive Design
            </HeaderElements>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Paradigma zur Erstellung von Websites, so dass diese auf
              Eigenschaften des jeweils benutzten Endgeräts reagieren können.
            </ParagraphElement>
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <HeaderElements headerElementType={eHeaderElementTypes.headLine}>
              React
            </HeaderElements>
            <ParagraphElement textStyles={eTextStyles.lead}>
              React ist eine leistungsstarke
              Open-Source-Cross-Plattform-JavaScript-Bibliothek für die
              Entwicklung von Benutzeroberflächen.
            </ParagraphElement>
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <HeaderElements headerElementType={eHeaderElementTypes.headLine}>
              Atomic Design
            </HeaderElements>
            <ParagraphElement textStyles={eTextStyles.lead}>
              Atomic Design ist keine spezielle Darstellungsform – wie Flat
              Design – sondern eine Methode, um Design Systeme zu erstellen.
            </ParagraphElement>
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Index;
