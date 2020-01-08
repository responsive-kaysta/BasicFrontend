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

class ProjectFour extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>Information | Zugänglich | Innovativ - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="Information | Zugänglich | Innovativ"
            paragraph="Plattformgrenzen überwinden, Information geräteunabhängig zugänglich machen"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Innovation, das Zugpferd von Fortschritt"
            paragraph="Technische Lösungen die unterstützen und erleichtern – natürlich zugänglich und responsive."
            pictogram={ePictogram.analysis}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Aufträge, Zuweisen, Reporting"
              paragraph="Mit Unmengen von Messgeräten im Einsatz zählen die Energieversorger zu den IT-Supergrössen welche darüber hinaus auch noch Versorgungssicherheit und Verfügbarkeit sicher stellen müssen."
              pageStyle={ePageStyleTemplates.light}
            />
            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Als Subunternehmen der{" "}
              <SpanLinkElement
                text="Solcom"
                link="https://www.solcom.de/de/kontakt.aspx"
                showLinkIcon
              />{" "}
              durften wir diverse Verbesserungen und Erweiterungen umsetzen die
              die wachsenden Anforderungen ans das Gerätemanagement stellen.
            </ParagraphElement>

            <ListContainer header="Das Monteur-Portal wurde als Cloud-Applikation umgesetzt und kann von den Mitarbeitern bequem via Browser bedient werden.">
              <ListElement>Microsoft Azure als Betriebsplatform</ListElement>
              <ListElement>.NET Core & Standard</ListElement>
              <ListElement>
                Azure DevOps & IaC (Infrastructure as Code)
              </ListElement>
              <ListElement>WebApi</ListElement>
              <ListElement>SAP Schnittstellen</ListElement>
              <ListElement>Diverse „Datentöpfe“</ListElement>
              <ListElement>Authorisierung mit AZURE AD</ListElement>
              <ListElement>Serienbriefe</ListElement>
              <ListElement>Auftrags-Verwaltung</ListElement>
            </ListContainer>

            <Spacer />

            <PageHeader
              header="Beschleunigung & Verbesserung"
              paragraph="Einerseits mussten wir diverse Performance-Issues finden und beheben, beim asynchronen verarbeiten der Auftragszuweisung kam es immer wieder zu time-outs und Abbrüchen."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Datenbank-Operationen liefen aus dem Ruder und die AZURE-Functions
              mussten überarbeitet werden.
            </ParagraphElement>
            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Andererseits konnte mit Hilfe einer neuen Serienbrief-Funktion
              einiges an Mehraufwand beim Konfektionieren – durch senden an eine
              neue Druckstrasse – vermieden werden.
            </ParagraphElement>
            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Mitarbeiter können neu ganze Auftragsgruppen zusammenfassen und
              gebündelt an die Druckstrasse gesendet werden.
            </ParagraphElement>
          </ColorContainer>

          <EyeCatcher
            header="Energie | Verfügbarkeit | Kosteneffizienz"
            paragraph="Lieferanten & Monteure online bedienen, Daten im Hintergrund verarbeiten"
            pageStyle={ePageStyleTemplates.green}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="AZURE Search im Hintergrund"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-4-search.png"
              imageAltText="Order Dispatching Overview"
              imageCaptionText="Auftrags-Dispatcher – Auftrags-Auslöser – setzen verschiedene Parameter um die gewünschten Einträge anzuzeigen, die Resultate werden in echtzeit agregiert und angezeigt."
            />

            <Spacer />

            <PageHeader
              header="Alle Details mit einem Klick"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-4-details.png"
              imageAltText="Order Details Overview"
              imageCaptionText="Modale laden alle notwendigen Daten und «überlappen die Seite» - der Kontext geht nicht verloren und die Seite wird nicht neu geladen. Modern und Responsive!"
            />

            <Spacer />

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
              <SpanLinkElement text="Auth0" link="https://auth0.com/" />
              {", "}
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
export default ProjectFour;
