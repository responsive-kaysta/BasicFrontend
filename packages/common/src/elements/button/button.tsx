import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { color, easing, typography } from "../../identity";
import { ButtonProps } from "./button-props";
import { Sizes } from "./sizes";
import { Appearance } from "./appearance";
import { darken, rgba, opacify } from "polished";

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const ButtonInner: FC = ({ children }) => <Text>{children}</Text>;

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props) =>
    props.size === Sizes.SMALL ? "8px 16px" : "13px 20px"};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;


  font-size: ${(props) =>
    props.size === Sizes.SMALL ? typography.size.s1 : typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;

  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    transition: transform 700ms ${easing.rubber};
    opacity: 1;
  }


  svg {
    height: ${(props) => (props.size === Sizes.SMALL ? "14" : "16")}px;
    width: ${(props) => (props.size === Sizes.SMALL ? "14" : "16")}px;
    vertical-align: top;
    margin-right: ${(props) => (props.size === Sizes.SMALL ? "4" : "6")}px;
    margin-top: ${(props) => (props.size === Sizes.SMALL ? "-1" : "-2")}px;
    margin-bottom: ${(props) => (props.size === Sizes.SMALL ? "-1" : "-2")}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === Sizes.SMALL ? "7" : "12"}px;
    `}

  ${(props) =>
    props.appearance === Appearance.PRIMARY &&
    `
      background: ${color.primary};
      color: ${color.lightest};

          &:hover {
            background: ${darken(0.05, color.primary)};
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
          }
    `}

  ${(props) =>
    props.appearance === Appearance.SECONDARY &&
    `
      background: ${color.secondary};
      color: ${color.lightest};

          &:hover {
            background: ${darken(0.05, color.secondary)};
            box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
    `}

  ${(props) =>
    props.appearance === Appearance.TERTIARY &&
    `
      background: ${color.tertiary};
      color: ${color.darkest};

          &:hover {
            background: ${darken(0.05, color.tertiary)};
            box-shadow: ${rgba(color.darkest, 0.05)} 0 8px 18px 0px;
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.darkest, 0.15)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.darkest, 0.05)} 0 8px 18px 0px;
          }
    `}

  ${(props) =>
    props.appearance === Appearance.OUTLINE &&
    `
      box-shadow: ${opacify(0.05, color.border)} 0 0 0 1px inset;
      color: ${color.dark};
      background: transparent;

          &:hover {
            box-shadow: ${opacify(0.3, color.border)} 0 0 0 1px inset;
          }

          &:active {
            background: ${opacify(0.05, color.border)};
            box-shadow: transparent 0 0 0 1px inset;
            color: ${color.darkest};
          }

          &:active:focus:hover {
            ${
              /* This prevents the semi-transparent border from appearing atop the background */ ""
            }
            background: ${opacify(0.05, color.border)};
            box-shadow:  ${rgba(color.darkest, 0.15)} 0 1px 9px 2px;
          }

          &:focus {
            box-shadow: ${opacify(0.05, color.border)} 0 0 0 1px inset, 
            ${rgba(color.darkest, 0.15)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${opacify(0.05, color.border)} 0 0 0 1px inset, 
            ${rgba(color.darkest, 0.05)} 0 8px 18px 0px;
          }
    `};

    ${(props) =>
      props.appearance === Appearance.PRIMARY_OUTLINE &&
      `
        box-shadow: ${color.primary} 0 0 0 1px inset;
        color: ${color.primary};

        &:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.primary};
          box-shadow: ${color.primary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(
        color.primary,
        0.4
      )} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.primary} 0 0 0 1px inset, ${rgba(
        color.primary,
        0.2
      )} 0 8px 18px 0px;
        }
      `};

    ${(props) =>
      props.appearance === Appearance.SECONDARY_OUTLINE &&
      `
        box-shadow: ${color.secondary} 0 0 0 1px inset;
        color: ${color.secondary};

        &:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${color.secondary};
          box-shadow: ${color.secondary} 0 0 0 1px inset;
          color: ${color.lightest};
        }
        &:focus {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${color.secondary} 0 0 0 1px inset,
            ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
        }
      `};

      ${(props) =>
        props.appearance === Appearance.INVERSE_PRIMARY &&
        `
          background: ${color.lightest};
          color: ${color.primary};

              &:hover {
                background: ${color.lightest};
              }
              &:active {
                box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
              }
              &:focus {
                box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
              }
              &:focus:hover {
                box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
              }
      `}

      ${(props) =>
        props.appearance === Appearance.INVERSE_SECONDARY &&
        `
          background: ${color.lightest};
          color: ${color.secondary};

              &:hover {
                background: ${color.lightest};
              }
              &:active {
                box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
              }
              &:focus {
                box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
              }
              &:focus:hover {
                box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
              }
      `}

      ${(props) =>
        props.appearance === Appearance.INVERSE_OUTLINE &&
        `
          box-shadow: ${color.lightest} 0 0 0 1px inset;
          color: ${color.lightest};

          &:hover {
            box-shadow: ${color.lightest} 0 0 0 1px inset;
            background: transparent;
          }

          &:active {
            background: ${color.lightest};
            box-shadow: ${color.lightest} 0 0 0 1px inset;
            color: ${color.darkest};
          }
          &:focus {
            box-shadow: ${color.lightest} 0 0 0 1px inset,
              ${rgba(color.darkest, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${color.lightest} 0 0 0 1px inset,
              ${rgba(color.darkest, 0.2)} 0 8px 18px 0px;
          }
      `};

`;

export const Button: FC<ButtonProps> = ({
  children,
  appearance,
  containsIcon,
  isDisabled,
  isLink,
  isUnclickable,
  size,
  ...props
}) => {
  console.log("Button");

  return (
    <StyledButton appearance={appearance} {...props}>
      <ButtonInner>{children}</ButtonInner>
    </StyledButton>
  );
};
