import {
  CallToAction,
  PanelBasic,
  PanelFooter,
  PanelHeaderFooter,
} from "basic-frontend-common";
import React from "react";

export default {
  title: "Design System / Compositions / Panels",
  component: CallToAction,
};

export const basic = () => <PanelBasic>Lorem Ipsum</PanelBasic>;
basic.storyName = "Panel Basic";

export const footer = () => <PanelFooter content="Content" footer="Footer" />;
footer.storyName = "Panel with footer";

export const footerHeader = () => (
  <PanelHeaderFooter header="Header" content="Contet" footer="Footer" />
);
footerHeader.storyName = "Panel with header/footer";
