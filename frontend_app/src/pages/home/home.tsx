import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import PageBanner from "../../compositions/page-banner/page-banner";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import { ePageStyleTemplates } from "../../less";
import iHomeState from "./spec/iHomeState";

class Home extends React.Component<any, iHomeState> {
  public render() {
    return (
      <>
        <Header />

        <PageBanner
          header="Basic Frontend"
          paragraph="finest - reactive & responsive - frontend"
          scrollTo="one"
          pageStyle={ePageStyleTemplates.transparent}
        />
        <EyeCatcher
          header=""
          paragraph=""
          pageStyle={ePageStyleTemplates.green}
        />
        <ArticleContainer pageStyle={ePageStyleTemplates.light}>
          <ColorContainer
            padded
            pageStyle={ePageStyleTemplates.transparent}
          ></ColorContainer>
        </ArticleContainer>

        <Footer />
      </>
    );
  }
}

export default Home;
