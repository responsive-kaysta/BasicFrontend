import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../identity";

type LayoutContainer = {
  children: React.ReactNode;
};

const StyledMain = styled.main`
  margin: 0;
  padding: 0;
`;

export const LayoutContainer: FC<LayoutContainer> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain id="layout-container">{children}</StyledMain>
    </>
  );
};
