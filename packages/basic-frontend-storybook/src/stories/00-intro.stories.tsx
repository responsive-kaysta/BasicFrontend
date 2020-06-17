import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Heading } from "responsive-it-common";

storiesOf("00: Application", module).add(
  "Intro",
  () => <Heading>some text</Heading>,
  {
    info: { source: false, inline: false },
  }
);
