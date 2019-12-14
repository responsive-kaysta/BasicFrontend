import * as React from "react";
import ArticleBanner from "../../compositions/articleBanner/articleBanner";
import EyeCatcher from "../../compositions/eyeCatcher/exeCatcher";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/toTopButton/toTopButton";
import { ePageStyleTemplates } from "../../less";

class About extends React.Component {
  public render() {
    return (
      <>
        <React.Suspense fallback={<Spinner />}>
          <Header />

          <article id="main" className="transparent">
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
          </article>

          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default About;
