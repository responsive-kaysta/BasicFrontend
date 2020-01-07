import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import CallToAction from "../../compositions/call-to-action/call-to-action";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import PageHeader from "../../compositions/page-header/page-header";
import { eSpotlightOrientation } from "../../compositions/spotlight/spec";
import Spotlight from "../../compositions/spotlight/spotlight";
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
          <title>About - BasicFrontend</title>
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
              header="Responsive"
              paragraph="Wird aktiv umgesetzt, heisst, Umbraco ist explizit für diesen Ansatz ausgelegt und beinhaltet viele hilfreiche Funktionen, modernste Anforderungen zielgerichtet umzusetzen."
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <PageHeader
              header="Accessible – Zugänglich"
              paragraph="Unsere (Web)Projekte werden auf Zugänglichkeit getrimmt und werden dahingehend geprüft und optimiert. Ein Spagat ist jedoch oft notwendig..."
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <PageHeader
              header="MVC Pattern"
              paragraph="DIE Wahl bei allen Projekten und Installationen den dieses System ist konzipiert, responsive Applikationen bereitzustellen. Das MVC Pattern – Model, View, Controller – dient als Grundlage, nur so werden Daten, Logik und Darstellung sauber getrennt."
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <PageHeader
              header=".NET Features"
              paragraph="Da das System mit .NET MVC aufgebaut wird sind keine Komplikationen seitens Microsoft «Welt» zu erwarten bzw. können komplett ausgeschlossen werden. Die Trennung der «Webschicht» von der «Datenschicht» erlaubt zudem flexibel und trotzdem einheitlich das System zu erweitern."
              pageStyle={ePageStyleTemplates.light}
            />
            <Spacer />
            <PageHeader
              header="BasicFrontend"
              paragraph="Aus Einzelprojekten wurde eine Idee, daraus ein Prototyp, daraus ein Modul. Mit unserem BasicFrontend starten die meisten der eigenen Installationen."
              pageStyle={ePageStyleTemplates.light}
            />

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
