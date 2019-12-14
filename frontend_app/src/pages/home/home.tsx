import * as React from "react";
import ArchiveContentList from "../../components/archiveContentList/archiveContentList";
import ArticleBanner from "../../compositions/articleBanner/articleBanner";
import EyeCatcher from "../../compositions/eyeCatcher/exeCatcher";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import PageBanner from "../../compositions/pageBanner/pageBanner";
import Spotlight from "../../compositions/spotLight/spotLight";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/toTopButton/toTopButton";

class Home extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />

        <PageBanner header="Header" paragraph="Paragraph" scrollTo="one" />

        <EyeCatcher
          header="EyeCatcher Header"
          paragraph="EyeCatcher Paragrap"
          cssStyle="light"
        />

        <article id="main" className="light">
          <ArchiveContentList
            apiController="lastestArchiveContent"
            pageKey="Home"
            cssStyle="light"
          />

          <ArticleBanner
            header="ArticleBanner Header"
            paragraph="ArticleBanner Paragraph"
            elementId="one"
            cssStyle="purple"
          />

          <Spotlight
            header="Spotlight Header"
            paragraph="Spotlight Paragraph"
            cssStyle="purple"
            image="/assets/images/spotlight_planing.png"
          />

          <ToTopButton />
        </article>

        <Footer />
      </React.Suspense>
    );
  }
}

export default Home;
