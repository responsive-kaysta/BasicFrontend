import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ContainerMain, PanelBasic } from "responsive-it-common";

storiesOf("00: Intro", module).add(
  "Abstract",
  () => (
    <ContainerMain>
      <PanelBasic content="some content" />
    </ContainerMain>
  ),
  {
    info: { source: false, inline: false },
  }
);
