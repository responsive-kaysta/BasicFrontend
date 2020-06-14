import React, { FC } from "react";
import { FlexBoxContainer, Text, typography } from "responsive-it-common";

export const SwatchesHeader: FC = () => (
  <FlexBoxContainer flexDirection="row" flexWrap="nowrap" withMargin>
    <FlexBoxContainer flexDirection="column" width="40%">
      <Text weight={typography.weight.bold}>Name</Text>
    </FlexBoxContainer>
    <FlexBoxContainer flexDirection="column" width="60%">
      <Text weight={typography.weight.bold}>Swatches</Text>
    </FlexBoxContainer>
  </FlexBoxContainer>
);
