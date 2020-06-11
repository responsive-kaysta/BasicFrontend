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

  @media (min-width: ${breakpoint}px) {
    margin-bottom: ${spacing.margin.small}rem;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-bottom: ${spacing.margin.medium}rem;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-bottom: ${spacing.margin.medium}rem;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-bottom: ${spacing.margin.large}rem;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-bottom: ${spacing.margin.xlarge}rem;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-bottom: ${spacing.margin.xlarge}rem;
  }
`;

export const Hr: FC<HrProps> = ({ color }) => {
  return <StyledRuler color={color} />;
};
