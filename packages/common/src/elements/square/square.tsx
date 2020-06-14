import React, { FC } from "react";
import styled from "styled-components";
import { contentMargin, spacing } from "../../identity";
import { Text, TextTypes } from "../text";
import { SquareProps } from "./square-props";

const SquareWrapper = styled.div<SquareProps>`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    ${contentMargin}
  }
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
