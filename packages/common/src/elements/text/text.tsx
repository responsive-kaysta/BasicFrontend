import * as React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { typography, color } from "../../identity";
import { TextProps } from "./text-props";
import { TextTypes } from "./text-types";

const FontWeight = css<TextProps>`
  ${(props) => !props.weight && `font-weight: ${typography.weight.regular};`}

  ${(props) =>
    props.weight && props.weight === typography.weight.black
      ? `font-weight: ${typography.weight.black};`
      : props.weight === typography.weight.bold
      ? `font-weight: ${typography.weight.bold};`
      : props.weight === typography.weight.extrabold
      ? `font-weight: ${typography.weight.extrabold};`
      : `font-weight: ${typography.weight.regular};`}
`;

const FontFamily = css<TextProps>`
  ${(props) =>
    props.fontType
      ? `font-family: ${props.fontType};`
      : `font-family: ${typography.type.primary};`}
`;

const FontSize = css<TextProps>`
  ${(props) =>
    props.fontSize
      ? `font-size: calc(${props.fontSize} + 1vmin);`
      : `font-size: ${typography.size.m2};`}
`;

const Label = styled.label<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Paragraph = styled.p<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Span = styled.span<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Pre = styled.pre<TextProps>`
  ${FontFamily}

  font-family: ${typography.type.code};
  font-size: ${typography.size.s2};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${color.darkest};
  border-radius: 3px;
  margin: 1rem 0;

  ${FontWeight}
`;

const Blockquote = styled.blockquote<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}

  text-align: center;
  position: relative;

  &:after {
    display: inline-block;
    content: '"';
  }

  &:before {
    display: inline-block;
    content: '"';
  }
`;

const Caption = styled.caption<TextProps>`
  ${FontFamily}
  
  font-size: ${typography.size.m1};

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Sub = styled.sub<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-size: 0.8em;
  bottom: -0.2em;

  ${FontWeight}
`;

const Sup = styled.sup<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-size: 0.8em;
  top: -0.2em;

  ${FontWeight}
`;

const Emphasis = styled.em<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-weight: ${typography.weight.bold};
`;

const Italic = styled.i<TextProps>`
  ${FontFamily}
  ${FontSize}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-style: italic;
  font-weight: 100;
`;

export const Text: FC<TextProps> = ({
  children,
  type,
  fontType,
  fontSize,
  weight,
  ...props
}) => {
  switch (type) {
    case TextTypes.blockquote: {
      return (
        <Blockquote
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Blockquote>
      );
    }
    case TextTypes.caption: {
      return (
        <Caption
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Caption>
      );
    }
    case TextTypes.emphasis: {
      return (
        <Emphasis
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Emphasis>
      );
    }
    case TextTypes.italic: {
      return (
        <Italic
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Italic>
      );
    }
    case TextTypes.label: {
      return (
        <Label
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Label>
      );
    }
    case TextTypes.paragraph: {
      return (
        <Paragraph
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Paragraph>
      );
    }
    case TextTypes.pre: {
      return (
        <Pre weight={weight} fontType={fontType} fontSize={fontSize} {...props}>
          {children}
        </Pre>
      );
    }
    case TextTypes.span: {
      return (
        <Span
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Span>
      );
    }
    case TextTypes.sub: {
      return (
        <Sub weight={weight} fontType={fontType} fontSize={fontSize} {...props}>
          {children}
        </Sub>
      );
    }
    case TextTypes.sup: {
      return (
        <Sup weight={weight} fontType={fontType} fontSize={fontSize} {...props}>
          {children}
        </Sup>
      );
    }
    default: {
      return (
        <Paragraph
          weight={weight}
          fontType={fontType}
          fontSize={fontSize}
          {...props}
        >
          {children}
        </Paragraph>
      );
    }
  }
};
