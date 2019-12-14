import * as React from "react";
import ArticleBanner from "../../compositions/articleBanner/articleBanner";
import EyeCatcher from "../../compositions/eyeCatcher/exeCatcher";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/toTopButton/toTopButton";

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
            />

            <EyeCatcher
              header="EyeCatcher Header"
              paragraph="EyeCatcher Paragrap"
              cssStyle="green"
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
