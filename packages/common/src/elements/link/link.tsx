import { darken } from "polished";
import * as React from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { color } from "../../identity";
import { Icon } from "../icon";
import { Appearance } from "./appearance";
import { LinkProps } from "./link-props";

const linkStyles = css<LinkProps>`
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${darken(0.1, color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${(props) =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};

  ${(props) =>
    props.appearance === Appearance.SECONDARY &&
    css`
      color: ${color.mediumdark};

      &:hover {
        color: ${color.dark};
      }

      &:active {
        color: ${color.darker};
      }
    `};

  ${(props) =>
    props.appearance === Appearance.TERTIARY &&
    css`
      color: ${color.dark};

      &:hover {
        color: ${color.darkest};
      }

      &:active {
        color: ${color.mediumdark};
      }
    `};

  ${(props) =>
    props.appearance === Appearance.NOCHROME &&
    css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${(props) =>
    props.appearance === Appearance.INVERSE &&
    css`
      color: ${color.lightest};

      &:hover {
        color: ${color.lighter};
      }

      &:active {
        color: ${color.light};
      }
    `};

  ${(props) =>
    props.isButton &&
    css`
      border: 0;
      border-radius: 0;
      background: none;
      padding: 0;
      font-size: inherit;
    `};
`;

const LinkInner = styled.span<LinkProps>`
  ${(props) =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const LinkA = styled.a`
  ${linkStyles};
`;

const LinkButton = styled.a`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${linkStyles};
`;

export const Link: FC<LinkProps> = ({
  children,
  href,
  appearance,
  containsIcon,
  isButton,
  withArrow,
  ...props
}) => {
  const content = (
    <>
      <LinkInner href={href} withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon="arrowright" />}
      </LinkInner>
    </>
  );

  if (isButton) {
    return (
      <LinkButton href={href} {...props}>
        {content}
      </LinkButton>
    );
  } else {
    return (
      <LinkA href={href} {...props}>
        {content}
      </LinkA>
    );
  }
};
