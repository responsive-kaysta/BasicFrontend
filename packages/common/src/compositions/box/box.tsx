import * as React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { breakpoint, color, spacing } from "../../identity";
import { BoxProps } from "./box-props";
import { BoxSizes } from "./box-sizes";

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

  ${(props) => props.minHeight && `min-height: ${props.minHeight};`}

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}`;

export const Box: FC<BoxProps> = ({
  children,
  size,
  minHeight,
  backgroundColor,
}) => {
  return (
    <>
      <StyledBox
        id="layout-box"
        backgroundColor={backgroundColor}
        size={size}
        minHeight={minHeight}
      >
        {children}
      </StyledBox>
    </>
  );
};
