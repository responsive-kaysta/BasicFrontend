import {
  ContainerBody,
  ContainerSection,
  IntroEyeCatcher,
  SimpleEyeCatcher,
  ThemeTransparent,
} from "basic-frontend-common";
import React from "react";
import { ThemeGreen } from "../constants";

export default () => {
  return (
    <>
      <ContainerBody
        backgroundImage="/images/mainboard-1174219.jpg"
        theme={ThemeTransparent}
      >
        <IntroEyeCatcher
          contentTop="responsive kaysta"
          contentBottom="finest full stack development"
          theme={ThemeTransparent}
        />
      </ContainerBody>
      <SimpleEyeCatcher
        theme={ThemeGreen}
        contentBottom="Lorem ipsum dolor sit amet"
        contentTop="At vero eos et accusam et justo duo dolores et ea rebum"
      />
      <ContainerSection theme={ThemeTransparent}>
        <div>some</div>
      </ContainerSection>
    </>
  );
};
