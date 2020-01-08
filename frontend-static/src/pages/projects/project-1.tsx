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

class ProjectOne extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>Responsive | Accessible | Umbraco - BasicFrontend</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="Responsive | Accessible | Umbraco"
            paragraph="Umbraco ist ein Open Source CMS dass sich grosser Beliebtheit erfreut"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Umbraco CMS"
            paragraph="Das freundlichste CMS auf dem Planeten"
            pictogram={ePictogram.website}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Nicht nur Content Management"
              paragraph="Wir sehen Umbraco CMS effektiv als Platform für komplexe Web-Anwendungen die ein hohes Mass an Flexibilität voraussetzen."
              pageStyle={ePageStyleTemplates.light}
            />
            <ParagraphElement textStyles={eTextStyles.paragraph}>
              Nicht dass wir uns falsch verstehen, Umbraco CMS wird von uns
              «nur» eingesetzt, nicht etwa entwickelt. Trotzdem, wir sind in der
              Community aktiv und pflegen Kontakte als auch Inhalte.
            </ParagraphElement>
          </ColorContainer>

          <EyeCatcher
            header="Responsive | Accessible | Umbraco"
            paragraph="Zugänglichkeit der Inhalte auf allen Platformen"
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

export default ProjectOne;
