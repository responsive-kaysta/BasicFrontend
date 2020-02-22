import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { EyeCatcher, PageBanner, Spotlight } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ToTopButton } from "../elements/";
import {
  ePageStyleTemplates,
  ePictogram,
  eSpotlightOrientation
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
            <Spotlight
              header="UX – User Experience"
              paragraph="Der Begriff User Experience umschreibt alle Aspekte der Eindrücke
              eines Nutzers bei der Interaktion mit einem Produkt, Dienst, einer
              Umgebung oder Einrichtung."
              pageStyle={ePageStyleTemplates.light}
              orientation={eSpotlightOrientation.left}
              pictogram={ePictogram.ai_1}
            />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <Spotlight
              header="Responsive Design"
              paragraph="Ein Paradigma zur Erstellung von Websites, so dass diese auf
              Eigenschaften des jeweils benutzten Endgeräts reagieren können."
              pageStyle={ePageStyleTemplates.light}
              orientation={eSpotlightOrientation.right}
              pictogram={ePictogram.ai_2}
            />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <Spotlight
              header="React"
              paragraph="React ist eine leistungsstarke
              Open-Source-Cross-Plattform-JavaScript-Bibliothek für die
              Entwicklung von Benutzeroberflächen."
              pageStyle={ePageStyleTemplates.light}
              orientation={eSpotlightOrientation.left}
              pictogram={ePictogram.computer}
            />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <Spotlight
              header="Atomic Design"
              paragraph="Atomic Design ist keine spezielle Darstellungsform – wie Flat
              Design – sondern eine Methode, um Design Systeme zu erstellen."
              pageStyle={ePageStyleTemplates.light}
              orientation={eSpotlightOrientation.right}
              pictogram={ePictogram.blocks}
            />
          </ColorContainer>

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <ul className="features">
              <li>
                <h3>Atome</h3>
                <p>Text-Elemente, Header, Link</p>
              </li>
              <li>
                <h3>Moleküle</h3>
                <p>Links, Buttons</p>
              </li>
              <li>
                <h3>Moleküle</h3>
                <p>Listen, Icons</p>
              </li>
              <li>
                <h3>Organismen</h3>
                <p>Box-Panel</p>
              </li>
              <li>
                <h3>Organismen</h3>
                <p>Features</p>
              </li>
              <li>
                <h3>Organismen</h3>
                <p>Container</p>
              </li>
              <li>
                <h3>Organismen</h3>
                <p>Spotlight</p>
              </li>
              <li>
                <h3>Organismen</h3>
                <p>Tiles</p>
              </li>
              <li>
                <h3>Pages</h3>
                <p>Landing Page</p>
              </li>
              <li>
                <h3>Pages</h3>
                <p>Regular Page</p>
              </li>
            </ul>
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
