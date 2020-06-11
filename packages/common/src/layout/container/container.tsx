import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { GlobalStyle, pageMargins } from "../../identity";
import { ContainerProps } from "./container-props";

const StyledMain = styled.main<ContainerProps>`
  ${(props) => props.padding && pageMargins}
`;

export const LayoutContainer: FC<ContainerProps> = ({
  children,
  backgoundColor,
  height,
  padding,
  width,
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain
        id="layout-container"
        backgoundColor={backgoundColor}
        height={height}
        width={width}
        padding={padding}
      >
        {children}
      </StyledMain>
    </>
  );
};
