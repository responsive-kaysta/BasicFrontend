import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  ArticleContainer,
  ColorContainer,
  EyeCatcher,
  PageBanner,
  PageStyleTemplates,
  Pictograms,
  Spotlight,
  SpotlightOrientation,
  PageHeader,
  Link,
  ToTopButton,
} from "responsive-it-common";
import "../../../../public/less/custom.css";
import "../../../../public/less/fontawesome-all.css";
import "../../../../public/less/styles.css";

storiesOf("01: Layouts / 01: Landing Page", module).add(
  "with PageBanner",
  () => (
    <>
      <PageBanner
        paragraph="paragraph"
        header="header"
        scrollTo="one"
        pageStyle={PageStyleTemplates.transparent}
      />
      <ArticleContainer>
        <EyeCatcher
          header="Design-System"
          paragraph="UX | Responsive | React | Atomic"
          pageStyle={PageStyleTemplates.green}
          elementId="one"
        />

        <ColorContainer padded style={PageStyleTemplates.light}>
          <Spotlight
            header="UX – User Experience"
            paragraph="Der Begriff User Experience umschreibt alle Aspekte der Eindrücke
              eines Nutzers bei der Interaktion mit einem Produkt, Dienst, einer
              Umgebung oder Einrichtung."
            pageStyle={PageStyleTemplates.light}
            orientation={SpotlightOrientation.left}
            pictogram={Pictograms.ai_1}
          />
        </ColorContainer>

        <ColorContainer padded style={PageStyleTemplates.light}>
          <Spotlight
            header="Responsive Design"
            paragraph="Ein Paradigma zur Erstellung von Websites, so dass diese auf
              Eigenschaften des jeweils benutzten Endgeräts reagieren können."
            pageStyle={PageStyleTemplates.light}
            orientation={SpotlightOrientation.right}
            pictogram={Pictograms.ai_2}
          />
        </ColorContainer>

        <ColorContainer padded style={PageStyleTemplates.light}>
          <Spotlight
            header="React"
            paragraph="React ist eine leistungsstarke
              Open-Source-Cross-Plattform-JavaScript-Bibliothek für die
              Entwicklung von Benutzeroberflächen."
            pageStyle={PageStyleTemplates.light}
            orientation={SpotlightOrientation.left}
            pictogram={Pictograms.computer}
          />
        </ColorContainer>

        <ColorContainer padded style={PageStyleTemplates.light}>
          <Spotlight
            header="Atomic Design"
            paragraph="Atomic Design ist keine spezielle Darstellungsform – wie Flat
              Design – sondern eine Methode, um Design Systeme zu erstellen."
            pageStyle={PageStyleTemplates.light}
            orientation={SpotlightOrientation.right}
            pictogram={Pictograms.blocks}
          />
        </ColorContainer>

        <ColorContainer padded style={PageStyleTemplates.light}>
          <PageHeader header="Atomes & Molecules" />
          <ul className="features">
            <li>
              <h3>Text-Elemente, Header, Link</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
            <li>
              <h3>Links, Buttons</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
            <li>
              <h3>Listen, Icons</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
          </ul>
        </ColorContainer>
        <ColorContainer padded style={PageStyleTemplates.light}>
          <PageHeader header="Organisms" />
          <ul className="features">
            <li>
              <h3>Box</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
            <li>
              <h3>Feature</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
            <li>
              <h3>Container</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
            <li>
              <h3>Tiles</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
            <li>
              <h3>Spotlight</h3>
              <div>
                <Link text="klick mich ..." link="#" />
              </div>
            </li>
          </ul>
        </ColorContainer>
        <ColorContainer padded style={PageStyleTemplates.light}>
          <ToTopButton />
        </ColorContainer>
      </ArticleContainer>
    </>
  )
);
