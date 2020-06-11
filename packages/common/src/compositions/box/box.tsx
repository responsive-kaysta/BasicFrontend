import * as React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { breakpoint, color, spacing } from "../../identity";
import { BoxProps } from "./box-props";
import { BoxSizes } from "./box-sizes";

const boxMargins = css`
  @media (min-width: ${breakpoint}px) {
    margin-bottom: ${spacing.margin.xsmall * 2}rem;
    padding: ${spacing.padding.xsmall * 2}px;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-bottom: ${spacing.margin.xsmall * 2}rem;
    padding: ${spacing.padding.small * 2}px;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-bottom: ${spacing.margin.medium * 2}rem;
    padding: ${spacing.padding.medium}px;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin-bottom: ${spacing.margin.large}rem;
    padding: ${spacing.padding.large}px;
  }

  @media (min-width: ${breakpoint * 5}px) {
    margin-bottom: ${spacing.margin.xlarge}rem;
    padding: ${spacing.padding.large}px;
  }

  @media (min-width: ${breakpoint * 6}px) {
    margin-bottom: ${spacing.margin.xlarge}rem;
    padding: ${spacing.padding.xlarge}px;
  }
`;

const boxFull = css`
  width: 100%;
`;

const boxHalf = css`
  @media (min-width: ${breakpoint * 2}px) {
    width: 48.5%;
  }

  @media (max-width: ${breakpoint * 2}px) {
    width: 100%;
  }
`;

const boxThird = css`
  @media (min-width: ${breakpoint * 2}px) {
    width: 31.5%;
  }

  @media (max-width: ${breakpoint * 2}px) {
    width: 100%;
  }
`;

const StyledBox = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.size === BoxSizes.full && boxFull}

  ${(props) => props.size === BoxSizes.half && boxHalf}

  ${(props) => props.size === BoxSizes.third && boxThird}

  border: ${spacing.borderSize.small}px ${color.border} solid;
  border-radius: ${spacing.borderRadius.default}px;

  ${(props) =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
    `}

  min-height: ${spacing.margin.xlarge}rem;

  ${boxMargins}
`;

export const Box: FC<BoxProps> = ({ children, backgroundColor, size }) => {
  return (
    <>
      <StyledBox id="layout-box" backgroundColor={backgroundColor} size={size}>
        {children}
      </StyledBox>
    </>
  );
};
