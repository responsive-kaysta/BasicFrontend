import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class About extends React.Component {
  public render() {
    return (
      <>
        <Header />

        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <ArticleBanner
            header="MasterArchive (beta)"
            paragraph="News | Information | Archiv | Suche"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Über"
            paragraph="Über uns, das Projekt, die Motivation"
            pictogram={eSpotlightPictogram.team}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <p className="lead">
              Das Projekt, die Idee zu einem umfassenden News Archiv, entstand
              bereits im Jahr 2008 und hat das Ziel, News-Artikel dauerhaft zu
              speichern und durchsuchen zu können.
            </p>
            <div className="abstract">
              Das Projekt setzt sich im Wesentlichen aus 3 Teilen zusammen:
            </div>
            <ul>
              <li>Datenbank um die Inhalte zu speichern </li>
              <li>Programm welches die Inhalte in einem Intervall lädt </li>
              <li>Webseite die die Inhalte zu lesen und zu durchsuchen </li>
            </ul>
            <div className="abstract">Inhalt</div>
            <ul>
              <li>
                Mittlerweile sind +/- 100 Feeds als Quelle und über 690 000
                Inhalte erfasst
              </li>
              <li>Übersicht der Inhalte mit Tooltip-Effekt der Details </li>
              <li>Deep-Link zum ursprünglichen Artikel </li>
              <li>Zusammenfassung nach Quelle/Source </li>
              <li>Responsive-Design </li>
            </ul>
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </>
    );
  }
}

export default About;
