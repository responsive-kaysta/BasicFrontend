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
import HeaderElements from "../../elements/header-elements/header-elements";
import { eHeaderElementTypes } from "../../elements/header-elements/spec";
import ImageElement from "../../elements/image-element/image-element";
import SpanLinkElement from "../../elements/link-elements/span-link-element";
import ListElement from "../../elements/list-elements/list-elements";
import Spacer from "../../elements/spacer/spacer";
import DivElement from "../../elements/text-elements/div-element";
import { eTextStyles } from "../../elements/text-elements/spec";
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
              header="Nicht nur Kosten sparen"
              paragraph="Wir bauen unsere Projekte möglichst mit Open-Source Mitteln auf da wir nicht nur die Idee dahinter verstehen und unterstützen sondern auch die finanziellen Vorteile – keine Lizenzkosten z.B.. Die von uns eingesetzten Tools sind in der Regel kostenfrei und enthalten alle Funktionen die wir benötigen, darüber hinaus sehen wir es als Challenge da Open-Source noch immer als unprofessionell gilt oder Lizenzprobleme befürchtet werden."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Source-Code Verwaltung"
              paragraph="AZURE DevOps (visualstudio.com) ist aus unserer Sicht ein grosser Wurf aus dem Hause Microsoft. Nicht nur Source-Code Verwaltung – GIT als auch TFS Repositories – werden angeboten, Team Foundation Services bietet diverse zusätzliche Features."
              pageStyle={ePageStyleTemplates.light}
            />

            <ListContainer>
              <ListElement>Source-Code Verwaltung</ListElement>
              <ListElement>Build- und Deploy-Management</ListElement>
              <ListElement>UnitTests</ListElement>
              <ListElement>Projekt-Vewaltung (Scrum, Agile, etc.)</ListElement>
            </ListContainer>

            <Spacer />

            <PageHeader
              header="Gratis in der Basis-Version"
              paragraph="Die beschriebenen Dienste können in der Basis-Version gratis genutzt werden und setzen ausser einem Browser eigentlich nichts voraus. (Bei kommerziellen Projekten ist mit gewissem finanziellem Aufwand zu rechen)"
              pageStyle={ePageStyleTemplates.light}
            />

            <ListContainer>
              <ListElement>AZURE DevOps (visualstudio.com)</ListElement>
              <ListElement>Source-Code Verwaltung</ListElement>
              <ListElement>Build - Source-Code «bauen»</ListElement>
              <ListElement>Deployment - «gebauter» Code verteilen</ListElement>
              <ListElement>
                Projekt-Management – Scrum, Agile, Wiki, etc.
              </ListElement>
              <ListElement>
                SonarQube oder SonarCloud (continuous code quality)
              </ListElement>
            </ListContainer>
          </ColorContainer>

          <EyeCatcher
            header="verwalten | überprüfen | verteilen"
            paragraph="Kontinuierlich und automatisiert Code Qualität sicherstellen und integrieren"
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
              header="Übersicht Sprint-Planung"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-5-sprint.png"
              imageAltText="Übersicht Sprint-Planung"
              imageCaptionText="Aufgaben – Tasks & Bugs – via Browser einstellen und verwalten"
            />

            <Spacer />

            <PageHeader
              header="Übersicht Source-Code Verwaltung"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-5-source-code.png"
              imageAltText="Übersicht Source-Code Verwaltung"
              imageCaptionText="Einsehen, kommentieren, verwalten, korrigieren"
            />

            <Spacer />

            <PageHeader
              header="Übersicht Build-Management"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-5-build.png"
              imageAltText="Übersicht Build-Management"
              imageCaptionText="Code wird automatisch und kontinuierlich «gebaut», kontrolliert und verteilt"
            />

            <Spacer />

            <PageHeader
              header="SonarQube Projektreport"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-5-sonaqube.png"
              imageAltText="SonarQube Projektreport"
              imageCaptionText="Alle Auffälligkeiten, Fehler und Tipps übersichtlich dargestellt"
            />

            <Spacer />

            <PageHeader
              header="SonarQube Fehlerreport"
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <ImageElement
              imagePath="/assets/project-images/project-5-sonarqube-report.png"
              imageAltText="SonarQube Fehlerreport"
              imageCaptionText="Nichts, wirklich nichts entgeht diesem «Dienst» – automatisch und übersichtlich"
            />

            <Spacer />

            <HeaderElements
              headerElementType={eHeaderElementTypes.headLineCenter}
            >
              Technologien, Methoden, Services
            </HeaderElements>
            <DivElement textStyles={eTextStyles.align_center}>
              <SpanLinkElement
                text="AZURE DevOps"
                link="https://azure.microsoft.com/en-us/solutions/devops/"
              />
              {", "}
              <SpanLinkElement
                text="VisualStudio"
                link="https://visualstudio.microsoft.com/"
              />
              {", "}
              <SpanLinkElement
                text="C# .NET"
                link="https://docs.microsoft.com/en-us/dotnet/csharp/"
              />
              {", "}
              <SpanLinkElement
                text="SonarQube"
                link="https://www.sonarqube.org/"
              />
              {", "}
              <SpanLinkElement
                text="Scrum"
                link="https://de.wikipedia.org/wiki/Scrum"
              />
              {", "}
              <SpanLinkElement
                text="Continous Integration"
                link="https://de.wikipedia.org/wiki/Kontinuierliche_Integration"
              />
              {", "}
              <SpanLinkElement
                text="Continous Delivery/Deployment"
                link="https://www.scrum.de/unterschiede-zwischen-continuous-integration-continuous-delivery-und-continuous-deployment/"
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
export default ProjectSix;
