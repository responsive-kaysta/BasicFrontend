import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import SpanLinkElement from "../../elements/link-elements/span-link-element";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import CallToAction from "../../compositions/call-to-action/call-to-action";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import ListContainer from "../../compositions/list-container/list-container";
import PageHeader from "../../compositions/page-header/page-header";
import { eSpotlightOrientation } from "../../compositions/spotlight/spec";
import Spotlight from "../../compositions/spotlight/spotlight";
import HeaderElements from "../../elements/header-elements/header-elements";
import { eHeaderElementTypes } from "../../elements/header-elements/spec";
import ImageElement from "../../elements/image-element/image-element";
import ListElement from "../../elements/list-elements/list-elements";
import Spacer from "../../elements/spacer/spacer";
import DivElement from "../../elements/text-elements/div-element";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import { eTextStyles } from "../../elements/text-elements/spec";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import { ePictogram } from "../../page-types";
import { PAGE_NAME } from "../../constants";

var scroll = Scroll.animateScroll;

class ProjectThree extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>
            Industrie | Digitalisierung | Projekterfolg - {PAGE_NAME}
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
              <SpanLinkElement
                text="Solcom"
                link="https://www.solcom.de/de/kontakt.aspx"
                showLinkIcon
              />{" "}
              konnten wir über 10 Monate als Subunternehmen in einem 8 Köpfigen
              Scrum-Team mitwirken und mitgestalten.
            </ParagraphElement>

            <ListContainer header="Interessant war dieses Projekt aus verschiedenen Gründen, zunächst die technischen Fakten.">
              <ListElement>Microsoft Azure als Betriebsplatform</ListElement>
              <ListElement>.NET Core & Standard</ListElement>
              <ListElement>
                Azure DevOps & IaC (Infrastructure as Code)
              </ListElement>
              <ListElement>WebApi</ListElement>
              <ListElement>SAP Schnittstellen</ListElement>
              <ListElement>Diverse „Datentöpfe“</ListElement>
              <ListElement>Authorisierung mit Auth0</ListElement>
              <ListElement>Dokumentenmanagement</ListElement>
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
              imageWrapper
              imagePadding
            />

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
              imageWrapper
              imagePadding
            />

            <HeaderElements
              headerElementType={eHeaderElementTypes.headLineCenter}
            >
              Technologien, Methoden, Services
            </HeaderElements>
            <DivElement textStyles={eTextStyles.align_center}>
              <SpanLinkElement
                text="Scrum"
                link="https://de.wikipedia.org/wiki/Scrum"
              />
              {", "}
              <SpanLinkElement
                text="Agile"
                link="https://de.wikipedia.org/wiki/Agile_Softwareentwicklung"
              />
              {", "}
              <SpanLinkElement
                text="VsTs"
                link="https://visualstudio.microsoft.com/"
              />
              {", "}
              <SpanLinkElement
                text="Azure"
                link="https://azure.microsoft.com/"
              />
              {", "}
              <SpanLinkElement
                text="MVC"
                link="https://de.wikipedia.org/wiki/Model_View_Controller"
              />
              {", "}
              <SpanLinkElement
                text="Swagger"
                link="https://de.wikipedia.org/wiki/Swagger_(Software)"
              />
              {", "}
              <SpanLinkElement
                text="CosmosDb"
                link="https://azure.microsoft.com/de-de/services/cosmos-db/"
              />
              {", "}
              <SpanLinkElement
                text="Microsoft SQL"
                link="https://www.microsoft.com/en-us/sql-server/sql-server-2017"
              />
              {", "}
              <SpanLinkElement text="Auth0" link="https://auth0.com/" />{" "}
              <SpanLinkElement
                text=".NET Core"
                link="https://github.com/dotnet/core"
              />
              {", "}
              <SpanLinkElement
                text=".NET Standard"
                link="https://docs.microsoft.com/de-de/dotnet/standard/net-standard"
              />
              {", "}
              <SpanLinkElement
                text="Application Insight"
                link="https://docs.microsoft.com/en-us/azure/application-insights/app-insights-overview"
              />
              {", "}
              <SpanLinkElement
                text="Asnychron"
                link="https://de.wikipedia.org/wiki/Ajax_(Programmierung)"
              />
              {", "}
              <SpanLinkElement
                text=".NET, Azure Functions"
                link="https://www.microsoft.com/net"
              />
            </DivElement>

            <Spacer />

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
export default ProjectThree;
