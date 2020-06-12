import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Hr } from "../../elements";
import { contentMargin, contentSmallMargin } from "../../identity";
import { HeaderProps } from "./header-props";

const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${(props) =>
    props.withMargin &&
    (props.smallMargin ? contentSmallMargin : contentMargin)}
`;

export const Header: FC<HeaderProps> = ({
  children,
  withRuler,
  rulerColor,
  withMargin,
  smallMargin,
}) => {
  return (
    <>
      <HeaderContainer
        withMargin={withMargin}
        withRuler={withRuler}
        rulerColor={rulerColor}
        smallMargin={smallMargin}
      >
        {children}
      </HeaderContainer>
      {withRuler && <Hr color={rulerColor} withMargin smallMargin />}
    </>
  );
};
