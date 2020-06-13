import React, { FC } from "react";
import styled, { css } from "styled-components";
import { breakpoint, spacing } from "../../identity";
import { Text, TextTypes } from "../text";
import { SquareProps } from "./square-props";

const squareMargins = css`
  @media (min-width: ${breakpoint}px) {
    margin-bottom: ${spacing.margin.xsmall}rem;
    padding: ${spacing.padding.xsmall}px;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin-bottom: ${spacing.margin.xsmall}rem;
    padding: ${spacing.padding.small}px;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin-bottom: ${spacing.margin.medium}rem;
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

const SquareWrapper = styled.div<SquareProps>`
  display: flex;
  flex-direction: column;
  ${squareMargins}
`;

const StyledSquare = styled.div<SquareProps>`
  display: flex;
  justify-content: center;
  align-items: center;
 
  ${(props) =>
    !props.size &&
    `
    flex: 1;
    `}

  ${(props) =>
    props.size &&
    `
    height: ${props.size};
    width: ${props.size};
    `}

  ${(props) =>
    props.borderColor &&
    `
    border: ${spacing.borderSize.small}px ${props.borderColor} solid;
    border-radius: ${spacing.borderRadius.default}px;
    `}

  ${(props) =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
    `}
`;

export const Square: FC<SquareProps> = ({
  children,
  borderColor,
  backgroundColor,
  captionText,
  size,
}) => {
  return (
    <SquareWrapper>
      <StyledSquare
        id="layout-box"
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        captionText={captionText}
        size={size}
      >
        {children}
      </StyledSquare>
      {captionText && (
        <span>
          <Text type={TextTypes.caption}>{captionText}</Text>
        </span>
      )}
    </SquareWrapper>
  );
};
