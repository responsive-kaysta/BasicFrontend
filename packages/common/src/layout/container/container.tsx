import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { GlobalStyle, pageMargins, spacing } from "../../identity";
import { ContainerProps } from "./container-props";

const StyledMain = styled.main<ContainerProps>`
  ${(props) =>
    props.backgroundColor &&
    `
    background-color: ${props.backgroundColor};
    `}
    margin-top: ${spacing.margin.xlarge}rem;
`;

const StyledArticle = styled.article<ContainerProps>`
  ${(props) => props.withPageMargin && pageMargins}
`;

export const LayoutContainer: FC<ContainerProps> = ({
  children,
  backgroundColor,
  withPageMargin,
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain id="layout-container" backgroundColor={backgroundColor}>
        <StyledArticle withPageMargin={withPageMargin}>
          {children}
        </StyledArticle>
      </StyledMain>
    </>
  );
};
