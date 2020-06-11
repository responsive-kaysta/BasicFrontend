import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  margin: 0;
  padding: 0;
`;

export const Box: FC = ({ children }) => {
  return <StyledBox id="layout-box">{children}</StyledBox>;
};
