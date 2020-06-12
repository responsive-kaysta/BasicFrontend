import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { FlexBoxItemProps } from "./flex-box-item-props";

const FlexContainer = styled.div<FlexBoxItemProps>`
  display: flex;
  
  ${(props) => props.flexWrap && `flex-wrap:${props.flexWrap};`}
  ${(props) => props.flexDirection && `flex-direction:${props.flexDirection};`}
  ${(props) =>
    props.justifyContent && `justify-content:${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items:${props.alignItems};`}
  ${(props) => props.alignContent && `align-content:${props.alignContent};`}
  ${(props) => props.alignSelf && `align-self:${props.alignContent};`}

  ${(props) => props.width && `width:${props.width};`}
`;

export const FlexBoxItem: FC<FlexBoxItemProps> = ({
  children,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  width,
}) => {
  return (
    <FlexContainer
      flexWrap={flexWrap}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      alignSelf={alignSelf}
      width={width}
    >
      {children}
    </FlexContainer>
  );
};
