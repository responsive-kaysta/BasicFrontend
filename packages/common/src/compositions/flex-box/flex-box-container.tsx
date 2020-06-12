import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { contentMargin } from "../../identity";
import { FlexBoxContainerProps } from "./flex-box-container-props";

const FlexContainer = styled.section<FlexBoxContainerProps>`
  display: flex;

  ${(props) => props.flexWrap && `flex-wrap:${props.flexWrap};`}
  ${(props) => props.flexDirection && `flex-direction:${props.flexDirection};`}
  ${(props) =>
    props.justifyContent && `justify-content:${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items:${props.alignItems};`}
  ${(props) => props.alignContent && `align-content:${props.alignContent};`}

  ${(props) => props.width && `width:${props.width};`}

  ${(props) => props.withMargin && contentMargin}
`;

export const FlexBoxContainer: FC<FlexBoxContainerProps> = ({
  children,
  flexDirection,
  justifyContent,
  flexWrap,
  alignItems,
  alignContent,
  withMargin,
  width,
}) => {
  return (
    <FlexContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      alignItems={alignItems}
      alignContent={alignContent}
      width={width}
      withMargin={withMargin}
    >
      {children}
    </FlexContainer>
  );
};
