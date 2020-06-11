import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { breakpoint, color, spacing } from "../../identity";
import { HrProps } from "./hr-props";

const StyledRuler = styled.hr<HrProps>`
  display: block;
  height: 1px;

  ${(props) =>
    !props.color &&
    `
    border: 1px solid ${color.darkest};
    width: 100%;
`}

  ${(props) =>
    props.color &&
    `
    border: 1px solid ${props.color};
    width: 100%;
  `}

  @media (min-width: ${breakpoint * 2}px) {
    margin-top: ${spacing.margin.xsmall}rem;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-top: ${spacing.margin.medium}rem;
  }
  
`;

export const Hr: FC<HrProps> = ({ color }) => {
  return <StyledRuler color={color} />;
};
