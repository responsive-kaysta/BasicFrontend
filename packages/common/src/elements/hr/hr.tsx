import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { color, contentMargin } from "../../identity";
import { HrProps } from "./hr-props";

const StyledRuler = styled.hr<HrProps>`
  display: block;
  height: 1px;
  width: 100%;

  ${(props) => !props.color && `border: 1px solid ${color.darkest};`}

  ${(props) => props.color && `border: 1px solid ${props.color};`}

  ${(props) => props.withMargin && contentMargin}
`;

export const Hr: FC<HrProps> = ({ color, withMargin }) => {
  return <StyledRuler withMargin={withMargin} color={color} />;
};
