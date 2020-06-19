import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  ContainerMain,
  PanelBasic,
  ThemeLight,
  ThemeTransparent,
} from "responsive-it-common";

storiesOf("00: Intro", module).add(
  "Abstract",
  () => (
    <ContainerMain
      theme={ThemeTransparent}
      backgroundImage="/assets/images/Website-Design-Background.png"
    >
      <PanelBasic theme={ThemeLight} content="some content" />
    </ContainerMain>
  ),
  {
    info: { source: false, inline: false },
  }
);
