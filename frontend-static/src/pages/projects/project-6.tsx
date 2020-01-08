import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import CallToAction from "../../compositions/call-to-action/call-to-action";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import ListContainer from "../../compositions/list-container/list-container";
import PageHeader from "../../compositions/page-header/page-header";
import { eSpotlightOrientation } from "../../compositions/spotlight/spec";
import Spotlight from "../../compositions/spotlight/spotlight";
import { PAGE_NAME } from "../../constants";
import ImageElement from "../../elements/image-element/image-element";
import ListElement from "../../elements/list-elements/list-elements";
import Spacer from "../../elements/spacer/spacer";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import { ePictogram } from "../../page-types";

var scroll = Scroll.animateScroll;

class ProjectSix extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>DGL | 4com | Novomind - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="DGL | 4com | Novomind"
            paragraph="Digital Layer | Telefonie | Vorgangsverwaltung"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Innovation in der Konzernkommunikation"
            paragraph="Kundenkommunikation durch Innovation und Technik vereinfachen, verbessern, verwalten"
            pictogram={ePictogram.ai_2}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Konzernkommunikation im Griff"
              paragraph="Im Auftrag Q-PERIOR durften wir der EnBW in Karlsruhe bei der Umsetzung eines Prototypen behilflich sein der die Kommunikation nicht nur modernisiert."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement>
              Als «Arbeitsplatz der Zukunft» wurden Möglichkeiten erarbeitet,
              wie Fax-, Email-, Brief- und Telefon-Kommunikation vereinfacht und
              vereinheitlicht werden kann.
            </ParagraphElement>

            <ParagraphElement>
              Die Lösung: durch den Aufbau einer responsiven
              Web-Service-Architektur konnten die sogenannten Vorgänge in
              unterschiedlichen Systemen verwaltet und zugeteilt werden.
            </ParagraphElement>

            <ListContainer header="Unterschiedliche Systeme kommen dabei zum Einsatz">
              <ListElement>
                4com -> Telefon-Anlage und Multichannel-Marketing
              </ListElement>
              <ListElement>
                Novomind -> Schriftliche Vorgänge bearbeiten
              </ListElement>
              <ListElement>SAP CRM -> Kundenverwaltung</ListElement>
              <ListElement>
                Web-Services um die Informationen den Systemen zur Verfügung zu
                stellen
              </ListElement>
            </ListContainer>
          </ColorContainer>

          <EyeCatcher
            header="Empfangen | Verteilen | Bearbeiten"
            paragraph="Kommunikation über eine Anwendung verwalten und zuteilen"
            pageStyle={ePageStyleTemplates.green}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <CallToAction
              header="Sicherheitsgründe"
              paragraph="Aus Sicherheitsgründen können wir hier nicht alle Details publizieren, wir zeigen Ihnen den vollen Projektumfang aber gerne bei einem persönlichen Gespräch."
              linkText="Technik"
              linkUrl="/technic"
              specialText="Kontakt"
              specialUrl="/contact"
            />

            <Spacer />

            <PageHeader
              header="Damit Sie sich ein Bild machen können, anbei die Systemlandschaft in einer high-level Ansicht"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-6-enbw_systemlandschaft.png"
              imageAltText="Systemlandschaft"
              imageWrapper
              imagePadding
            />

            <PageHeader
              header="Routingplan – Kommunikation mit Hilfe der Taxonomie und eines Decision Trees im Griff"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-6-dgl_1.png"
              imageAltText="Routingplan"
              imageWrapper
              imagePadding
            />

            <PageHeader
              header="Eine Sequenz um Anrufe korrekt zuzuteilen"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-6-enbw_process_sequenz-sequenz-voice-detail.png"
              imageAltText="Sequenz Diagramm"
              imageWrapper
              imagePadding
            />

            <CallToAction
              header="Referenzen - Vertraulich"
              paragraph="Unsere Referenzen werden geschützt, wir zeigen unseren Stolz gerne bei einem persönlichen Gespräch."
              linkText="Kontakt"
              linkUrl="/contact"
              specialText="Projekte"
              specialUrl="/projects"
            />

            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}
export default ProjectSix;
