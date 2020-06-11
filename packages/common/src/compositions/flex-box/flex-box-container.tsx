import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { FlexBoxContainerProps } from "./flex-box-container-props";

const FlexContainer = styled.div<FlexBoxContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const FlexBoxContainer: FC<FlexBoxContainerProps> = ({
  children,
  flexDirection,
  justifyContent,
  flexWrap,
  width,
}) => {
  return (
    <FlexContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      width={width}
    >
      {children}
    </FlexContainer>
  );
};
