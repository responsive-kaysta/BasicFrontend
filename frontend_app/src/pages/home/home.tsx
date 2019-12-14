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
import { ePageStyleTemplates } from "../../less";

class Home extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />

        <PageBanner
          header="Header"
          paragraph="Paragraph"
          scrollTo="one"
          pageStyle={ePageStyleTemplates.transparent}
        />

        <EyeCatcher
          header="EyeCatcher Header"
          paragraph="EyeCatcher Paragrap"
          pageStyle={ePageStyleTemplates.purple}
        />

        <article id="main" className="light">
          <ArchiveContentList
            apiController="lastestArchiveContent"
            pageKey="Home"
            pageStyle={ePageStyleTemplates.green}
          />

          <ArticleBanner
            header="ArticleBanner Header"
            paragraph="ArticleBanner Paragraph"
            elementId="one"
            pageStyle={ePageStyleTemplates.purple}
          />

          <Spotlight
            header="Spotlight Header"
            paragraph="Spotlight Paragraph"
            pageStyle={ePageStyleTemplates.green}
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
