import {
  ContainerBody,
  IntroEyeCatcher,
  ThemeTransparent,
} from "basic-frontend-common";
import React from "react";

export default () => {
  return (
    <ContainerBody
      backgroundImage="/images/mainboard-1174219.jpg"
      theme={ThemeTransparent}
    >
      <IntroEyeCatcher
        contentTop="Lorem ipsum dolor sit amet"
        contentBottom="At vero eos et accusam et justo duo dolores et ea rebum"
        theme={ThemeTransparent}
      />
      <div>bottom</div>
    </ContainerBody>
  );
};
