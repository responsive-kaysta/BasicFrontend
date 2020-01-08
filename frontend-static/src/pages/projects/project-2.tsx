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
import SpanLinkElement from "../../elements/link-elements/span-link-element";
import ListElements from "../../elements/list-elements/list-elements";
import Spacer from "../../elements/spacer/spacer";
import ParagraphElement from "../../elements/text-elements/paragraph-element";
import { eTextStyles } from "../../elements/text-elements/spec";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import { ePictogram } from "../../page-types";

var scroll = Scroll.animateScroll;

class ProjectTwo extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>sauber | sicher | schnell - BasicFrontend</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="sauber | sicher | schnell"
            paragraph="Aus Kreativität entstanden, als Prinzip im Einsatz"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="InMemoryLoader"
            paragraph="Nicht nur als Nuget Package, auch als Idee in Form von Manpower in vielen Zeilen Code vorhanden"
            pictogram={ePictogram.ai_4}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Grundpfeiler"
              paragraph="Als privates Projekt gestartet stellt diese .NET Bibliothek mittlerweile ein Grundpfeiler vieler Anwendungen dar."
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <PageHeader
              header="Entscheidungen"
              paragraph="Als Entscheider fragt man sich oft, ob die Investition in neue Technologie – Software, Hardware, Service – wirklich lohnt und Einsparungen gemacht, Wertströme erzielt oder ob man neue Kunden gewinnen kann. Nur mit Technik? In aller Regel nicht!"
              pageStyle={ePageStyleTemplates.light}
            />
            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Stellen Sie sich vor, Sie müssen als Dienstleister in der
              Informatikbranche viele Einzelprojekte mit immer der selben
              Technologie (.NET, ASP.NET, MVC) umsetzen und dabei immer wieder
              die selben Komponenten neu implementieren zu müssen. Bsp.: Login
              für Shop, Formular für Kontakt, etc.
            </ParagraphElement>
            <Spacer />
            <PageHeader
              header="Effizient und spannend"
              paragraph="Die InMemoryLoader Komponenten muss man sich als abstrakte Applikationsschicht vorstellen die es Ihnen ermöglicht, Software Komponenten nach einem abstrakten Model zu implementieren so dass diese Komponente in der selben Form, immer und immer wieder verwendet werden können."
              pageStyle={ePageStyleTemplates.light}
            />
          </ColorContainer>

          <EyeCatcher
            header="Sauber | sicher | schnell"
            paragraph="InMemoryLoader Programme «fliegen»"
            pageStyle={ePageStyleTemplates.green}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="RAM ist schnell"
              paragraph="Die schnellste und effizienteste Speicher-Komponente in einem Rechner ist der Hauptspeicher «RAM». Dies wurde vom Erfinder wie auch der Gründer dieser Firma erkannt."
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <PageHeader
              header="Potenzial ausschöpfen"
              paragraph="Das Potenzial der Hardware wird optimal genutzt da Komponenten als auch die Daten im RAM Ihres Rechners – der die Anwendung betreibt – vorliegen und immer schnell, sicher und skalierbar zur Verfügung stehen."
              pageStyle={ePageStyleTemplates.light}
            />
            <ListContainer header="Das Projekt, der Hintergrund, weitere Informationen">
              <ListElements>
                <SpanLinkElement
                  text="Die Idee"
                  link="https://blog.responsive-kaysta.ch/post/inmemoryloader"
                />
              </ListElements>
              <ListElements>
                <SpanLinkElement
                  text="Das Repository"
                  link="https://github.com/inmemoryloader"
                />
              </ListElements>
              <ListElements>
                <SpanLinkElement
                  text="Weitere Ideen"
                  link="https://github.com/orgs/responsive-kaysta/projects/1"
                />
              </ListElements>
              <ListElements>
                <SpanLinkElement
                  text="Die Pakete"
                  link="https://www.nuget.org/profiles/kaysta"
                />
              </ListElements>
              <ListElements>
                <SpanLinkElement
                  text="The four myths of InMemory Computing"
                  link="https://www.gridgain.com/resources/blog/four-myths-of-in-memory-computing"
                />
              </ListElements>
              <ListElements>
                <SpanLinkElement
                  text="In-Memory Processing"
                  link="https://en.wikipedia.org/wiki/In-memory_processing"
                />
              </ListElements>
              <ListElements>
                <SpanLinkElement
                  text="Late Binding"
                  link="https://en.wikipedia.org/wiki/Late_binding"
                />
              </ListElements>
            </ListContainer>
            <Spacer />

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

export default ProjectTwo;
