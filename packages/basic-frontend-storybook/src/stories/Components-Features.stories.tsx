import {
  FeatureCenteredGrid,
  FeatureOffsetGrid,
  FeatureThreeColumn,
} from "basic-frontend-common";
import React from "react";

export default {
  title: "Design System / Components / Features",
  component: FeatureCenteredGrid,
};

export const centered = () => <FeatureCenteredGrid />;
centered.storyName = "Centered 2x2 Grid";

export const offset = () => <FeatureOffsetGrid />;
offset.storyName = "Offset 2x2 Grid";

export const column = () => <FeatureThreeColumn />;
column.storyName = "Simple 3 columns";
