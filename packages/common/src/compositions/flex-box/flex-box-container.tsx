import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { FlexBoxContainerProps } from "./flex-box-container-props";

const FlexContainer = styled.section<FlexBoxContainerProps>`
  display: flex;

  ${(props) => props.flexWrap && `flex-wrap:${props.flexWrap};`}
  ${(props) => props.flexDirection && `flex-direction:${props.flexDirection};`}
  ${(props) =>
    props.justifyContent && `justify-content:${props.justifyContent};`}

  ${(props) => props.width && `width:${props.width};`}
`;

export const FlexBoxContainer: FC<FlexBoxContainerProps> = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
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
