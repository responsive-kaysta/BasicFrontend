import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME } from "../../constants";
import { ArticleContainer } from "../../components/article-container/article-container";
import { ArticleBanner } from "../../compositions/article-banner/article-banner";
import { ePageStyleTemplates } from "../../less";
import { Spotlight } from "../../compositions/spotlight/spotlight";
import {
  ePictogram,
  eSpotlightOrientation,
  eHeaderElementTypes,
  eTextStyles
} from "../../page-types/";
import { ColorContainer } from "../../components/color-container/color-container";
import { PageHeader } from "../../compositions/page-header/page-header";
import { Spacer } from "../../elements/spacer/spacer";
import { ListContainer } from "../../compositions/list-container/list-container";
import { ListElement } from "../../elements/list-elements/list-elements";
import { EyeCatcher } from "../../compositions/eye-catcher/eye-catcher";
import { CallToAction } from "../../compositions/call-to-action/call-to-action";
import { ImageElement } from "../../elements/image-element/image-element";
import { HeaderElements } from "../../elements/header-elements/header-elements";
import { DivElement } from "../../elements/text-elements/div-element";
import { SpanLinkElement } from "../../elements/link-elements/span-link-element";
import { ToTopButton } from "../../elements/to-top-button/to-top-button";

var scroll = Scroll.animateScroll;

class ProjectFive extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>CI | CD | CQ - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="CI | CD | CQ"
            paragraph="Continuous Integration, Continuous Deployment, Continuous Quality"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Open Source Enterprise Lösungen"
            paragraph="Software mit überschaubarem Aufwand verwalten, verteilen und überprüfen – Open Source kreativ eingesetzt!"
            pictogram={ePictogram.engineer}
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

            <ImageElement
              imagePath="/assets/project-images/project-5-sprint.png"
              imageAltText="Übersicht Sprint-Planung"
              imageCaptionText="Aufgaben – Tasks & Bugs – via Browser einstellen und verwalten"
              imageWrapper
              imagePadding
            />

            <PageHeader
              header="Übersicht Source-Code Verwaltung"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-5-source-code.png"
              imageAltText="Übersicht Source-Code Verwaltung"
              imageCaptionText="Einsehen, kommentieren, verwalten, korrigieren"
              imageWrapper
              imagePadding
            />

            <PageHeader
              header="Übersicht Build-Management"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-5-build.png"
              imageAltText="Übersicht Build-Management"
              imageCaptionText="Code wird automatisch und kontinuierlich «gebaut», kontrolliert und verteilt"
              imageWrapper
              imagePadding
            />

            <PageHeader
              header="SonarQube Projektreport"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-5-sonaqube.png"
              imageAltText="SonarQube Projektreport"
              imageCaptionText="Alle Auffälligkeiten, Fehler und Tipps übersichtlich dargestellt"
              imageWrapper
              imagePadding
            />

            <PageHeader
              header="SonarQube Fehlerreport"
              pageStyle={ePageStyleTemplates.light}
            />

            <ImageElement
              imagePath="/assets/project-images/project-5-sonarqube-report.png"
              imageAltText="SonarQube Fehlerreport"
              imageCaptionText="Nichts, wirklich nichts entgeht diesem «Dienst» – automatisch und übersichtlich"
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
export default ProjectFive;
