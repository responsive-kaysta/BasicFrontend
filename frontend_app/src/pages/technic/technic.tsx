import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import CallToAction from "../../compositions/call-to-action/call-to-action";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import PageHeader from "../../compositions/page-header/page-header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import Spacer from "../../elements/spacer/spacer";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import { eTextStyles } from "../../elements/text-elements/spec";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Technic extends React.Component {
  public render() {
    return (
      <>
        <ArticleContainer>
          <ArticleBanner
            header="Informationstechnologie"
            paragraph="Kreativität beeinflusst sämtliche Bereiche von Entwicklung und Kommunikation"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Warte, ich googel das mal..."
            paragraph="Ein Satz, den man inzwischen überall hört – egal ob unterwegs, im Office oder Privat"
            pictogram={eSpotlightPictogram.ai_2}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Geräteunabhängig"
              paragraph="Die Internetnutzung wird zunehmend mobil. Smartphone, Laptop, Tablet, Desktop-Computer - die Palette der auf dem Markt erhältlichen, internetfähigen Geräte erweitert sich stetig."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement cssClass={eTextStyles.lead}>
              Theoretisch müssen Sie damit rechnen, dass Ihre Applikation auf
              200+ verschiedenen Geräten benutzt wird.
            </ParagraphElement>

            <Spacer />

            <PageHeader
              header="Reaktiv"
              paragraph="Moderne Probleme erfordern moderne Lösungsansätze. Kluge Köpfe haben das erkannt und das sogenannte «responsive design» entwickelt. «responsive design» beschreibt ein Vorgehen welches das abrufende Gerät reagieren lässt."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Sicher"
              paragraph="Wir setzen sichere, erprobte und zuverlässige Methoden, Komponenten und Anwendungen ein. Nichts desto trotz wird unsere Arbeit fortlaufend geprüft, verbessert und erweitert."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />
          </ColorContainer>

          <EyeCatcher
            header=".NET & Mono"
            paragraph=".NET vom Feinsten"
            elementId="one"
            pageStyle={ePageStyleTemplates.green}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Native .NET Anwendungen"
              paragraph="Wir setzen hauptsächlich native .NET Anwendungen um, die Open Source Implementierung Mono gehört ebenso zu unseren Muttersprachen."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Web-Anwendungen"
              paragraph="ASP.NET oder MVC Web-Anwendungen, Web-API`s – synchron oder asynchron – die Palette eingesetzter .NET Technologien ist breit und lang."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Optimistic- und Testdriven-Development"
              paragraph="Optimistisch am Werk und mit etablierten Technologien und Vorgehensweisen Projekterfolg messen und verbessern. Wobei «optimistic driven development» eine Erfindung ist und wohl eher unsere Grundhaltung beschreibt."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />
          </ColorContainer>

          <EyeCatcher
            header="Cloud & Data"
            paragraph="Transaction or not, we deal your Data"
            elementId="one"
            pageStyle={ePageStyleTemplates.green}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Datenbanken"
              paragraph="Daten werden üblicherweise in Datenbanken vorgehalten die wir seit Jahren beherrschen und praktisch täglich benutzen."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Strukturiert oder unstrukturiert"
              paragraph="MySql, Microsoft Sql oder Oracle, relational oder oder NoSql, Document Db – wir kriegen Ihre Daten gespeichert, auch die unstrukturierten."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <CallToAction
              header="Professionell und ausgereift"
              paragraph="Bei unserer Arbeit verwenden wir professionelle und ausgereifte Produkte, Services und Frameworks. Wir beraten Sie gerne, das Richtige wird sich finden."
              specialText="Kontakt"
              specialUrl="/contact"
              linkText="Projekte"
              linkUrl="/projects"
            />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Technic;
