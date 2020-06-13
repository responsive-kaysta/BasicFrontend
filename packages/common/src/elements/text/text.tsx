import * as React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { typography } from "../../identity";
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

const Label = styled.label<TextProps>`
  ${(props) =>
    props.fontType
      ? `font-family: ${props.fontType};`
      : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Paragraph = styled.p<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Span = styled.span<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Pre = styled.pre<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Blockquote = styled.blockquote<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Caption = styled.caption<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${FontWeight}
`;

const Sub = styled.sub<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-size: 0.8rem;
  position: relative;
  top: 0.5em;

  ${FontWeight}
`;

const Sup = styled.sup<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-size: 0.8rem;
  position: relative;
  top: -0.5rem;

  ${FontWeight}
`;

const Emphasis = styled.em<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-weight: ${typography.weight.bold};
`;

const Italic = styled.i<TextProps>`
${(props) =>
  props.fontType
    ? `font-family: ${props.fontType};`
    : `font-family: ${typography.type.primary};`}

  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-style: italic;

  ${FontWeight}
`;

export const Text: FC<TextProps> = ({
  children,
  type,
  fontType,
  weight,
  ...props
}) => {
  switch (type) {
    case TextTypes.blockquote: {
      return (
        <Blockquote weight={weight} fontType={fontType} {...props}>
          {children}
        </Blockquote>
      );
    }
    case TextTypes.caption: {
      return (
        <Caption weight={weight} fontType={fontType} {...props}>
          {children}
        </Caption>
      );
    }
    case TextTypes.emphasis: {
      return (
        <Emphasis weight={weight} fontType={fontType} {...props}>
          {children}
        </Emphasis>
      );
    }
    case TextTypes.italic: {
      return (
        <Italic weight={weight} fontType={fontType} {...props}>
          {children}
        </Italic>
      );
    }
    case TextTypes.label: {
      return (
        <Label weight={weight} fontType={fontType} {...props}>
          {children}
        </Label>
      );
    }
    case TextTypes.paragraph: {
      return (
        <Paragraph weight={weight} fontType={fontType} {...props}>
          {children}
        </Paragraph>
      );
    }
    case TextTypes.pre: {
      return (
        <Pre weight={weight} fontType={fontType} {...props}>
          {children}
        </Pre>
      );
    }
    case TextTypes.span: {
      return (
        <Span weight={weight} fontType={fontType} {...props}>
          {children}
        </Span>
      );
    }
    case TextTypes.sub: {
      return (
        <Sub weight={weight} fontType={fontType} {...props}>
          {children}
        </Sub>
      );
    }
    case TextTypes.sup: {
      return (
        <Sup weight={weight} fontType={fontType} {...props}>
          {children}
        </Sup>
      );
    }
    default: {
      return (
        <Paragraph weight={weight} fontType={fontType} {...props}>
          {children}
        </Paragraph>
      );
    }
  }
};
