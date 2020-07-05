import { action } from "@storybook/addon-actions";
import React from "react";
import { CallToAction } from "basic-frontend-common";

export default {
  title: "Design System / 04 Components / CTA",
  component: CallToAction,
};

export const defaultStory = () => (
  <CallToAction
    ctaHeader="Call to action"
    ctaText="Some fancy description text"
    primaryButtonText="Primary"
    primaryButtonAction={action("Primary clicked")}
    secondaryButtonText="Secondary"
    secondaryButtonAction={action("Secondary clicked")}
  />
);
defaultStory.storyName = "Simple call to action";
