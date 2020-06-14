import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Hr } from "../../elements";
import { contentMargin, contentMarginSmall } from "../../identity";
import { HeaderProps } from "./header-props";

const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${(props) => props.withMargin && props.withRuler && contentMarginSmall}
  ${(props) => props.withMargin && !props.withRuler && contentMargin}
`;

export const Header: FC<HeaderProps> = ({
  children,
  withRuler,
  rulerColor,
  withMargin,
}) => {
  return (
    <>
      <HeaderContainer
        withMargin={withMargin}
        withRuler={withRuler}
        rulerColor={rulerColor}
      >
        {children}
      </HeaderContainer>
      {withRuler && <Hr color={rulerColor} withMargin />}
    </>
  );
};
