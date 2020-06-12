import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { color, contentMargin, contentSmallMargin } from "../../identity";
import { HrProps } from "./hr-props";

const StyledRuler = styled.hr<HrProps>`
  display: block;
  height: 1px;
  width: 100%;

  ${(props) => !props.color && `border: 1px solid ${color.darkest};`}

  ${(props) => props.color && `border: 1px solid ${props.color};`}

  ${(props) =>
    props.withMargin && props.smallMargin ? contentSmallMargin : contentMargin}
`;

export const Hr: FC<HrProps> = ({ color, withMargin, smallMargin }) => {
  return (
    <StyledRuler
      withMargin={withMargin}
      smallMargin={smallMargin}
      color={color}
    />
  );
};
