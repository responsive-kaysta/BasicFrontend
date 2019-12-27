import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import Spacer from "../../elements/spacer/spacer";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Projects extends React.Component {
  public render() {
    return (
      <>
        <ArticleContainer>
          <ArticleBanner
            header="Projekte"
            paragraph="Kreativität ist der Taktgeber unserer Inspiration"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.transparent} padded>
            <Spacer />

            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default Projects;
