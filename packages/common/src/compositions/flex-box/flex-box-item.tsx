import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { FlexBoxItemProps } from "./flex-box-item-props";

const FlexContainer = styled.div<FlexBoxItemProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const FlexBoxItem: FC<FlexBoxItemProps> = ({
  children,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
}) => {
  return (
    <FlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      alignSelf={alignSelf}
    >
      {children}
    </FlexContainer>
  );
};
