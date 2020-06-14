import { rgba } from "polished";
import * as React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import {
  breakpoint,
  color,
  contentMargin,
  contentPadding,
  spacing,
} from "../../identity";
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

const boxShadow = css<BoxProps>`
  ${(props) =>
    props.widthShadow &&
    `
    box-shadow: ${rgba(color.primary, 0.2)} 0 4px 9px 0px;

    &:hover {
      box-shadow: ${rgba(color.primary, 0.2)} 0 12px 18px 0px;
      transform: scale(1.01);
    }
    &:active {
      box-shadow: ${rgba(color.primary, 0.1)} 0 0 0 3em inset;
      transform: scale(0.98);
    }
    &:focus {
      box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
      transform: scale(0.98);
    }
    &:focus:hover {
      box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
      transform: scale(0.98);
    }  
  `}
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
    props.backgroundColor && `background-color: ${props.backgroundColor};`}

  ${boxShadow}
    
  ${contentPadding}

  ${(props) => props.widthMargin && contentMargin}
`;

export const Box: FC<BoxProps> = ({
  children,
  size,
  minHeight,
  widthMargin,
  widthShadow,
  backgroundColor,
}) => {
  return (
    <>
      <StyledBox
        id="layout-box"
        backgroundColor={backgroundColor}
        size={size}
        minHeight={minHeight}
        widthMargin={widthMargin}
        widthShadow={widthShadow}
      >
        {children}
      </StyledBox>
    </>
  );
};
