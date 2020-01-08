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
import ImageElement from "../../elements/image-element/image-element";
import RegularLinkElement from "../../elements/link-elements/regular-link-element";
import ListElements from "../../elements/list-elements/list-elements";
import Spacer from "../../elements/spacer/spacer";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import { eTextStyles } from "../../elements/text-elements/spec";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import { ePictogram } from "../../page-types";

var scroll = Scroll.animateScroll;

class ProjectOne extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>
            Industrie | Digitalisierung | Projekterfolg - BasicFrontend
          </title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="Industrie | Digitalisierung | Projekterfolg"
            paragraph="In 10 Monaten die Digitalisierung entwickelt, beschleunigt & verstanden"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Portallösungen in der Wolke"
            paragraph="Diverse Lösungen hochverfügbar, skallierbar & zugänglich – accessible"
            pictogram={ePictogram.computer}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Strategie, Prototyp, Produktion"
              paragraph="Wir durften im Rahmen der Digitalisierungsstragie eines grossen Unternehmens in Baden-Würthemberg Ingenieursleistung in Form von Manpower, Wissen und Experimentierfreude zum Projekterfolg beitragen."
              pageStyle={ePageStyleTemplates.light}
            />
            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Im Auftrag der{" "}
              <RegularLinkElement
                text="Solcom"
                link="https://www.solcom.de/de/kontakt.aspx"
              />{" "}
              konnten wir über 10 Monate als Subunternehmen in einem 8 Köpfigen
              Scrum-Team mitwirken und mitgestalten.
            </ParagraphElement>

            <ListContainer header="Interessant war dieses Projekt aus verschiedenen Gründen, zunächst die technischen Fakten.">
              <ListElements>Microsoft Azure als Betriebsplatform</ListElements>
              <ListElements>.NET Core & Standard</ListElements>
              <ListElements>
                Azure DevOps & IaC (Infrastructure as Code)
              </ListElements>
              <ListElements>WebApi</ListElements>
              <ListElements>SAP Schnittstellen</ListElements>
              <ListElements>Diverse „Datentöpfe“</ListElements>
              <ListElements>Authorisierung mit Auth0</ListElements>
              <ListElements>Dokumentenmanagement</ListElements>
            </ListContainer>

            <Spacer />

            <PageHeader
              header="Engineering & Architecture"
              paragraph="Als Prototyp gestartet wurde im Unternehmen schnell erkannt dass die Idee - die Strategie, Prozesse online verfügbar zu machen eindeutig zum Geschäftserfolg beiträgt. So wurde ein Team von 8 Spezialisten zusammengestellt dass ein Lieferantenportal neu aufbaut und dabei die modernsten Technologien einsetzen darf."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Die Anforderungen an das Team waren hoch, nicht nur „gute
              Programmierfähigkeit“ sondern echtes Engineering war gefragt.
              Senior‘s vom Fach, effizient und flexibel die technischen
              Anforderungen beschreiben, umsetzen und anspruchsvolle Software
              agil entwickeln.
            </ParagraphElement>
          </ColorContainer>

          <EyeCatcher
            header="Industrie | Digitalisierung | Projekterfolg"
            paragraph="Lieferanten & Monteure online bedienen, Daten im Hintergrund verarbeiten"
            pageStyle={ePageStyleTemplates.green}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Responsive als wichtige Anforderung"
              paragraph="Die Hauptanforderung aus fachlischer Sicht ist natürlich, dass das Lieferantenportal verschiedene Funktionen wie Auftragsverwaltung, Materialbestellung, Gutschriften, Dokumente etc. online und responsive verfügbar macht."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Responsive ist hier eine wichtige Anforderung da die Anwendung vom
              PC, Tablet als auch Handy benutzt wird und alle Inhalte auch auf
              der Baustelle verfügbar sein müssen. Sehr spannend, da die
              Umsetzung aus technischer Sicht alle möglichen Techniken
              kombiniert und die Anwendung darüber hinaus einen „echten Wert“
              bringt.
            </ParagraphElement>

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-3-material-order_960.png"
              imageAltText="Material Order Overview"
              imageCaptionText="Materialbestellung - Übersicht"
            />

            <Spacer />

            <PageHeader
              header="Prozesse im Hintergrund"
              paragraph="Wenige Dinge werden in „echtzeit“ ausgeführt, die meistens Prozesse die Daten verarbeiten laufen als Azure Function im Hintergrund und protokollieren jeden Verarbeitungsschritt. Auftrags- oder Produkt-Mutationen werden in der Regel asynchron und parallel verarbeitet und stehen dem Lieferanten spätestens am nächsten Tag zur Verfügung."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Nach „going live“ wurde recht viel Arbeit in die Stabilisierung
              und Härtung der Services investiert und so kann eine sehr hohe
              Verfügbarkeit, Sicherheit und Qualität sichergestellt werden.
              Laufender DevOps Betrieb sichert zudem zukünftige Schwierigkeiten
              ab bzw. man hat die Systeme optimal im Griff!
            </ParagraphElement>

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-3-devops_dashboard_po_960.png"
              imageAltText="DevOps Dashboard"
              imageCaptionText="DevOps Dashboard"
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

export default ProjectOne;
