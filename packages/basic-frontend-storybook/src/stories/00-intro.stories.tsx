import { storiesOf } from "@storybook/react";
import * as React from "react";

import { BasicContainer, PanelBasic } from "responsive-it-common";

storiesOf("00: Intro", module).add(
  "Abstract",
  () => (
    <BasicContainer>
      <PanelBasic content="some content" />
    </BasicContainer>
  ),
  {
    info: { source: false, inline: false },
  }
);
