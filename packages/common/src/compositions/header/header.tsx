import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Hr } from "../../elements";
import { HeaderProps } from "./header-props";

const HeaderContainer = styled.header`
  margin: 0;
  padding: 0;
`;

const FlexContainer = styled.head`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const Header: FC<HeaderProps> = ({
  children,
  withRuler,
  rulerColor,
}) => {
  return (
    <HeaderContainer>
      <FlexContainer>{children}</FlexContainer>
      {withRuler && <Hr color={rulerColor} />}
    </HeaderContainer>
  );
};
