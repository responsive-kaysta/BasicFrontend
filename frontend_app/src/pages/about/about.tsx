import * as React from "react";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";
import ArticleContainer from "../../components/article-container/article-container";

class About extends React.Component {
  public render() {
    return (
      <>
        <React.Suspense fallback={<Spinner />}>
          <Header />

          <ArticleContainer pageStyle={ePageStyleTemplates.purple}>
            <ArticleBanner
              header="ArticleBanner Header"
              paragraph="ArticleBanner Paragraph"
              elementId="one"
              pageStyle={ePageStyleTemplates.purple}
            />

            <EyeCatcher
              header="EyeCatcher Header"
              paragraph="EyeCatcher Paragrap"
              pageStyle={ePageStyleTemplates.purple}
            />

            <ToTopButton />
          </ArticleContainer>

          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default About;
