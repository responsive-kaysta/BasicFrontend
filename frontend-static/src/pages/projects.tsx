import * as React from "react";
import * as Scroll from "react-scroll";
import ArticleContainer from "../components/article-container/article-container";
import ArticleBanner from "../compositions/article-banner/article-banner";
import { ePageStyleTemplates } from "../less";
import TileSection from "../components/tile-section/tile-section";
import TileItem from "../components/tile-section/tile-item";
import Spacer from "../elements/spacer/spacer";
import ToTopButton from "../elements/to-top-button/to-top-button";
import { ePictogram } from "../page-types";

var scroll = Scroll.animateScroll;

class Projects extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <ArticleContainer>
          <ArticleBanner
            header="Projekte"
            paragraph="Kreativität ist der Taktgeber unserer Inspiration"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <TileSection pageStyle={ePageStyleTemplates.transparent}>
            <TileItem
              item={6}
              header="DGL | 4com | Novomind"
              paragraph="Digital Layer | Telefonie | Vorgangsverwaltung"
              link="/projects"
              date="19.01.2019"
              backgroundImage={ePictogram.ai_2}
            />

            <TileItem
              item={5}
              header="CI | CD | CQ"
              paragraph="Continuous Integration, Continuous Deployment, Continuous Quality"
              link="/projects"
              date="19.01.2019"
              backgroundImage={ePictogram.engineer}
            />

            <TileItem
              item={4}
              header="Information | Zugänglich | Innovativ"
              paragraph="Plattformgrenzen überwinden, Information geräteunabhängig zugänglich machen"
              link="/projects"
              date="18.01.2019"
              backgroundImage={ePictogram.analysis}
            />

            <TileItem
              item={3}
              header="Industrie | Digitalisierung | Projekterfolg"
              paragraph="In 10 Monaten die Digitalisierung entwickelt, beschleunigt & verstanden"
              link="/projects"
              date="17.01.2019"
              backgroundImage={ePictogram.computer}
            />

            <TileItem
              item={2}
              header="sauber | sicher | schnell"
              paragraph="Aus Kreativität entstanden, als Prinzip im Einsatz"
              link="/projects"
              date="16.01.2019"
              backgroundImage={ePictogram.ai_4}
            />

            <TileItem
              item={1}
              header="Responsive | Accessible | Umbraco"
              paragraph="Umbraco ist ein Open Source CMS dass sich grosser Beliebtheit erfreut"
              link="/projects"
              date="15.01.2019"
              backgroundImage={ePictogram.website}
            />
          </TileSection>
          <Spacer />

          <ToTopButton />
        </ArticleContainer>
      </>
    );
  }
}

export default Projects;
