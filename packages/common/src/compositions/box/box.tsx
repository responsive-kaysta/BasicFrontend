import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { spacing, color } from "../../identity";

const StyledBox = styled.div`
  margin: ${spacing.margin.xsmall}rem;
  padding: ${spacing.padding.xsmall}px;

  min-width: 20%;
  max-width: 33%;
  min-height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${spacing.borderSize.small}px ${color.border} solid;
  border-radius: ${spacing.borderRadius.default}px;
`;

export const Box: FC = ({ children }) => {
  return (
    <>
      <StyledBox id="layout-box">{children}</StyledBox>
    </>
  );
};
