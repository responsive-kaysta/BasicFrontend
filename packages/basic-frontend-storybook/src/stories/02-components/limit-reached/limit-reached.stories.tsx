import { storiesOf } from "@storybook/react";
import * as React from "react";
import { LimitReached, PageStyleTemplates } from "responsive-it-common";

import "../../../../public/less/fontawesome-all.css";
import "../../../../public/less/styles.css";
import "../../../../public/less/custom.css";

storiesOf("02: Components / 02: Limit Reached!", module).add(
  "Limit Reached!",
  () => (
    <LimitReached
      header="LimitReached Header"
      paragraph="LimitReached Paragraph!"
      limitReached={true}
      pageStyle={PageStyleTemplates.green}
    />
  )
);
