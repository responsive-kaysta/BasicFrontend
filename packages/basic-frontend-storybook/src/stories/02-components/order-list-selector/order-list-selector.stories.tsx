import { storiesOf } from "@storybook/react";
import * as React from "react";
import { OrderListSelector } from "responsive-it-common";

import "../../../../public/less/fontawesome-all.css";
import "../../../../public/less/styles.css";
import "../../../../public/less/custom.css";

storiesOf(
  "02: Components / 03: Order List Selector",
  module
).add("Order List Selector", () => <OrderListSelector onChange={() => null} />);
