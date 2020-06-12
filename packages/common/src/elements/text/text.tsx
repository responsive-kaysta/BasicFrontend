import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { typography } from "../../identity";
import { TextProps } from "./text-props";
import { TextTypes } from "./text-types";

const Label = styled.label<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Paragraph = styled.p<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Span = styled.span<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Pre = styled.pre<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Blockquote = styled.blockquote<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Caption = styled.caption<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Sub = styled.sub<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  top: -0.5rem;

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Sup = styled.sup<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  top: 0.5em;

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

const Emphasis = styled.em<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-weight: ${typography.weight.bold};
`;

const Italic = styled.i<TextProps>`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};

  font-style: italic;

  ${(props) => props.bold && `font-weight: ${typography.weight.bold};`}
`;

export const Text: FC<TextProps> = ({ children, type, bold, ...props }) => {
  switch (type) {
    case TextTypes.blockquote: {
      return (
        <Blockquote bold={bold} {...props}>
          {children}
        </Blockquote>
      );
    }
    case TextTypes.caption: {
      return (
        <Caption bold={bold} {...props}>
          {children}
        </Caption>
      );
    }
    case TextTypes.emphasis: {
      return (
        <Emphasis bold={bold} {...props}>
          {children}
        </Emphasis>
      );
    }
    case TextTypes.italic: {
      return (
        <Italic bold={bold} {...props}>
          {children}
        </Italic>
      );
    }
    case TextTypes.label: {
      return (
        <Label bold={bold} {...props}>
          {children}
        </Label>
      );
    }
    case TextTypes.paragraph: {
      return (
        <Paragraph bold={bold} {...props}>
          {children}
        </Paragraph>
      );
    }
    case TextTypes.pre: {
      return (
        <Pre bold={bold} {...props}>
          {children}
        </Pre>
      );
    }
    case TextTypes.span: {
      return (
        <Span bold={bold} {...props}>
          {children}
        </Span>
      );
    }
    case TextTypes.sub: {
      return (
        <Sub bold={bold} {...props}>
          {children}
        </Sub>
      );
    }
    case TextTypes.sup: {
      return (
        <Sup bold={bold} {...props}>
          {children}
        </Sup>
      );
    }
    default: {
      return (
        <Paragraph bold={bold} {...props}>
          {children}
        </Paragraph>
      );
    }
  }
};
