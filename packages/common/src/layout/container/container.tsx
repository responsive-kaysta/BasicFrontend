import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { GlobalStyle, pageMargins } from "../../identity";
import { ContainerProps } from "./container-props";

const StyledMain = styled.main<ContainerProps>`
  ${(props) =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
    `}
`;

const StyledArticle = styled.article<ContainerProps>`
  ${(props) => props.padding && pageMargins}
`;

export const LayoutContainer: FC<ContainerProps> = ({
  children,
  backgroundColor,
  padding,
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain id="layout-container" backgroundColor={backgroundColor}>
        <StyledArticle padding={padding}>{children}</StyledArticle>
      </StyledMain>
    </>
  );
};
