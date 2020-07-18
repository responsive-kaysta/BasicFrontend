import {
  ContainerBody,
  ContainerSection,
  IntroEyeCatcher,
  SimpleEyeCatcher,
  ThemeTransparent,
} from "basic-frontend-common";
import React from "react";
import * as Scroll from "react-scroll";
import { ThemeGreen } from "../constants";

var scroll = Scroll.animateScroll;
var Link = Scroll.Link;

class Index extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <ContainerBody theme={ThemeTransparent}>
          <IntroEyeCatcher
            contentTop="responsive kaysta"
            contentBottom="finest full stack development"
            theme={ThemeTransparent}
          />
          <Link
            className={`bg-transparent ${ThemeTransparent.body.textColor} text-center font-semibold py-2 px-2`}
            to="first-eye-catcher"
            spy={true}
            smooth="easeInOutQuint"
            duration={1000}
            offset={0}
          >
            <div className="mb-4">weiter</div>
            <div className="block">&#x2B07;</div>
          </Link>
        </ContainerBody>
        <SimpleEyeCatcher
          theme={ThemeGreen}
          elementId="first-eye-catcher"
          contentBottom="Lorem ipsum dolor sit amet"
          contentTop="At vero eos et accusam et justo duo dolores et ea rebum"
        />

        <ContainerSection theme={ThemeTransparent}>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
          <div>Some Content</div>
        </ContainerSection>
      </>
    );
  }
}

export default Index;
