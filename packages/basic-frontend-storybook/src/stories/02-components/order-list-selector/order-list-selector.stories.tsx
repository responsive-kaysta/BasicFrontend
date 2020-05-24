import { storiesOf } from "@storybook/react";
import * as React from "react";
import { OrderListSelector } from "responsive-it-common";

import "../../../../less/fontawesome-all.css";
import "../../../../less/styles.css";
import "../../../../less/custom.css";

storiesOf(
  "02: Components / 03: Order List Selector",
  module
).add("Order List Selector", () => <OrderListSelector onChange={() => null} />);
