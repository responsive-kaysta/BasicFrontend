import * as React from "react";
import ArchiveContentList from "../../components/archive-content-list/archive-content-list";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import ArticleBanner from "../../compositions/article-banner/article-banner";
import PageHeader from "../../compositions/page-header/page-header";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import Spinner from "../../elements/spinner/spinner";
import ToTopButton from "../../elements/to-top-button/to-top-button";
import { ePageStyleTemplates } from "../../less";

class Home extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Spinner />}>
        <Header />

        <ArticleContainer pageStyle={ePageStyleTemplates.transparent}>
          <ArticleBanner
            header="MasterArchive (beta)"
            paragraph="News | Information | Archiv | Suche"
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <PageHeader header="Die letzten News" paragraph="" />

            <ArchiveContentList
              apiController="lastestArchiveContent"
              pageKey="Home"
              pageStyle={ePageStyleTemplates.transparent}
            />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </React.Suspense>
    );
  }
}

export default Home;
